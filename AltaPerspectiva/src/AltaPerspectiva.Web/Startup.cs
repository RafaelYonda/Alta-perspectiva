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
using Microsoft.Extensions.Caching.Distributed;
using System.Text;
using UserProfile.Query.Queries;
using UserProfile.Command.Commands;
using UserProfile.Command.CommandHandler;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Query;
using Questions.Command.Commands;
using Questions.Command.CommandHandler;

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

            services.AddSingleton<IConfigurationRoot>(provider => Configuration);

            services.AddDistributedMemoryCache();

            services.AddAuthentication(options =>
            {
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
            services.AddDbContext<UserProfileDbContext>(options =>
                            options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));
            services.AddDbContext<UserProfileQueryDbContext>(options =>
                            options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

            services.AddTransient<ICommandsFactory, CommandFactory>(serviceProvider => new CommandFactory(x => serviceProvider.GetServices(x).ToArray()));
            services.AddTransient<IQueryFactory, QueryFactory>(serviceProvider => new QueryFactory(x => serviceProvider.GetRequiredService(x)));

            services.AddTransient<IQuestionsQuery, QuestionsQuery>();
            services.AddTransient<ICategoriesQuery, CategoriesQuery>();
            services.AddTransient<IKeywordsQuery, KeywordsQuery>();
            services.AddTransient<ICategoryMatchKeywordQuery, CategoryMatchKeywordQuery>();
            services.AddTransient<IQuestionByIdQuery, QuestionByIdQuery>();
            services.AddTransient<IQuestionsByCategoryIdQuery, QuestionsByCategoryIdQuery>();
            services.AddTransient<IRelatedQuestionsQuery, RelatedQuestionsQuery>();
            services.AddTransient<ICategoriesTotalQuestionsQuery, CategoriesTotalQuestionsQuery>();
            services.AddTransient<ICategoriesTotalUsersQuery, CategoriesTotalUsersQuery>();
            services.AddTransient<IQuestionsByUserFollowingQuery, QuestionsByUserFollowingQuery>(); 
            services.AddTransient<IQuestionsNotAnsweredQuery, QuestionsNotAnsweredQuery>();
            services.AddTransient<IQuestionsAnsweredQuery, QuestionsAnsweredQuery>();

            services.AddTransient<ICommandHandler<AddQuestionCommand>, AddQuestionCommandHandler>();
            services.AddTransient<ICommandHandler<AddQuestionCommand>, QuestionAddedNotificationCommandHandler>();

            services.AddTransient<ICommandHandler<AddAnswerCommand>, AddAnswerCommandHandler>();
            services.AddTransient<ICommandHandler<AddAnswerCommand>, AnswerAddedNotificationCommandHandler>();

            services.AddTransient<ICommandHandler<AddCommentCommand>, AddCommentCommandHandler>();
            services.AddTransient<ICommandHandler<AddCommentCommand>, CommentAddedNotificationCommandHandler>();

            services.AddTransient<ICommandHandler<AddLikeCommand>, AddLikeCommandHandler>();
            services.AddTransient<ICommandHandler<FollowCategoryCommand>, FollowCategoryCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateViewCountCommand>, UpdateViewCountCommandHandler>();

            //UserProfile DepencyInjection 
            //Biography
            services.AddTransient<IBiographyQuery, BiographyQuery>();
            services.AddTransient<ICommandHandler<AddBiographyCommand>, AddBiographyCommandHandler>();
            //Contract
            services.AddTransient<IContractInformationQuery, ContractInformationQuery>();
            services.AddTransient<ICommandHandler<AddContractInfomaionCommand>, AddContractInformationCommandHandler>();
            //Education
            services.AddTransient<IEducationQuery, EducationQuery>();
            services.AddTransient<ICommandHandler<AddEducationCommand>, AddEducationCommandHandler>();
            //Experience
            services.AddTransient<IExperienceQuery, ExperienceQuery>();
            services.AddTransient<ICommandHandler<AddExperienceCommand>, AddExperienceCommandHandler>();
            //Insight
            services.AddTransient<IInsightQuery, InsightQuery>();
            services.AddTransient<ICommandHandler<AddInsightCommand>, AddInsightCommandHandler>();
            //Practice
            services.AddTransient<IPracticeAreaQuery, PracticeAreaQuery>();
            services.AddTransient<ICommandHandler<AddPracticeAreaCommand>, AddPracticeAreaCommandHandler>();
            services.AddTransient<ICommandHandler<DeletePracticeAreaCommand>, DeletePracticeAreaCommandHandler>();
            //Skill
            services.AddTransient<ISkillQuery, SkillQuery>();
            services.AddTransient<ICommandHandler<AddSkillCommand>, AddSkillCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteSkillCommand>, DeleteSkillCommandHandler>();

            //UserImage
            services.AddTransient<IUserImageQuery, UserImageQuery>();
            services.AddTransient<ICommandHandler<AddUserImageCommand>, AddUserImageCommandHandler>();
            //AddCategoryCommand
            services.AddTransient<ICommandHandler<AddCategoryCommand>, AddCategoryCommandHandler>();
            //UpdateCategoryCommand
            services.AddTransient<ICommandHandler<UpdateCategoryCommand>, UpdateCategoryCommandHandler>();
            //DeleteCategoryCommand
            services.AddTransient<ICommandHandler<DeleteCategoryCommand>, DeleteCategoryCommandHandler>();


            //AddKeyword
            services.AddTransient<ICommandHandler<AddKeywordCommand>, AddKeywordCommandHandler>();

        }


        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IDistributedCache cache)
        {

            app.UseDefaultFiles();
            app.UseStaticFiles();
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseApplicationInsightsRequestTelemetry();

            app.UseDeveloperExceptionPage();


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

                ClientId = "localhost", // for localhost


                //ClientId = "azure",       // for azure deploy 

                ClientSecret = "aLtaseCreT!@#",


                PostLogoutRedirectUri = "http://localhost:5273/",         //for localhost

               // PostLogoutRedirectUri = "http://altap.azurewebsites.net/",   //for azure


                RequireHttpsMetadata = false,
                GetClaimsFromUserInfoEndpoint = true,
                SaveTokens = true,

                // Use the authorization code flow.
                ResponseType = OpenIdConnectResponseType.Code,
                AuthenticationMethod = OpenIdConnectRedirectBehavior.RedirectGet,

                // Note: setting the Authority allows the OIDC client middleware to automatically
                // retrieve the identity provider's configuration and spare you from setting
                // the different endpoints URIs or the token validation parameters explicitly.

               Authority = "http://localhost:54540",

               // Authority = "http://altaauth.azurewebsites.net",

                Scope = { "email", "roles", "offline_access" }
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "Questions",
                    template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                   name: "UserProfile",
                   template: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapRoute("AngularDeepLinkingRoute", "{*url}",
                    new { controller = "Home", action = "Index" });
            });

            //using (var context = new UserProfileDbContext(app.ApplicationServices.GetRequiredService<DbContextOptions<UserProfileDbContext>>()))
            //{
            //    context.Database.EnsureCreated();
            //}

            using (var context = new QuestionsDbContext(
            app.ApplicationServices.GetRequiredService<DbContextOptions<QuestionsDbContext>>()))
            {
                context.Database.EnsureCreated();

                var keywords = context.Categories.Include(x=>x.Keywords).Select(x=> new { Name = x.Name,Id = x.Id,Sequence = x.Sequence,

                                                                                              keywords = x.Keywords.Select(y=>new
                                                                                              {
                                                                                                Id = y.Id,Text = y.Text})
                                                                                              }).ToList();

                cache.SetString("Keywords", JsonConvert.SerializeObject(keywords));
                                               //,new DistributedCacheEntryOptions().SetSlidingExpiration(TimeSpan.FromMinutes(10))
                                               //     .SetAbsoluteExpiration(TimeSpan.FromMinutes(30)));


            }
        }
    }
}
