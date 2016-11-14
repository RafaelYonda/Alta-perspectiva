using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Altaperspectiva.OpenId.ViewModels.Authorization {
    public class LogoutViewModel {
        [BindNever]
        public string RequestId { get; set; }
    }
}
