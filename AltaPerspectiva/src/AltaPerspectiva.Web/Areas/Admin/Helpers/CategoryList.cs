using AltaPerspectiva.Web.Areas.Admin.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using AltaPerspectiva.Core;
using Dapper;
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

        //        public List<CategoryIcon> GetCategoryIcons(string connectionString)
        //{
        //    return new DataReaderToListHelper().DataReaderToList<CategoryIcon>(connectionString,
        //        "select * from [Questions].[CategoryIcon];");
        //}


                List<CategoryIcon> categoryIcons = null;
                using (IDbConnection dbConnection=new SqlConnection(connectionString))
                {
                    categoryIcons = dbConnection.Query<CategoryIcon>("select * from [Questions].[CategoryIcon]").ToList();
                }

                
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
