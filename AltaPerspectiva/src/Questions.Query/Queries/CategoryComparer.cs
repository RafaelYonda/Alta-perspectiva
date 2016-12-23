using Questions.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Questions.Query
{
    public class CategoryComparer : IEqualityComparer<Category>
    {
        public bool Equals(Category x, Category y)
        {
            if (x.Id == y.Id &&
                        x.Name.ToLower() == y.Name.ToLower())
                return true;

            return false;
        }

        public int GetHashCode(Category obj)
        {
            return obj.GetHashCode();
        }
    }
}
