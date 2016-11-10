using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AltaPerspectiva.Identity;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using AltaPerspectiva.Core;
using Questions.Command;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace AltaPerspectiva
{
    public class Startup
    {
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

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddAuthentication(options => {
                options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            });
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            services.AddCors();  

            services.AddMvc();         

            services.AddTransient<ICommandHandler<AddQuestionCommand>, AddQuestionCommandHandler>();
            services.AddTransient<ICommandHandler<AddQuestionCommand>, QuestionAddedNotificationCommandHandler>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }         

            app.UseCors(builder => 
                builder.AllowAnyHeader()
                        .AllowAnyMethod()
                        .AllowAnyOrigin()
            );

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                LoginPath = new PathString("/signin")
            });
            
            app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            {
                // Note: these settings must match the application details
                // inserted in the database at the server level.
                ClientId = "localhost",
                ClientSecret = "aLtaseCreT!@#",
                PostLogoutRedirectUri = "http://localhost:5273/",

                RequireHttpsMetadata = false,
                GetClaimsFromUserInfoEndpoint = true,
                SaveTokens = true,

                // Use the authorization code flow.
                ResponseType = OpenIdConnectResponseType.Code,
                AuthenticationMethod = OpenIdConnectRedirectBehavior.RedirectGet,

                // Note: setting the Authority allows the OIDC client middleware to automatically
                // retrieve the identity provider's configuration and spare you from setting
                // the different endpoints URIs or the token validation parameters explicitly.
                Authority = "http://localhost:38182/",

                Scope = { "email", "roles" }
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });

            
        }
    }
}
