using System.Linq;
using CryptoHelper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AltaPerspectiva.Identity;
using Altaperspectiva.OpenId.Services;
using NWebsec.AspNetCore.Middleware;
using OpenIddict;
using OpenIddict.Core;
using OpenIddict.Models;
using Microsoft.AspNetCore.Hosting;

namespace Altaperspectiva.OpenId {
    public class Startup {

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();                       
        }

        public IConfigurationRoot Configuration { get; }

        public void ConfigureServices(IServiceCollection services) {           

            services.AddMvc();
            services.AddSingleton<IConfigurationRoot>(provider => Configuration);
            services.AddSession();
            services.AddDbContext<ApplicationUserDbContext>(options => {
                // Configure the context to use Microsoft SQL Server.
                options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]);

                // Register the entity sets needed by OpenIddict.
                // Note: use the generic overload if you need
                // to replace the default OpenIddict entities.
                options.UseOpenIddict();
            });

            

            // Register the Identity services.
            services.AddIdentity<ApplicationUser, IdentityRole>(o=> {
                    o.Password.RequireDigit = false;
                    o.Password.RequireLowercase = false;
                    o.Password.RequireUppercase = false;
                    o.Password.RequireNonAlphanumeric = false;
                    o.Password.RequiredLength = 6;
                })
                .AddEntityFrameworkStores<ApplicationUserDbContext>()
                .AddDefaultTokenProviders();

            // Register the OpenIddict services, including the default Entity Framework stores.
            services.AddOpenIddict()

               .AddEntityFrameworkCoreStores<ApplicationUserDbContext>()
                // Register the ASP.NET Core MVC binder used by OpenIddict.
                // Note: if you don't call this method, you won't be able to
                // bind OpenIdConnectRequest or OpenIdConnectResponse parameters.
                .AddMvcBinders()

                // Enable the authorization, logout, token and userinfo endpoints.
                .EnableAuthorizationEndpoint("/connect/authorize")
                .EnableLogoutEndpoint("/connect/logout")
                .EnableTokenEndpoint("/connect/token")
                .EnableUserinfoEndpoint("/Account/Userinfo")

                // Note: the Mvc.Client sample only uses the code flow and the password flow, but you
                // can enable the other flows if you need to support implicit or client credentials.
                .AllowAuthorizationCodeFlow()
                .AllowPasswordFlow()
                .AllowRefreshTokenFlow()

                // Make the "client_id" parameter mandatory when sending a token request.
                .RequireClientIdentification()

                // During development, you can disable the HTTPS requirement.
                .DisableHttpsRequirement()

                // When request caching is enabled, authorization and logout requests
                // are stored in the distributed cache by OpenIddict and the user agent
                // is redirected to the same page with a single parameter (request_id).
                // This allows flowing large OpenID Connect requests even when using
                // an external authentication provider like Google, Facebook or Twitter.
                .EnableRequestCaching()

                // Register a new ephemeral key, that is discarded when the application
                // shuts down. Tokens signed using this key are automatically invalidated.
                // This method should only be used during development.
                .AddEphemeralSigningKey();

            // On production, using a X.509 certificate stored in the machine store is recommended.
            // You can generate a self-signed certificate using Pluralsight's self-cert utility:
            // https://s3.amazonaws.com/pluralsight-free/keith-brown/samples/SelfCert.zip
            // 
            // services.AddOpenIddict<ApplicationDbContext>()
            //     .AddSigningCertificate("7D2A741FE34CC2C7369237A5F2078988E17A6A75");
            // 
            // Alternatively, you can also store the certificate as an embedded .pfx resource
            // directly in this assembly or in a file published alongside this project:
            // 
            // services.AddOpenIddict<ApplicationDbContext>()
            //     .AddSigningCertificate(
            //          assembly: typeof(Startup).GetTypeInfo().Assembly,
            //          resource: "Altaperspectiva.OpenId.Certificate.pfx",
            //          password: "OpenIddict");

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();
        }

        public void Configure(IApplicationBuilder app) {
            app.UseDeveloperExceptionPage();

            app.UseStaticFiles();

            // Add a middleware used to validate access
            // tokens and protect the API endpoints.
            app.UseOAuthValidation();

            // Alternatively, you can also use the introspection middleware.
            // Using it is recommended if your resource server is in a
            // different application/separated from the authorization server.
            // 
            //app.UseOAuthIntrospection(options =>
            //{
            //    options.AutomaticAuthenticate = true;
            //    options.AutomaticChallenge = true;
            //    options.Authority = "http://localhost:54540/";
            //    options.Audience = "resource_server";
            //    options.ClientId = "resource_server";
            //    options.ClientSecret = "875sqd4s5d748z78z7ds1ff8zz8814ff88ed8ea4z4zzd";
            //});
            app.UseSession();
            app.UseCsp(options => options.DefaultSources(directive => directive.Self())
                .ImageSources(directive => directive.Self()
                    .CustomSources("*"))
                .ScriptSources(directive => directive.Self()
                    .UnsafeInline())
                .StyleSources(directive => directive.Self()
                    .UnsafeInline()));

            app.UseXContentTypeOptions();

            app.UseXfo(options => options.Deny());

            app.UseXXssProtection(options => options.EnabledWithBlockMode());

            app.UseIdentity();

            app.UseGoogleAuthentication(new GoogleOptions {
                ClientId = "560027070069-37ldt4kfuohhu3m495hk2j4pjp92d382.apps.googleusercontent.com",
                ClientSecret = "n2Q-GEw9RQjzcRbU3qhfTj8f"
            });

            //app.UseTwitterAuthentication(new TwitterOptions {
            //    ConsumerKey = "6XaCTaLbMqfj6ww3zvZ5g",
            //    ConsumerSecret = "Il2eFzGIrYhz6BWjYhVXBPQSfZuS4xoHpSSyD9PI"
            //});

           // app.UseStatusCodePagesWithReExecute("/error");

            app.UseOpenIddict();

            app.UseMvcWithDefaultRoute();

            using (var context = new ApplicationUserDbContext(
               app.ApplicationServices.GetRequiredService<DbContextOptions<ApplicationUserDbContext>>()))
            {
                context.Database.EnsureCreated();

                var applications = context.Set<OpenIddictApplication>();

                // Add Mvc.Client to the known applications.
                if (!applications.Any())
                {
                    // Note: when using the introspection middleware, your resource server
                    // MUST be registered as an OAuth2 client and have valid credentials.
                    //
                    // context.Applications.Add(new OpenIddictApplication {
                    //     Id = "resource_server",
                    //     DisplayName = "Main resource server",
                    //     Secret = Crypto.HashPassword("secret_secret_secret"),
                    //     Type = OpenIddictConstants.ClientTypes.Confidential
                    // });

                    //applications.Add(new OpenIddictApplication {
                    //    ClientId = "myClient",
                    //    ClientSecret = Crypto.HashPassword("secret_secret_secret"),
                    //    DisplayName = "My client application",
                    //    LogoutRedirectUri = "http://localhost:53507",
                    //    RedirectUri = "http://localhost:53507/signin-oidc",
                    //    Type = OpenIddictConstants.ClientTypes.Confidential
                    //});

                    applications.Add(new OpenIddictApplication
                    {
                        ClientId = "localhost",
                        ClientSecret = Crypto.HashPassword("aLtaseCreT!@#"),
                        DisplayName = "LocalHost Application",
                        LogoutRedirectUri = "http://localhost:5273/",
                        RedirectUri = "http://localhost:5273/signin-oidc",
                        Type = OpenIddictConstants.ClientTypes.Confidential
                    });

                    applications.Add(new OpenIddictApplication
                    {
                        ClientId = "azure",
                        ClientSecret = Crypto.HashPassword("aLtaseCreT!@#"),
                        DisplayName = "Azure Application",
                        LogoutRedirectUri = "http://altap.azurewebsites.net/",
                        RedirectUri = "http://altap.azurewebsites.net/signin-oidc",
                        Type = OpenIddictConstants.ClientTypes.Confidential
                    });


                    context.SaveChanges();
                }
            }
        }
    }
}
