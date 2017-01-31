using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using AltaPerspectiva.Web.Areas.Admin.Models;
using AltaPerspectiva.Web.Areas.Admin.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Questions.Command.Commands;
using Questions.Domain;
using Questions.Query;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace AltaPerspectiva.Web.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class QuestionReportController : Controller
    {
        ICommandsFactory commandsFactory;
        IQueryFactory queryFactory;
        private readonly IConfigurationRoot configuration;
        private readonly IHostingEnvironment environment;

        public QuestionReportController(IConfigurationRoot _configuration, ICommandsFactory _commandsFactory, IQueryFactory _queryFactory, IHostingEnvironment _environment)
        {
            configuration = _configuration;
            commandsFactory = _commandsFactory;
            queryFactory = _queryFactory;
            environment = _environment;
        }
        [HttpGet("QuestionReport/Question")]
        public IActionResult Question()
        {

            List<QuestionReport> questionReports = queryFactory.ResolveQuery<IQuestionReportQuery>().GetQuestionReports();

            List<ReportViewModel> reportViewModels=new QuestionReportService().GetQuestionReportViewModels(queryFactory, questionReports);
            return View(reportViewModels);
        }
        [HttpPost("QuestionReport/QuestionDelete")]
        public IActionResult Delete(Guid Id, Guid QuestionId,Guid? AnswerId) //only answers decides wheather to delete question or answer
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            DeleteQuestionReportCommand command=new DeleteQuestionReportCommand(loggedinUser,QuestionId,AnswerId);
            commandsFactory.ExecuteQuery(command);
            return Ok();
        }
        [HttpPost("QuestionReport/InvalidReport")]
        public IActionResult InvalidReport(Guid Id,String ModiferComment)
        {
            Guid loggedinUser = new Guid("9f5b4ead-f9e7-49da-b0fa-1683195cfcba");

            if (User.Identity.IsAuthenticated)
            {
                var userId = User.Claims.Where(x => x.Type == "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier").Select(x => x.Value);
                loggedinUser = new Guid(loggedinUser.ToString());
            }
            InvalidQuestionReportCommand command=new InvalidQuestionReportCommand(loggedinUser,Id, ModiferComment);
            commandsFactory.ExecuteQuery(command);
            
            return Ok();
        }
        [HttpGet("QuestionReport/Answer")]
        public IActionResult Answer()
        {

            List<QuestionReport> questionReports = queryFactory.ResolveQuery<IQuestionReportQuery>().GetAnswerReports();

            List<ReportViewModel> reportViewModels = new QuestionReportService().GetQuestionReportViewModels(queryFactory, questionReports);
            return View(reportViewModels);
        }
        
    }
}
