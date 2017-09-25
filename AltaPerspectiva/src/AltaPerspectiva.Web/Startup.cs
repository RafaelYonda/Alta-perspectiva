using System;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using AltaPerspectiva.Core;
using Questions.Command;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.EntityFrameworkCore;
using Questions.Command.DbContext;
using Questions.Query;
using Questions.Query.DbContext;
using Newtonsoft.Json;
using Microsoft.Extensions.Caching.Distributed;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using Blog.Command.BlogDbContext;
using Blog.Command.CommandHandler;
using Blog.Command.Commands;
using Blog.Query;
using UserProfile.Query.Queries;
using UserProfile.Command.Commands;
using UserProfile.Command.CommandHandler;
using UserProfile.Command.UserProfileDBContext;
using UserProfile.Query;
using Questions.Command.Commands;
using Questions.Command.CommandHandler;
using Questions.Commands;
using Questions.Query.Queries;
using Blog.Query.Interfaces;
using Blog.Query.Queries;
using UserProfile.Query.Interfaces;
using UserProfile.Command.Commands.Update;
using UserProfile.CommandHandler;
using Questions.Query.Intefaces;
using UserProfile.Command.Commands.Delete;
using UserProfile.Command.CommandHandler.Delete;
using Microsoft.IdentityModel.Tokens;

namespace AltaPerspectiva
{
    public class Startup
    {
        public static string ConnectionString { get; private set; }
        public static string SendGridApiKey { get; private set; }
        public static string Url { get; private set; }
        public static string AuthUrl { get; private set; }
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
            ConnectionString = Configuration.GetValue<string>("Data:DefaultConnection:ConnectionString");
            SendGridApiKey = Configuration.GetValue<string>("Data:SendGridApiKey");
#if DEBUG

            Url = "http://alta-staging.azurewebsites.net/";
            AuthUrl = "http://alta-staging-auth.azurewebsites.net/";
#else

            Url = "http://alta-staging.azurewebsites.net/";
            AuthUrl = "http://alta-staging-auth.azurewebsites.net/";
            //Url = "http://www.altaperspectiva.com/"; 
            //AuthUrl = "http://altaauth.azurewebsites.net";
#endif

        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
            services.AddSession(options =>
            {
                // Set a short timeout for easy testing.
                options.IdleTimeout = TimeSpan.FromDays(3);
                options.CookieHttpOnly = true;
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

            services.AddDbContext<BlogDbContext>(options =>
                            options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));
            services.AddDbContext<BlogQueryDbContext>(options =>
                            options.UseSqlServer(Configuration["Data:DefaultConnection:ConnectionString"]));

            services.AddTransient<ICommandsFactory, CommandFactory>(serviceProvider => new CommandFactory(x => serviceProvider.GetServices(x).ToArray()));
            services.AddTransient<IQueryFactory, QueryFactory>(serviceProvider => new QueryFactory(x => serviceProvider.GetRequiredService(x)));

            services.AddTransient<IQuestionsQuery, QuestionsQuery>();
            services.AddTransient<IQuestionsSearchQuery, QuestionsSearchQuery>();
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
            services.AddTransient<ICategoriesKeywordsAllQuery, CategoriesKeywordsAllQuery>();
            services.AddTransient<IQuestionCommentsQuery, QuestionCommentsQuery>();
            services.AddTransient<IAnswerCommentsQuery, AnswerCommentsQuery>();

            services.AddTransient<ICommandHandler<AddQuestionCommand>, AddQuestionCommandHandler>();
            services.AddTransient<ICommandHandler<AddQuestionCommand>, QuestionAddedNotificationCommandHandler>();

            services.AddTransient<ICommandHandler<AddAnswerCommand>, AddAnswerCommandHandler>();
            services.AddTransient<ICommandHandler<AddAnswerCommand>, AnswerAddedNotificationCommandHandler>();

            services.AddTransient<ICommandHandler<AddCommentCommand>, AddCommentCommandHandler>();
            services.AddTransient<ICommandHandler<AddCommentCommand>, CommentAddedNotificationCommandHandler>();

            services.AddTransient<ICommandHandler<AddLikeCommand>, AddLikeCommandHandler>();
            services.AddTransient<ICommandHandler<FollowCategoryCommand>, FollowCategoryCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateViewCountCommand>, UpdateViewCountCommandHandler>();
            services.AddTransient<ICommandHandler<AddShareQuestionCommand>, AddShareQuestionCommandHandler>();

            services.AddTransient<IQuestionFollowingQuery, QuestionFollowingQuery>();

            //Direct question
            services.AddTransient<IDirectQuestionQuery, DirectQuestionQuery>();
            services.AddTransient<ICommandHandler<DirectQuestionCommand>, AddDirectQuestionCommandHandler>();

            #region UserFrofile

            //Credential
            services.AddTransient<ICredentialQuery, CredentialQuery>();
            services.AddTransient<ICommandHandler<AddCredentialCommand>, AddCredentialCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateCredentialCommand>, UpdateCredentialCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateUserImageCommand>, UpdateUserImageCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateProfileViewCountCommand>, UpdateProfileViewCountCommandHandler>();

            //Employment
            services.AddTransient<IEmploymentQuery, EmploymentQuery>();
            services.AddTransient<ICommandHandler<AddEmploymentCommand>, AddEmploymentCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateEmploymentCommand>, UpdateEmploymentCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteEmploymentCommand>, DeleteEmploymentCommandHandler>();


            //Education
            services.AddTransient<IEducationQuery, EducationQuery>();
            services.AddTransient<ICommandHandler<AddEducationCommand>, AddEducationCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateEducationCommand>, UpdateEducationCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteEducationCommand>, DeleteEducationCommandHandler>();

            //Place
            services.AddTransient<IPlaceQuery, PlaceQuery>();
            services.AddTransient<ICommandHandler<AddPlaceCommand>, AddPlaceCommandHandler>();
            services.AddTransient<ICommandHandler<UpdatePlaceCommand>, UpdatePlaceCommandHandler>();
            services.AddTransient<ICommandHandler<DeletePlaceCommand>, DeletePlaceCommandHandler>();


            //OtherExperience
            services.AddTransient<IOtherExperienceQuery, OtherExperienceQuery>();
            services.AddTransient<ICommandHandler<AddOtherExperienceCommand>, AddOtherExperienceCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateOtherExperienceCommand>, UpdateOtherExperienceCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteOtherExperienceCommand>, DeleteOtherExperienceCommandHandler>();
            //User
            services.AddTransient<IUserQuery, UserQuery>();


            //readmodels
            services.AddTransient<IProfileParameters, ProfileParameters>();

            //Social Link
            services.AddTransient<ICommandHandler<UpdateSocialLinkCommand>, UpdateSocialLinkCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteSocialLinkCommand>, DeleteSocialLinkCommandHandler>();


            #endregion
            //AddCategoryCommand
            services.AddTransient<ICommandHandler<AddCategoryCommand>, AddCategoryCommandHandler>();
            //UpdateCategoryCommand
            services.AddTransient<ICommandHandler<UpdateCategoryCommand>, UpdateCategoryCommandHandler>();
            //DeleteCategoryCommand
            services.AddTransient<ICommandHandler<DeleteCategoryCommand>, DeleteCategoryCommandHandler>();


            //AddKeyword
            services.AddTransient<ICommandHandler<AddKeywordCommand>, AddKeywordCommandHandler>();

            //Get all like
            services.AddTransient<ILikeQuery, LikeQuery>();



            //Add Topic and Level
            services.AddTransient<ICommandHandler<AddTopicCommand>, AddTopicCommandHandler>();
            services.AddTransient<ITopicQuery, TopicQuery>();

            services.AddTransient<ICommandHandler<AddLevelCommand>, AddLevelCommandHandler>();
            services.AddTransient<ICommandHandler<AddQuestionLevelCommand>, AddQuestionLevelCommandHandler>();
            services.AddTransient<ILevelQuery, LevelQuery>();

            //QuestionByTopicId
            services.AddTransient<IGetQuestionByTopicId, GetQuestionByTopicId>();

            //Bookmarks
            services.AddTransient<ICommandHandler<AddBookmarkCommand>, AddBookmarkCommandHandler>();

            //Update question
            //Bookmarks
            services.AddTransient<ICommandHandler<UpdateQuestionCommand>, UpdateQuestionCommandHandler>();

            //Question Report

            services.AddTransient<ICommandHandler<QuestionReportCommand>, QuestionReportCommandHandler>();
            services.AddTransient<ICommandHandler<AddQuestionFollowingCommand>, AddQuestionFollowingCommandHandler>();

            services.AddTransient<IQuestionReportQuery, QuestionReportQuery>();
            services.AddTransient<ICommandHandler<InvalidQuestionReportCommand>, InvalidQuestionReportCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteQuestionReportCommand>, DeleteQuestionReportCommandHandler>();

            //Drafted answer
            services.AddTransient<ICommandHandler<DraftedAnswerCommand>, DraftedAnswerCommandHandler>();
            //topic and level
            services.AddTransient<ICommandHandler<UpdateTopicCommand>, UpdateTopicCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateKeywordCommand>, UpdateKeywordCommandHandler>();

            #region Blog

            //Blog
            services.AddTransient<IBlogQuery, BlogQuery>();
            services.AddTransient<ICommandHandler<AddBlogCommand>, AddBlogCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateBlogCommand>, UpdateBlogCommandHandler>();
            //BlogPost
            services.AddTransient<IBlogPostQuery, BlogPostQuery>();
            services.AddTransient<IBlogPostCommentQuery, BlogPostCommentQuery>();
            services.AddTransient<IBlogPostLikeQuery, BlogPostLikeQuery>();
            services.AddTransient<ICommandHandler<AddBlogPostCommand>, AddBlogPostCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteBlogPostCommand>, DeleteBlogPostCommandHandler>();
            services.AddTransient<ICommandHandler<AddBlogCommentCommand>, AddBlogCommentCommandHandler>();
            services.AddTransient<ICommandHandler<AddBlogLikeCommand>, AddBlogLikeCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateBlogPostViewCountCommand>, UpdateBlogPostViewCountCommandHandler>();

            #endregion

            #region VitualStore

            services.AddTransient<IVirtualStoreQuery, VirtualStoreQuery>();
            services.AddTransient<ICommandHandler<AddVirtualStoreCommand>, AddVirtualStoreCommandHandler>();
            services.AddTransient<ICommandHandler<UpdateVirtualStoreCommand>, UpdateVirtualStoreCommandHandler>();
            services.AddTransient<ICommandHandler<DeleteVirtualStoreCommand>, DeleteVirtualStoreCommandHandler>();
            services.AddTransient<ICommandHandler<AddProductCommentCommand>, AddProductCommentCommandHandler>();
            #endregion

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IDistributedCache cache)
        {
            app.UseSession();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();
            loggerFactory.AddFile(Path.Combine(env.WebRootPath, "logs/altaperspectiva-{Date}.txt"));
            app.UseApplicationInsightsRequestTelemetry();
            app.UseDeveloperExceptionPage();
            app.UseMiddleware(typeof(ErrorHandlingMiddleware));


            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                LoginPath = new PathString("/signin"),
                ExpireTimeSpan = TimeSpan.FromDays(3),
            });

            app.UseOpenIdConnectAuthentication(new OpenIdConnectOptions
            {
                // Note: these settings must match the application details
                // inserted in the database at the server level.
                //   ClientId = "localhost", // for localhost
                //  PostLogoutRedirectUri = "http://localhost:5273/",

#if DEBUG
                ClientId = "localhost", // for localhost
                PostLogoutRedirectUri = "http://localhost:5273/",         //for localhost
                //Authority = "http://alta-staging-auth.azurewebsites.net/",

#else
               
                ClientId = "staging",       // for staging server  
                PostLogoutRedirectUri = "http://alta-staging.azurewebsites.net/",  //for Staging
                //Authority = "http://alta-staging-auth.azurewebsites.net/",


                // ClientId = "azure",       // for azure deploy  altaperspectiva
                // PostLogoutRedirectUri = "http://www.altaperspectiva.com/",   //for azure
                //Authority = "http://altaauth.azurewebsites.net",
#endif

                ClientSecret = "aLtaseCreT!@#",
         
                RequireHttpsMetadata = false,
                GetClaimsFromUserInfoEndpoint = true,
                SaveTokens = true,

                // Use the authorization code flow. 
                ResponseType = OpenIdConnectResponseType.Code,
                AuthenticationMethod = OpenIdConnectRedirectBehavior.RedirectGet,
                TokenValidationParameters = new TokenValidationParameters() { NameClaimType = "name" },

                // Note: setting the Authority allows the OIDC client middleware to automatically
                // retrieve the identity provider's configuration and spare you from setting
                // the different endpoints URIs or the token validation parameters explicitly.

                Authority = "http://localhost:54540",

                

                Scope = { "email", "roles" }

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

        }
    }
}
