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

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.UserProfile.Controllers
{
    [Area("UserProfile")]
    public class UserProfileController : Controller
    {

        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        IDistributedCache cache;

        public UserProfileController(ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IDistributedCache _cache)
        {
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            cache = _cache;
        }
        #region Biography
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getbiography")]
        public IActionResult GetBiography()
        {

            var bios = queryFactory.ResolveQuery<IBiographyQuery>().Execute();
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

            var bios = queryFactory.ResolveQuery<IContractInformationQuery>().Execute();
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

            var bios = queryFactory.ResolveQuery<IEducationQuery>().Execute();
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

            var bios = queryFactory.ResolveQuery<IExperienceQuery>().Execute();
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

            var bios = queryFactory.ResolveQuery<IInsightQuery>().Execute();
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

            var bios = queryFactory.ResolveQuery<IPracticeAreaQuery>().Execute();
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
        #endregion
        #region Skill
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api/getskill")]
        public IActionResult GetSkill()
        {

            var skills = queryFactory.ResolveQuery<ISkillQuery>().Execute();
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
            /*
             
             Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
                        
            AddQuestionCommand cmd = new AddQuestionCommand(question.Title, question.Body, DateTime.Now, loggedinUser, question.CategoryIds);
            commandsFactory.ExecuteQuery(cmd);
            Guid createdId = cmd.Id;

            return Created($"questions/api/questions/{cmd.Id}", question);
             
             
             */
        }
        #endregion

    }
}
