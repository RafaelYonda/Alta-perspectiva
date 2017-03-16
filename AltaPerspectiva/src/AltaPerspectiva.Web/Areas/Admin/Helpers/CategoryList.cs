using AltaPerspectiva.Web.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Questions.Domain.ReadModel;
using Questions.Query;

namespace AltaPerspectiva.Web.Areas.Admin.Helpers
{
    public class CategoryList
    {
        public static List<CategoryIconViewModel> GetCategoryIconViewModels(IQueryFactory queryFactory)
        {
            string connectionString = Startup.ConnectionString;
            try
            {
                List<CategoryIconViewModel> categoryIconViewModels=new List<CategoryIconViewModel>();
                List<CategoryIcon> categoryIcons = queryFactory.ResolveQuery<ICategoriesQuery>().GetCategoryIcons(connectionString);
                foreach (var icon in categoryIcons)
                {
                    CategoryIconViewModel model = new CategoryIconViewModel
                    {
                        Icon = icon.IconName
                    };
                    categoryIconViewModels.Add(model);
                }
                return categoryIconViewModels;
            }
            catch (Exception e)
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
}
