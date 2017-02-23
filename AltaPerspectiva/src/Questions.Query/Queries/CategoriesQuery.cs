using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using Questions.Domain;
using AltaPerspectiva.Core.Infrastructure;
using Questions.Query.DbContext;
using System.Threading.Tasks;
using System;

namespace Questions.Query
{
	public class CategoriesQuery : EFQueryBase<QuestionsQueryDbContext>, ICategoriesQuery
    {
		public CategoriesQuery(QuestionsQueryDbContext context)
			: base(context)
		{
		}
        
        
        public bool IsCategoryExists(string categoryName)
        {
            var exists= DbContext.Categories.Where(x => x.Name == categoryName&&x.IsDeleted==null).Select(x=>x.Name).Any();
            
            return exists;
        }

        public IEnumerable<Category> Execute()
        {
            //if category id deleted ..then it will not be shown anywhere
            return DbContext.Categories.Where(d=>d.IsDeleted!=true).OrderBy(x=>x.Sequence); 
        }

        public Category GetCategoryById(Guid categoryId)
        {
            return DbContext.Categories.Where(x => x.Id == categoryId).FirstOrDefault();
        }
    }
}