using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AltaPerspectiva.Core;
using Microsoft.Extensions.Caching.Distributed;
using UserProfile.Query.Queries;

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

        //questions/api/categories/category/{keyword}   
        //http://localhost:5273/userprofile/api    
        [HttpGet("userprofile/api")]
        public IActionResult GetAllkeywords()
        {

            var questionsList = queryFactory.ResolveQuery<IContractInfoesQuery>().Execute();
            return Ok(questionsList);
        }
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
