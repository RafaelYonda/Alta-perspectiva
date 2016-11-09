using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenID.Web.Shared {
    public class ErrorViewModel {
        [Display(Name = "Error")]
        public string Error { get; set; }

        [Display(Name = "Description")]
        public string ErrorDescription { get; set; }
    }
}
