using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Altaperspectiva.OpenID.Web.Authorization {
    public class LogoutViewModel {
        [BindNever]
        public string RequestId { get; set; }
    }
}
