using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AltaPerspectiva.Web.Areas.Admin.Helpers
{
    public class ConfigClass
    {
        public static String Profile
        {
            get
            {
                return "profile"; 
            } 
        }
        public static String Category
        {
            get { return "category"; }
        }

        public static String VirtualStoreProduct
        {
            get { return "virtualstoreproduct"; }
        }

        public static String VirtualStoreDocument
        {
            get
            {
                return "virtualstoredocument";
            }
        }
    }
}
