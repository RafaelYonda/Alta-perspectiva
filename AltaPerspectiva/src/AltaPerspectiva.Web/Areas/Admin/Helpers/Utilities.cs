using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Helpers
{
    public static class Utilities
    {
        public static string AddQuestionMarks(this string stringValue)
        {
            return "¿" + stringValue + "?";
        }
    }
}
