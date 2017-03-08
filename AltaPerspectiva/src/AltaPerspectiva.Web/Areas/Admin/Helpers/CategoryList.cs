using AltaPerspectiva.Web.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Helpers
{
    public class CategoryList
    {
        public static List<CategoryIconViewModel> GetCategoryIconViewModels()
        {
            return new List<CategoryIconViewModel>
            {
                    new CategoryIconViewModel { Icon="icon-dice"},
                    new CategoryIconViewModel { Icon="icon-chart"},
                    new CategoryIconViewModel { Icon="icon-users"},
                    new CategoryIconViewModel { Icon="icon-people"},
                    new CategoryIconViewModel { Icon="icon-process"},
                    new CategoryIconViewModel { Icon="icon-star"}
                };
        }
    }
}
