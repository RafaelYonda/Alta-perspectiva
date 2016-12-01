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
using Microsoft.EntityFrameworkCore;
using Questions.Command.DbContext;
using System.IO;
using Questions.Query;
using Questions.Query.DbContext;
using Newtonsoft.Json;

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
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddAuthentication(options => {
                options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
            });
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            services.AddCors();  

            services.AddMvc();

            services.AddDbContext<QuestionsDbContext>(options =>
                            options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));
            services.AddDbContext<QuestionsQueryDbContext>(options =>
                            options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

            services.AddTransient<ICommandsFactory, CommandFactory>(serviceProvider => new CommandFactory(x=>  serviceProvider.GetServices(x).ToArray()));
            services.AddTransient<IQueryFactory, QueryFactory>(serviceProvider => new QueryFactory(x =>  serviceProvider.GetRequiredService(x)));

            services.AddTransient<IQuestionsQuery, QuestionsQuery>();
            services.AddTransient<ICategoriesQuery,CategoriesQuery>();
            services.AddTransient<IKeywordsQuery, KeywordsQuery>();
            services.AddTransient<ICategoryMatchKeywordQuery, CategoryMatchKeywordQuery>(); 
            services.AddTransient<IQuestionByIdQuery, QuestionByIdQuery>();
            services.AddTransient<IQuestionsByCategoryIdQuery, QuestionsByCategoryIdQuery>();

            services.AddTransient<ICommandHandler<AddQuestionCommand>, AddQuestionCommandHandler>();
            services.AddTransient<ICommandHandler<AddQuestionCommand>, QuestionAddedNotificationCommandHandler>();

            services.AddTransient<ICommandHandler<AddAnswerCommand>, AddAnswerCommandHandler>();
            services.AddTransient<ICommandHandler<AddAnswerCommand>,AnswerAddedNotificationCommandHandler>();
        }     

       
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            //app.Use(async (context, next) =>
            //{
            //    await next();

            //    if (context.Response.StatusCode == 404
            //        && !Path.HasExtension(context.Request.Path.Value))
            //    {
            //        context.Request.Path = "~/";
            //        await next();
            //    }
            //});
            app.UseDefaultFiles();
            app.UseStaticFiles();
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();

            //if (env.IsDevelopment())
            //{
            app.UseDeveloperExceptionPage();
            //app.UseBrowserLink();
            //}
            //else
            //{
            //    app.UseExceptionHandler("/Home/Error");
            //}         

            //app.UseCors(builder => 
            //    builder.AllowAnyHeader()
            //            .AllowAnyMethod()
            //            .AllowAnyOrigin()
            //);

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
                //ClientId = "localhost", // for localhost
                ClientId = "azure",       // for azure deploy 
                ClientSecret = "aLtaseCreT!@#",
                //PostLogoutRedirectUri = "http://localhost:5273/",         //for localhost
                PostLogoutRedirectUri = "http://altap.azurewebsites.net/",   //for azure

                RequireHttpsMetadata = false,
                GetClaimsFromUserInfoEndpoint = true,
                SaveTokens = true,

                // Use the authorization code flow.
                ResponseType = OpenIdConnectResponseType.Code,
                AuthenticationMethod = OpenIdConnectRedirectBehavior.RedirectGet,

                // Note: setting the Authority allows the OIDC client middleware to automatically
                // retrieve the identity provider's configuration and spare you from setting
                // the different endpoints URIs or the token validation parameters explicitly.
                

                Authority = "http://altaauth.azurewebsites.net",

                Scope = { "email", "roles", "offline_access" }
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "Questions",
                    template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });


            using (var context = new QuestionsDbContext(
                app.ApplicationServices.GetRequiredService<DbContextOptions<QuestionsDbContext>>()))
            {
                context.Database.EnsureCreated();
            }
        }
    }
}
