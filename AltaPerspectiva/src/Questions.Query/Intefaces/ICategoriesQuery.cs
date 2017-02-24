using System;
using AltaPerspectiva.Core;
using Questions.Domain;
using System.Collections.Generic;

namespace Questions.Query
{
    public interface ICategoriesQuery : IQuery
    {
        IEnumerable<Category> Execute();
        Category GetCategoryById(Guid categoryId);

        bool IsCategoryExists(string categoryName);
    }
}