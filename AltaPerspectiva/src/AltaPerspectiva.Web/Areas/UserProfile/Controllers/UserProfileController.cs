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
using Questions.Domain;
using Questions.Query;
using UserProfile.Domain;
using Questions.Query.Intefaces;
using AltaPerspectiva.Web.Areas.Questions.Models;
using AltaPerspectiva.Web.Areas.Questions.Services;
using UserProfile.Command.Commands.Delete;


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
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            var model = new UserService().GetUserViewModel(queryFactory, loggedinUser);

            UserInfoDetails userInfoDetails =
                queryFactory.ResolveQuery<IProfileParameters>().GetUserInfoDetails(loggedinUser);

            return Ok(model);
        }
        [HttpGet("userprofile/api/userinfodetails/{userId}")]
        public IActionResult UserInfoDetails(Guid userId)
        {
            UserInfoDetails userInfoDetails =
                queryFactory.ResolveQuery<IProfileParameters>().GetUserInfoDetails(userId);

            return Ok(userInfoDetails);
        }

        #region Credentials

        [HttpGet("userprofile/api/credential/getusercredentialbyuserid/{userId}")]
        public IActionResult GetUsercredentialByUserId(Guid userId)
        {
            var model = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(userId);
            return Ok(model);
        }
       
        [HttpGet("userprofile/api/credential/getusercredential/{credentialId}")]
        public IActionResult GetCredentialByCredentialId(Guid credentialId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            Credential  credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(credentialId);
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
            return Ok(credential);
        }
        [HttpPost("userprofile/api/credential/savefirstnamelastname")]
        public IActionResult SaveFirstNameLastName(String firstName,String lastName)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            AddCredentialCommand command=new AddCredentialCommand(loggedinUser,firstName,lastName,"","","");
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
            UpdateCredentialCommand command=new UpdateCredentialCommand(model.Id,model.FirstName,model.LastName,model.Title,model.Description,null);
            commandsFactory.ExecuteQuery(command);
            return Ok(command.Id);
        }
        [HttpPost("userprofile/api/credential/saveuserimage")]
        public IActionResult SaveUserImage(IFormFile file, Guid credentialId)
        {
            var categoryImagepath = configuration["ProfileUpload"];
            //IHostingEnvironment environment = new HostingEnvironment();
            
            String image = file.FileName;

            var webRoot = environment.WebRootPath;


            var uploads = Path.Combine(webRoot, categoryImagepath);
            using (var fileStream = new FileStream(Path.Combine(uploads, image), FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            //Add and update is done after credential .So no need for seperate commandHandler
            UpdateUserImageCommand cmd = new UpdateUserImageCommand(credentialId, image);
            commandsFactory.ExecuteQuery(cmd);

            Guid createdId = cmd.Id;

            Credential credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredential(loggedinUser);
            return Ok(credential);
        }


        #endregion

        #region Education 
        [HttpGet("userprofile/api/education/geteducation/{credentialId}")]
        public IActionResult GetEducation(Guid credentialId)
        {
            //Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            //if (User.Identity.IsAuthenticated)
            //{
            //    var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            //    loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            //}
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
            AddEducationCommand command = new AddEducationCommand(model.CredentialId, model.SchoolName, model.SchoolDegreeName, model.SchoolCompletionDate, model.CollegeName, model.CollegeDegree,model.CollegeCompletionDate, model.Certification, model.CertificationType);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [HttpPost("userprofile/api/education/updateeducation")]
        public IActionResult UpdateEducation([FromBody]EducationViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            UpdateEducationCommand command = new UpdateEducationCommand(model.CredentialId, model.SchoolName, model.SchoolDegreeName, model.SchoolCompletionDate, model.CollegeName, model.CollegeDegree, model.CollegeCompletionDate, model.Certification, model.CertificationType);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [HttpPost("userprofile/api/education/deleteeducation")]
        public IActionResult DeleteEducation([FromBody]EducationViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            DeleteEducationCommand command=new DeleteEducationCommand(model.CredentialId,model.Id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region Employment  
        [HttpGet("userprofile/api/employment/getemployment/{credentialId}")]
        public IActionResult GetEmployment(Guid credentialId)
        {
            //Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            //if (User.Identity.IsAuthenticated)
            //{
            //    var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            //    loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            //}
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
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            AddEmploymentCommand command = new AddEmploymentCommand(loggedinUser, "position", "companies", DateTime.Now, DateTime.Now, true);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [HttpPost("userprofile/api/education/updateemployment")]
        public IActionResult UpdateEmployment([FromBody]EducationViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            UpdateEmploymentCommand command = new UpdateEmploymentCommand(loggedinUser, "position", "companies", DateTime.Now, DateTime.Now, true);
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
            //Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            //if (User.Identity.IsAuthenticated)
            //{
            //    var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            //    loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            //}
            var education = queryFactory.ResolveQuery<IPlaceQuery>().GetPlace(credentialId);

            return Ok(education);
        }

        [HttpGet("userprofile/api/place/getplacebyuserid/{userId}")]
        public IActionResult GetPlaceByUserId(Guid userId)
        {
            
            var education = queryFactory.ResolveQuery<IPlaceQuery>().GetPlaceByUserId(userId);

            return Ok(education);
        }

        [HttpPost("userprofile/api/place/addplace")]
        public IActionResult AddPlace([FromBody]PlaceViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            AddPlaceCommand command = new AddPlaceCommand(loggedinUser, model.LocationName, model.StartYear, model.EndYear, model.IsCurrentyLiving);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [HttpPost("userprofile/api/place/updateplace")]
        public IActionResult UpdatePlace([FromBody]PlaceViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            UpdatePlaceCommand command = new UpdatePlaceCommand(loggedinUser, model.LocationName, model.StartYear, model.EndYear, model.IsCurrentyLiving);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [HttpPost("userprofile/api/place/deleteplace")]
        public IActionResult DeletePlace([FromBody]PlaceViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            DeletePlaceCommand command = new DeletePlaceCommand(model.CredentialId,model.id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region OtherExperience   
        [HttpGet("userprofile/api/otherexperience/getotherexperience/{credentialId}")]
        public IActionResult GetOtherExperience(Guid credentialId)
        {
            //Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            //if (User.Identity.IsAuthenticated)
            //{
            //    var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
            //    loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            //}
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
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            AddOtherExperienceCommand command = new AddOtherExperienceCommand(loggedinUser, model.CategoryId, model.Description);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        [HttpPost("userprofile/api/OtherExperience/updateOtherExperience")]
        public IActionResult UpdateOtherExperience([FromBody]OtherExperienceViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());

            }
            UpdateOtherExperienceCommand command = new UpdateOtherExperienceCommand(loggedinUser, model.CategoryId, model.Description);
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
            DeleteOtherExperienceCommand command=new DeleteOtherExperienceCommand(model.CredentialId,model.Id);
            commandsFactory.ExecuteQuery(command);

            return Ok();
        }
        #endregion

        #region QuestionAnswerDirectQuestion
        [HttpGet("userprofile/api/questionbycredentialId/{credentialId}")]
        public async Task<IActionResult> QuestionByCredentialId(Guid credentialId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            Credential credential = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentialByCredentialId(credentialId);

            Guid profileUserId =Guid.Empty;
            if (credential != null)
            {
                profileUserId = credential.UserId;
            }
            IEnumerable<Question> questionList = await queryFactory.ResolveQuery<IQuestionsQuery>().ExecuteByUserId(profileUserId);

            List<QuestionViewModel> questionViewModels =
                new QuestionService().GetQuestionViewModel(questionList, queryFactory);
            return Ok(questionViewModels);
        }
        [HttpGet("userprofile/api/answerbycredentialId/{credentialId}")]
        public async Task<IActionResult> AnswerByCredentialId(Guid credentialId)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
            Guid profileUserId =
                queryFactory.ResolveQuery<ICredentialQuery>().GetCredentialByCredentialId(credentialId).UserId;

            IEnumerable<Question> questionList =
                await queryFactory.ResolveQuery<IQuestionsAnsweredQuery>().ExecuteByUserId(profileUserId);

            List<QuestionViewModel> questionViewModels =
                new QuestionService().GetQuestionViewModelForProfile(questionList, queryFactory, profileUserId);
            return Ok(questionViewModels);
        }
        [HttpGet("userprofile/api/directquestion")]
        public IActionResult DirectQuestion()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }
             
         //   throw new Exception("Not yet implemented");
            return Ok();
        }
        [HttpGet("userprofile/api/follower")]
        public IActionResult Follower()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            List<Guid> followingUsers =
                queryFactory.ResolveQuery<IQuestionFollowingQuery>().GetFollowers(loggedinUser).Select(x=>x.UserId).Distinct().ToList();

            List<UserViewModel> userViewModels = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(followingUsers).Select(x=>new UserViewModel
            {
                CredentialId = x.Id,
                UserId = x.UserId,
                ImageUrl = x.ImageUrl,
                Name = x.FirstName+" "+x.LastName,
                Occupation = x.Employments.Select(y=>y.Position).Take(1).FirstOrDefault()
            }).ToList();

            return Ok(userViewModels);
        }
        [HttpGet("userprofile/api/following")]
        public IActionResult Following()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId =
                    User.Claims.Where(
                            x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")
                        .Select(x => x.Value);
                loggedinUser = new Guid(userId?.ElementAt(0).ToString());
            }

            List<Guid> followingUsers =
                queryFactory.ResolveQuery<IQuestionFollowingQuery>().GetFollowings(loggedinUser).Select(x=>x.UserId).Distinct().ToList();

            List<UserViewModel> userViewModels = queryFactory.ResolveQuery<ICredentialQuery>().GetCredentials(followingUsers).Select(x => new UserViewModel
            {
                CredentialId = x.Id,
                UserId = x.UserId,
                ImageUrl = x.ImageUrl,
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
            var model = new UserService().GetUserViewModel(queryFactory, loggedinUser);
            return model;
        }
        #region topFiveUser ,topFiveUserByCategoryId and UserSummary
        [HttpGet("userprofile/api/{categoryId}/gettopFiveUserbycategoryid")]
        public async Task<List<UserSummary>> GetTopFiveUserByCategoryId(Guid categoryId)
        {
            List<UserSummary> summeries=new List<UserSummary>();
            if (categoryId==Guid.Empty)
            {
                summeries = await queryFactory.ResolveQuery<ITopUserQuery>().GetUserSummnaryByCategoryId(categoryId);
                
            }
            else
            {
                summeries = await queryFactory.ResolveQuery<ITopUserQuery>().GetTopFiveUserSummary();
               
            }
            summeries=new UserSummaryFilter().GetUserSummaryForNameFilter(summeries);
            return summeries;

        }
        [HttpGet("userprofile/api/getusersummary/{userId}")]
        public async Task<UserSummary> GetUserSummary(Guid userId)
        {
            var summeries = await queryFactory.ResolveQuery<ITopUserQuery>().GetUserSummary(userId);
            return summeries;
        }
        #endregion

       

    }
}
