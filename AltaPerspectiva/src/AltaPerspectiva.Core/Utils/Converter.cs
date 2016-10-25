using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AltaPerspectiva.Core
{
    public static class Converter
    {
        public static Action<object> Convert<T>(Action<T> myActionT)
        {
            if (myActionT == null) return null;
            return new Action<object>(o => myActionT((T)o));
        }
       
    }
}
