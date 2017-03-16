using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;
using Questions.Domain.ReadModel;

namespace Questions.Query
{
    public interface ICategoriesQuery : IQuery
    {
        IEnumerable<Category> Execute();
        Category GetCategoryById(Guid categoryId);

        bool IsCategoryExists(string categoryName);

        List<CategoryIcon> GetCategoryIcons(string connectionString);
    }
}