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
using System.IO;
using UserProfile.Domain;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.UserProfile.Controllers
{
    [Area("UserProfile")]
    public class UserProfileController : Controller
    {

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
        [HttpGet("userprofile/api/getuser")]
        public IActionResult GetUser()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            String fullName = String.Empty;
            String image = String.Empty;
            String occupassion = String.Empty;
            ContractInformation information = queryFactory.ResolveQuery<IContractInformationQuery>().Execute(loggedinUser);
            if (information != null)
            {
                fullName = information.FirstName + " " + information.LastName;
            }

            UserImage userImage = queryFactory.ResolveQuery<IUserImageQuery>().Execute(loggedinUser);
            if (userImage != null)
            {
                image =  userImage.Image;
            }

            Experience exp = queryFactory.ResolveQuery<IExperienceQuery>().Execute(loggedinUser);
            if (exp != null)
            {
                occupassion = exp.PositionHeld;
            }
            UserViewModel model = new UserViewModel
            {
                ImageUrl = image,
                Name = fullName,
                Occupassion = occupassion,
                UserId = loggedinUser
            };
            return Ok(model);
        }
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getuserprofile")]
        public IActionResult GetUserProfile()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }

            UserProfileViewModel model = new UserProfileViewModel();
            model.biography= queryFactory.ResolveQuery<IBiographyQuery>().Execute(loggedinUser) ??new Biography() ;
            model.contractInformation = queryFactory.ResolveQuery<IContractInformationQuery>().Execute(loggedinUser) ??new ContractInformation();
            model.education = queryFactory.ResolveQuery<IEducationQuery>().Execute(loggedinUser) ??new Education();
            model.experience = queryFactory.ResolveQuery<IExperienceQuery>().Execute(loggedinUser) ??new Experience();
            model.insight = queryFactory.ResolveQuery<IInsightQuery>().Execute(loggedinUser) ??new Insight();
            model.practiceArea = queryFactory.ResolveQuery<IPracticeAreaQuery>().Execute(loggedinUser).ToList();
            model.skill = queryFactory.ResolveQuery<ISkillQuery>().Execute(loggedinUser).ToList();
            model.userImage = queryFactory.ResolveQuery<IUserImageQuery>().Execute(loggedinUser) ?? new UserImage();

            return Ok(model);
        }

        #region Biography
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getbiography")]
        public IActionResult GetBiography()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            var bios = queryFactory.ResolveQuery<IBiographyQuery>().Execute(loggedinUser);
            return Ok(bios);
        }

        [HttpPost("userprofile/api/setbiography")]
        public IActionResult SetBiography([FromBody]AddBiographyViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            AddBiographyCommand cmd = new AddBiographyCommand(loggedinUser, model.TagLine, model.AboutMe);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        #endregion
        #region ContractInformation
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getcontractinformation")]
        public IActionResult GetContractInformation()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            var bios = queryFactory.ResolveQuery<IContractInformationQuery>().Execute(loggedinUser);
            return Ok(bios);
        }

        [HttpPost("userprofile/api/setcontractinformation")]
        public IActionResult SetContractInformation([FromBody]AddContractInformationViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            AddContractInfomaionCommand cmd = new AddContractInfomaionCommand(loggedinUser, model.FirstName, model.LastName, model.PrefferedEmail, model.PhoneNumber, model.AddressLine1, model.AddressLine2, model.Country, model.Region, model.City);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }

        #endregion
        #region Education
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/geteducation")]
        public IActionResult GetEducation()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            var bios = queryFactory.ResolveQuery<IEducationQuery>().Execute(loggedinUser) ;
            return Ok(bios);
        }

        [HttpPost("userprofile/api/seteducation")]
        public IActionResult SetEducation([FromBody]AddEducationViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            AddEducationCommand cmd = new AddEducationCommand(loggedinUser, model.Institute, model.TimeFrameFrom, model.TimeFrameTo, model.CompletedStudies, model.Description, model.Especiality);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        #endregion
        #region Experience
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getexperience")]
        public IActionResult GetExperience()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            var bios = queryFactory.ResolveQuery<IExperienceQuery>().Execute(loggedinUser) ;
            return Ok(bios);
        }

        [HttpPost("userprofile/api/setexperience")]
        public IActionResult SetExperience([FromBody]AddExperienceViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            AddExperienceCommand cmd = new AddExperienceCommand(loggedinUser, model.Employer, model.PositionHeld, model.Location, model.CurrentlyWorkingHere, model.TimePeriodFrom, model.TimePeriodTo, model.Description);

            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        #endregion
        #region Insight
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getinsight")]
        public IActionResult GetInsight()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            var bios = queryFactory.ResolveQuery<IInsightQuery>().Execute(loggedinUser) ;
            return Ok(bios);
        }

        [HttpPost("userprofile/api/setinsight")]
        public IActionResult SetInsight([FromBody]AddInsightViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            AddInsightCommand cmd = new AddInsightCommand(loggedinUser, model.Title, model.Publication, model.PublicationDate, model.PublicationHyperlink, model.PublicationDocument, model.Description);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        #endregion
        #region PracticeArea
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getpracticeArea")]
        public IActionResult GetPracticeArea()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            var bios = queryFactory.ResolveQuery<IPracticeAreaQuery>().Execute(loggedinUser);
            return Ok(bios);
        }

        [HttpPost("userprofile/api/setpracticeArea")]
        public IActionResult SetPracticeArea([FromBody]AddPracticeAreaViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            AddPracticeAreaCommand cmd = new AddPracticeAreaCommand(loggedinUser, model.PracticeAreaName);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        [HttpPost("userprofile/api/deleteskill")]
        public IActionResult DeletePracticeArea([FromBody]AddPracticeAreaViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }

            String practiceAreaName = model.PracticeAreaName;
            
            DeletePracticeAreaCommand cmd = new DeletePracticeAreaCommand(loggedinUser, model.PracticeAreaName);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        #endregion
        #region Skill
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getskill")]
        public IActionResult GetSkill()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            var skills = queryFactory.ResolveQuery<ISkillQuery>().Execute(loggedinUser) ;
            return Ok(skills);
        }
        [HttpPost("userprofile/api/setskill")]
        public IActionResult SetSkill([FromBody]AddSkillViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }

            AddSkillCommand cmd = new AddSkillCommand(loggedinUser, model.SkillName);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
           
        }

        //Delete
        [HttpPost("userprofile/api/deleteskill")]
        public IActionResult DeleteSkill([FromBody]AddSkillViewModel model)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }

            String skillName = model.SkillName;
            DeleteSkillCommand cmd = new DeleteSkillCommand(loggedinUser, skillName);
            //AddSkillCommand cmd = new AddSkillCommand(loggedinUser, model.SkillName);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        #endregion
        #region UserImage

        [HttpGet("userprofile/api/getprofileimage")]
        public IActionResult GetUserImage()
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");
            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());

            }
            UserImage userImage = queryFactory.ResolveQuery<IUserImageQuery>().Execute(loggedinUser);
            return Ok(userImage);
        }
        [HttpPost("userprofile/api/fileupload")]
        public IActionResult SaveUserImagee(IFormFile file)
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
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            AddUserImageCommand cmd=new AddUserImageCommand(loggedinUser,image);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;
            return Ok();
        }
        #endregion



    }
}
