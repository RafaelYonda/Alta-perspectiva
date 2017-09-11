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
using AltaPerspectiva.Web.Areas.Admin.Models;
using Microsoft.AspNetCore.Authorization;
using System.Data;
using System.Data.SqlClient;
using Dapper;
using Questions.Domain.ReadModel;


// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.UserProfile.Controllers
{
    [Area("UserProfile")]
    public class UserProfileController : Controller
    {
        AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();

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
            Guid loggedinUser;
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
                UserViewModel model ;
                
                string connectionString = Startup.ConnectionString;
                using (IDbConnection dbConnection = new SqlConnection(connectionString))
                {
                    model = new UserServiceOptimized().UserViewModelFromUserId(dbConnection, loggedinUser);
                }
                
                
                return Ok(model);

            }
            return Ok();
        }
        [HttpGet("userprofile/api/userinfodetails/{userId}")]
        public IActionResult UserInfoDetails(Guid userId)
        {
            //String connectionString = Startup.ConnectionString;
            //String query = String.Format("SpUserInfoDetails '{0}'", userId);
            UserInfoDetails userInfoDetails = new UserService().GetUserInfoDetails(userId);
            //using (IDbConnection connection = new SqlConnection(connectionString))
            //{
            //    userInfoDetails = connection.Query<UserInfoDetails>(query).FirstOrDefault();
            //}

            //if (userInfoDetails != null)
            //{
            //    if (!string.IsNullOrEmpty(userInfoDetails.Education))
            //    {
            //        userInfoDetails.Education = userInfoDetails.Education.Trim(' ').Trim(',');
            //    }
            //    if (!string.IsNullOrEmpty(userInfoDetails.Employment))
            //    {
            //        userInfoDetails.Employment = userInfoDetails.Employment.Trim(' ').Trim(',');
            //    }
            //}
            ////    AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
           

            //userInfoDetails.ImageUrl = azureFileUploadHelper.GetProfileImage(userInfoDetails.ImageUrl);


            return Ok(userInfoDetails);
        }
        [HttpGet("userprofile/api/getprofileparameter/{userId}")]
        public async Task<IActionResult> GetProfileParameter(Guid userId)
        {
            String connectionString = Startup.ConnectionString;
            string query = String.Format("SpProfileParameterCount '" + userId + "'");
            ProfileParameter profileParameter = null;
            using (IDbConnection db = new SqlConnection(connectionString))
            {
                profileParameter = await Task.Run(() => db.Query<ProfileParameter>(query).FirstOrDefault());
            }
            return Ok(profileParameter);
        }
        [HttpGet("userprofile/api/categorywiseanswer/{userId}")]
        public IActionResult GetCategoryWiseAnswer(Guid userId)
        {
            String connectionString = Startup.ConnectionString;

            List<CategoryWiseAnswer> categoryWiseAnswers = null;


            using (IDbConnection dbConnection = new SqlConnection(connectionString))
            {
                String query = String.Format(@"[SpCategoryWiseAnswer] '{0}'", userId);
                categoryWiseAnswers = dbConnection.Query<CategoryWiseAnswer>(query).OrderByDescending(x => x.AnswerCount).ThenByDescending(x => x.CategoryName).ToList();
            }
            //categoryWiseAnswers =
            //    queryFactory.ResolveQuery<IProfileParameters>().CategoryWiseAnswerCount(userId, connectionString).OrderByDescending(x => x.AnswerCount).ThenByDescending(x => x.CategoryName).ToList();



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
                // AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
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
            //   AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            credential.ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);

            return Ok(credential);
        }
        [Authorize]
        [HttpPost("userprofile/api/credential/savefirstnamelastname")]
        public IActionResult SaveFirstNameLastName(String firstName, String lastName, Guid userId)
        {
            AddCredentialCommand command = new AddCredentialCommand(userId, firstName, lastName, "", "", "");
            commandsFactory.ExecuteQuery(command);
            return Ok(command.Id);//CredentialId
        }
        [Authorize]
        [HttpPost("userprofile/api/credential/update")]
        public IActionResult UpdateCredential([FromBody]CredentialViewModel model)
        {
            Guid loggedinUser;

            var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            loggedinUser = new Guid(userId?.ElementAt(0).ToString());


            UpdateCredentialCommand command = new UpdateCredentialCommand(loggedinUser, model.FirstName, model.LastName, model.Title, model.Description, null);
            commandsFactory.ExecuteQuery(command);
            return Ok(command.Id);
        }
        [Authorize]
        [HttpPost("userprofile/api/credential/saveuserimage")]
        public async Task<IActionResult> SaveUserImage(IFormFile file, Guid userId)
        {
            if (file != null)
            {
                //  AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
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
        [Authorize]
        [HttpPost("userprofile/api/credential/saveusercroppedimage")]
        public async Task<IActionResult> SaveUserCroppedImage(string file, Guid userId, String imageName)
        {

            if (file != null)
            {
                Base64Image base64Image = Base64Image.Parse(file);
                var byteArray = base64Image.FileContents;

                // string ImgName = "Image.jpg";
                int lastIndex = imageName.LastIndexOf('.');
                var name = imageName.Substring(0, lastIndex);
                var extension = imageName.Substring(lastIndex + 1);

                string fullUpdateImageName = DateTime.Now.ToString("yyyyyhhmmssffffff") + "." + extension;

                //     AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
                string fileLink = await azureFileUploadHelper.SaveProfileCroppedImageInAzure(base64Image.baseStream,
                    fullUpdateImageName, base64Image.ContentType);

                UpdateUserImageCommand cmd = new UpdateUserImageCommand(userId, fullUpdateImageName);
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
        [Authorize]
        [HttpPost("userprofile/api/education/addeducation")]
        public IActionResult AddEducation([FromBody]EducationViewModel model)
        {

            var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            AddEducationCommand command = new AddEducationCommand(model.CredentialId, model.SchoolName, model.Concentration, model.SecondaryConcentration, model.DegreeType, model.GraduationYear);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [Authorize]
        [HttpPost("userprofile/api/education/deleteeducation")]
        public IActionResult DeleteEducation([FromBody]EducationViewModel model)
        {
            DeleteEducationCommand command = new DeleteEducationCommand(model.CredentialId, model.Id);
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
        [Authorize]
        [HttpPost("userprofile/api/employment/addemployment")]
        public IActionResult AddEmployment([FromBody]EmploymentViewModel model)
        {

            AddEmploymentCommand command = new AddEmploymentCommand(model.CredentialId, model.Position, model.CompanyName, model.StartDate, model.EndDate, model.IsCurrentlyWorking);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [Authorize]
        [HttpPost("userprofile/api/education/deleteemployment")]
        public IActionResult DeleteEducation([FromBody]EmploymentViewModel model)
        {

            var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());


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
        [Authorize]
        [HttpPost("userprofile/api/place/addplace")]
        public IActionResult AddPlace([FromBody]PlaceViewModel model)
        {
            AddPlaceCommand command = new AddPlaceCommand(model.CredentialId, model.LocationName, model.StartYear, model.EndYear, model.IsCurrentyLiving);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [Authorize]
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
        [Authorize]
        [HttpPost("userprofile/api/OtherExperience/addOtherExperience")]
        public IActionResult AddOtherExperience([FromBody]OtherExperienceViewModel model)
        {

            AddOtherExperienceCommand command = new AddOtherExperienceCommand(model.CredentialId, model.CategoryId, model.Description);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [Authorize]
        [HttpPost("userprofile/api/OtherExperience/deleteOtherExperience")]
        public IActionResult DeleteOtherExperience([FromBody]OtherExperienceViewModel model)
        {
            var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());


            DeleteOtherExperienceCommand command = new DeleteOtherExperienceCommand(model.CredentialId, model.Id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region QuestionAnswerDirectQuestion
        [HttpGet("userprofile/api/{pageNumber}/questionbyuserid/{userId}")]
        public async Task<IActionResult> QuestionByCredentialId(int pageNumber, Guid userId)
        {
            var questionViewModels = await Task.Run(() =>

            new UserServiceOptimized().GetQuestionViewModelsByUserId(userId,pageNumber)
            );
            return Ok(questionViewModels);
        }
        // [HttpGet("userprofile/api/{pageNumber}/answerbyuserid/{userId}")]
        [HttpGet("userprofile/api/answerbyuserid/{userId}")]
        public async Task<IActionResult> AnswerByUserId( Guid userId)
        {
            int pageNumber = 999999;
            List<QuestionViewModel> questionViewModels = await Task.Run(() =>
                new UserServiceOptimized().GetQuestionViewModelsForAnswers(userId, pageNumber)
            );
            return Ok(questionViewModels);
        }

        [HttpGet("userprofile/api/followerbyuserid/{userId}")]
        public IActionResult Follower(Guid userId)
        {
            List<Guid> followingUsers =
                queryFactory.ResolveQuery<IQuestionFollowingQuery>().GetFollowers(userId).Select(x => x.UserId).Distinct().ToList();
            // AzureFileUploadHelper azureFileUploadHelper = new AzureFileUploadHelper();
            var credentials = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(followingUsers);
            List<UserViewModel> userViewModels = new List<UserViewModel>();
            foreach (Credential credential in credentials)
            {
                UserViewModel userViewModel = new UserViewModel();
                userViewModel.CredentialId = credential.Id;
                userViewModel.UserId = credential.UserId;
                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(credential.ImageUrl);
                userViewModel.Name = credential.FirstName + " " + credential.LastName;
                userViewModel.Occupation = credential.Occupation;

                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = credential.Email;
                }
                userViewModels.Add(userViewModel);
            }

            return Ok(userViewModels);
        }
        [HttpGet("userprofile/api/followingbyuserId/{userId}")]
        public IActionResult Following(Guid userId)
        {
            List<Guid> followingUsers =
                queryFactory.ResolveQuery<IQuestionFollowingQuery>().GetFollowings(userId).Select(x => x.FollowedUserId).Distinct().ToList();

            List<Credential> credentials = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(followingUsers);

            List<UserViewModel> userViewModels =new List<UserViewModel>();
            foreach (Credential credential in credentials)
            {
                UserViewModel userViewModel=new UserViewModel();
                userViewModel.CredentialId = credential.Id;
                userViewModel.UserId = credential.UserId;
                String imageUrl = ThumbnailHelper.ThumbnailImageName(credential.ImageUrl);
                
                userViewModel.ImageUrl = azureFileUploadHelper.GetProfileImage(imageUrl);
                userViewModel.Name = credential.FirstName + " " + credential.LastName;
                userViewModel.Occupation = credential.Occupation;

                if (String.IsNullOrEmpty(userViewModel.Name) || String.IsNullOrWhiteSpace(userViewModel.Name))
                {
                    userViewModel.Name = credential.Email;
                }
                userViewModels.Add(userViewModel);
            }

            return Ok(userViewModels);
        }
        #endregion


        //For Login username in admin
        public UserViewModel GetUserName()
        {
            var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            Guid loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            var userViewModel = new UserService().GetUserViewModel(loggedinUser);
            return userViewModel;
        }
        #region topFiveUser ,topFiveUserByCategoryId and UserSummary
        [HttpGet("userprofile/api/{categoryId}/gettopFiveUserbycategoryid")]
        public async Task<List<UserSummary>> GetTopFiveUserByCategoryId(Guid categoryId)
        {
            List<UserSummary> summeries = await Task.Run(() => new UserService().GetUserSummary(categoryId));
            return summeries;

        }
        [HttpGet("userprofile/api/gettophundreduser")]
        public async Task<List<UserSummary>> GetTopHundredUser()
        {
            List<UserSummary> summeries = await Task.Run(() => new UserService().GetAllUserSummaries());
            return summeries;

        }
        [HttpGet("userprofile/api/getusersummary/{userId}")]
        public async Task<UserSummary> GetUserSummary(Guid userId)
        {
            UserSummary summary = await Task.Run(() => new UserService().GetUserSummaryFromUserId(userId));
            return summary;
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

            return Ok(new
            {
                value = true
            });
        }
        #endregion

        #region SaveTwitterLink
        [HttpPost("userprofile/api/savesociallink")]
        public IActionResult SaveSocialLink([FromBody]CredentialViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            UpdateSocialLinkCommand command = new UpdateSocialLinkCommand(loggedinUser, model.TwitterLink, model.FacebookLink, model.LinkedinLink);
            commandsFactory.ExecuteQuery(command);
            return Ok(command.Id);
        }
        [HttpPost("userprofile/api/deletesociallink")]
        public IActionResult DeleteSocialLink([FromBody]CredentialViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            DeleteSocialLinkCommand command = new DeleteSocialLinkCommand(loggedinUser, model.TwitterLink, model.FacebookLink, model.LinkedinLink);
            commandsFactory.ExecuteQuery(command);
            return Ok(command.Id);
        }


        #endregion


        [HttpPost("userprofile/api/getusers/{userName}")]
        public async Task<List<UserViewModel>> GetUsers(String userName)
        {
            List<UserViewModel> userViewModels =
                await Task.Run(() => new UserService().GetUserViewModelsWithThumbnailImageFromUserName(userName));

            return userViewModels.OrderBy(x => x.Name).ToList();
        }
    }
}
