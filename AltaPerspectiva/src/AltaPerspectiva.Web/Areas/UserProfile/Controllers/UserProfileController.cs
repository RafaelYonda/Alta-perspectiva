using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.UserProfile.Models;
using Microsoft.Extensions.Caching.Distributed;
using UserProfile.Query.Queries;
using UserProfile.Command.Commands;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using UserProfile.Domain.ReadModel;
using AltaPerspectiva.Web.Areas.UserProfile.Services;
using UserProfile.Command.CommandHandler;
using UserProfile.Query;
using UserProfile.Query.Interfaces;
using System.IO;
using AltaPerspectiva.Web.Areas.Admin.Helpers;
using Questions.Domain;
using Questions.Query;
using UserProfile.Domain;
using Questions.Query.Intefaces;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.Questions.Services;
using UserProfile.Command.Commands.Delete;
using UserProfile.Command.Commands.Update;
using AltaPerspectiva.Web.Areas.Admin.helpers;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.UserProfile.Controllers
{
    [Area("UserProfile")]
    public class UserProfileController : Controller
    {
        #region Ctor

        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        IDistributedCache cache;
        private readonly IConfigurationRoot configuration;
        private readonly IHostingEnvironment environment;
        public UserProfileController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IDistributedCache _cache, IConfigurationRoot _configuration, IHostingEnvironment _environment)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            cache = _cache;
            configuration = _configuration;
            environment = _environment;
        }

        #endregion
        [HttpGet("userprofile/api/getuser")]
        public IActionResult GetUser()
        {
            Guid loggedinUser = Guid.Empty;// = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
                var model = new UserService().GetUserViewModel(queryFactory, loggedinUser, configuration);
                return Ok(model);

            }
            return Ok();
        }
        [HttpGet("userprofile/api/userinfodetails/{userId}")]
        public IActionResult UserInfoDetails(Guid userId)
        {
            String connectionString =
              configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;
            UserInfoDetails userInfoDetails =
                queryFactory.ResolveQuery<IProfileParameters>().GetUserInfoDetails(userId, connectionString);
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();

            userInfoDetails.ImageUrl = azureFileUploadHelper.GetProfileImage(userInfoDetails.ImageUrl);


            return Ok(userInfoDetails);
        }
        [HttpGet("userprofile/api/getprofileparameter/{userId}")]
        public IActionResult GetProfileParameter(Guid userId)
        {
            String connectionString =
              configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;
            ProfileParameter profileParameter =
                queryFactory.ResolveQuery<IProfileParameters>().GetProfileParameter(userId, connectionString);

            return Ok(profileParameter);
        }
        [HttpGet("userprofile/api/categorywiseanswer/{userId}")]
        public IActionResult GetCategoryWiseAnswer(Guid userId)
        {
            String connectionString =
              configuration.GetSection("Data").GetSection("DefaultConnection").GetSection("ConnectionString").Value;
            List<CategoryWiseAnswer> categoryWiseAnswers =
                queryFactory.ResolveQuery<IProfileParameters>().CategoryWiseAnswerCount(userId, connectionString).OrderByDescending(x => x.AnswerCount).ThenByDescending(x => x.CategoryName).ToList();
            AzureFileUploadHelper azureFileUploadHelper=new AzureFileUploadHelper();
            foreach (var categoryWiseAnswer in categoryWiseAnswers)
            {
                categoryWiseAnswer.ImageUrl = azureFileUploadHelper.GetCategoryImage(categoryWiseAnswer.ImageUrl);
            }

            return Ok(categoryWiseAnswers);
        }
        #region Credentials

        [HttpGet("userprofile/api/credential/getusercredentialbyuserid/{userId}")]
        public IActionResult GetUsercredentialByUserId(Guid userId)
        {
            var credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentialForProfile(userId);
            if (credential != null)
            {
                AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                credential.ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);
            }

            return Ok(credential);
        }


        [HttpGet("userprofile/api/credential/getcredentialbyuserid/{userId}")]
        public IActionResult GetCredentialByUserid(Guid userId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var uid = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(uid?.ElementAt(0).ToString());

            }
            Credential credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(userId);
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            credential.ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);

            return Ok(credential);
        }
        [HttpPost("userprofile/api/credential/savefirstnamelastname")]
        public IActionResult SaveFirstNameLastName(String firstName, String lastName, Guid userId)
        {
            AddCredentialCommand command = new AddCredentialCommand(userId, firstName, lastName, "", "", "");
            commandsFactory.ExecuteQuery(command);
            return Ok(command.Id);//CredentialId
        }
        [HttpPost("userprofile/api/credential/update")]
        public IActionResult UpdateCredential([FromBody]CredentialViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            UpdateCredentialCommand command = new UpdateCredentialCommand(model.UserId, model.FirstName, model.LastName, model.Title, model.Description, null);
            commandsFactory.ExecuteQuery(command);
            return Ok(command.Id);
        }
        [HttpPost("userprofile/api/credential/saveuserimage")]
        public async Task<IActionResult> SaveUserImage(IFormFile file, Guid userId)
        {
            if (file != null)
            {
                AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                await azureFileUploadHelper.SaveProfileImage(file);
                UpdateUserImageCommand cmd = new UpdateUserImageCommand(userId, file.FileName);
                commandsFactory.ExecuteQuery(cmd);
                Guid createdId = cmd.Id;
                Credential credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(userId);

                credential.ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);
                return Ok(credential);
            }
            return Ok();
        }
        [HttpPost("userprofile/api/credential/saveusercroppedimage")]
        public async Task<IActionResult> SaveUserCroppedImage(string file, Guid userId,String imageName )
        {
            if (file != null)
            {
                Base64Image base64Image = Base64Image.Parse(file);
                var byteArray = base64Image.FileContents;

               
                //String imageName = id.ToString() + base64Image.Extension;

                AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                string fileLink = await azureFileUploadHelper.SaveProfileCroppedImageInAzure(base64Image.baseStream,
                    imageName, base64Image.ContentType);


               // answer.Text = answer.Text.Replace(imgTag, fileLink);
                //AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                //await azureFileUploadHelper.SaveProfileImage(file);
                UpdateUserImageCommand cmd = new UpdateUserImageCommand(userId, imageName);
                commandsFactory.ExecuteQuery(cmd);
                Guid createdId = cmd.Id;
                Credential credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(userId);

                credential.ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);
                return Ok(credential);
            }
            return Ok();
        }

        #endregion

        #region Education 
        [HttpGet("userprofile/api/education/geteducation/{credentialId}")]
        public IActionResult GetEducation(Guid credentialId)
        {
            var education = queryFactory.ResolveQuery<IEducationQuery>().GetEducation(credentialId);

            return Ok(education);
        }
        [HttpGet("userprofile/api/education/geteducationbyuserid/{userId}")]
        public IActionResult GetEducationByUserId(Guid userId)
        {
            var education = queryFactory.ResolveQuery<IEducationQuery>().GetEducationByUserId(userId);
            return Ok(education);
        }

        [HttpPost("userprofile/api/education/addeducation")]
        public IActionResult AddEducation([FromBody]EducationViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }

            AddEducationCommand command = new AddEducationCommand(model.CredentialId, model.SchoolName, model.Concentration, model.SecondaryConcentration, model.DegreeType, model.GraduationYear);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
       
        [HttpPost("userprofile/api/education/deleteeducation")]
        public IActionResult DeleteEducation([FromBody]EducationViewModel model)
        {
            DeleteEducationCommand command=new DeleteEducationCommand(model.CredentialId,model.Id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region Employment  
        [HttpGet("userprofile/api/employment/getemployment/{credentialId}")]
        public IActionResult GetEmployment(Guid credentialId)
        {
            
            var education = queryFactory.ResolveQuery<IEmploymentQuery>().GetEmployment(credentialId);

            return Ok(education);
        }
        [HttpGet("userprofile/api/employment/getemploymentbyuserid/{userId}")]
        public IActionResult GetEmploymentByUserId(Guid userId)
        {
            var education = queryFactory.ResolveQuery<IEmploymentQuery>().GetEmploymentByUserId(userId);

            return Ok(education);
        }
        [HttpPost("userprofile/api/employment/addemployment")]
        public IActionResult AddEmployment([FromBody]EmploymentViewModel model)
        {
            
            AddEmploymentCommand command = new AddEmploymentCommand(model.CredentialId, model.Position, model.CompanyName, model.StartDate, model.EndDate, model.IsCurrentlyWorking);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [HttpPost("userprofile/api/education/deleteemployment")]
        public IActionResult DeleteEducation([FromBody]EmploymentViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            DeleteEmploymentCommand command = new DeleteEmploymentCommand(model.CredentialId, model.Id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region Place   
        [HttpGet("userprofile/api/place/getplace/{credentialId}")]
        public IActionResult GetPlace(Guid credentialId)
        {
            var palce = queryFactory.ResolveQuery<IPlaceQuery>().GetPlace(credentialId);

            return Ok(palce);
        }

        [HttpGet("userprofile/api/place/getplacebyuserid/{userId}")]
        public IActionResult GetPlaceByUserId(Guid userId)
        {
            var palce = queryFactory.ResolveQuery<IPlaceQuery>().GetPlaceByUserId(userId);

            return Ok(palce);
        }

        [HttpPost("userprofile/api/place/addplace")]
        public IActionResult AddPlace([FromBody]PlaceViewModel model)
        {
            AddPlaceCommand command = new AddPlaceCommand(model.CredentialId, model.LocationName, model.StartYear, model.EndYear, model.IsCurrentyLiving);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        
        [HttpPost("userprofile/api/place/deleteplace")]
        public IActionResult DeletePlace([FromBody]PlaceViewModel model)
        {
            DeletePlaceCommand command = new DeletePlaceCommand(model.CredentialId, model.id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region OtherExperience   
        [HttpGet("userprofile/api/otherexperience/getotherexperience/{credentialId}")]
        public IActionResult GetOtherExperience(Guid credentialId)
        {
            var education = queryFactory.ResolveQuery<IOtherExperienceQuery>().GetOtherExperience(credentialId);

            return Ok(education);
        }
        [HttpGet("userprofile/api/otherexperience/getotherexperiencebyuserid/{userId}")]
        public IActionResult GetOtherExperienceByUserId(Guid userId)
        {
            var education = queryFactory.ResolveQuery<IOtherExperienceQuery>().GetOtherExperienceByUserId(userId);

            return Ok(education);
        }
        [HttpPost("userprofile/api/OtherExperience/addOtherExperience")]
        public IActionResult AddOtherExperience([FromBody]OtherExperienceViewModel model)
        {
            
            AddOtherExperienceCommand command = new AddOtherExperienceCommand(model.CredentialId, model.CategoryId, model.Description);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        
        [HttpPost("userprofile/api/OtherExperience/deleteOtherExperience")]
        public IActionResult DeleteOtherExperience([FromBody]OtherExperienceViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            DeleteOtherExperienceCommand command = new DeleteOtherExperienceCommand(model.CredentialId, model.Id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region QuestionAnswerDirectQuestion
        [HttpGet("userprofile/api/questionbyuserid/{userId}")]
        public async Task<IActionResult> QuestionByCredentialId(Guid userId)
        {
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().ExecuteByUserId(userId);

            List<QuestionViewModel> questionViewModels =
                new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);
            return Ok(questionViewModels);
        }
        [HttpGet("userprofile/api/answerbyuserid/{userId}")]
        public async Task<IActionResult> AnswerByUserId(Guid userId)
        {
            IEnumerable<Question> questionList =
                await queryFactory.ResolveQuery<IQuestionsAnsweredQuery>().ExecuteByUserId(userId);

            List<QuestionViewModel> questionViewModels =
                new QuestionService().GetQuestionViewModels(questionList, queryFactory, configuration);
            return Ok(questionViewModels);
        }
        
        [HttpGet("userprofile/api/followerbyuserid/{userId}")]
        public IActionResult Follower(Guid userId)
        {


            List<Guid> followingUsers =
                queryFactory.ResolveQuery<IQuestionFollowingQuery>().GetFollowers(userId).Select(x => x.UserId).Distinct().ToList();
            AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            List<UserViewModel> userViewModels = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(followingUsers).Select(x => new UserViewModel
            {
                CredentialId = x.Id,
                UserId = x.UserId,
                ImageUrl = azureFileUploadHelper.GetProfileImage(x.ImageUrl),
                Name = x.FirstName + " " + x.LastName,
                Occupation = x.Employments.Select(y => y.Position).Take(1).FirstOrDefault()
            }).ToList();

            return Ok(userViewModels);
        }
        [HttpGet("userprofile/api/followingbyuserId/{userId}")]
        public IActionResult Following(Guid userId)
        {
            List<Guid> followingUsers =
                queryFactory.ResolveQuery<IQuestionFollowingQuery>().GetFollowings(userId).Select(x => x.FollowedUserId).Distinct().ToList();

            AzureFileUploadHelper azureFileUploadHelper=new AzureFileUploadHelper();

            List<UserViewModel> userViewModels = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(followingUsers).Select(x => new UserViewModel
            {
                CredentialId = x.Id,
                UserId = x.UserId,
                ImageUrl = azureFileUploadHelper.GetProfileImage(x.ImageUrl),
                Name = x.FirstName + " " + x.LastName,
                Occupation = x.Employments.Select(y => y.Position).Take(1).FirstOrDefault()
            }).ToList();

            return Ok(userViewModels);
        }
        #endregion


        //For Login username in admin
        public UserViewModel GetUserName()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            //refractoring:My add from User Repository 
            var model = new UserService().GetUserViewModel(queryFactory, loggedinUser, configuration);
            return model;
        }
        #region topFiveUser ,topFiveUserByCategoryId and UserSummary
        [HttpGet("userprofile/api/{categoryId}/gettopFiveUserbycategoryid")]
        public async Task<List<UserSummary>> GetTopFiveUserByCategoryId(Guid categoryId)
        {
            List<UserSummary> summeries = new List<UserSummary>();
            if (categoryId != Guid.Empty)
            {
                summeries = await queryFactory.ResolveQuery<ITopUserQuery>().GetUserSummnaryByCategoryId(categoryId);

            }
            else
            {
                summeries = await queryFactory.ResolveQuery<ITopUserQuery>().GetTopFiveUserSummary();

            }
            summeries = new UserSummaryFilter().GetUserSummaryFilter(summeries,queryFactory,configuration);
            return summeries;

        }
        [HttpGet("userprofile/api/getusersummary/{userId}")]
        public async Task<UserSummary> GetUserSummary(Guid userId)
        {
            var summeries = await queryFactory.ResolveQuery<ITopUserQuery>().GetUserSummary(userId);
            return summeries;
        }
        #endregion


        #region ProfileViewCount
        [HttpPost("userprofile/api/profileviewcount/{userId}")]
        public IActionResult ProfileViewCount(Guid userId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var uId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(uId?.ElementAt(0).ToString());

            }
            if (userId != loggedinUser)
            {
                UpdateProfileViewCountCommand command = new UpdateProfileViewCountCommand(userId);
                commandsFactory.ExecuteQuery(command);
            }

            return Ok();
        }
        #endregion






    }
}
