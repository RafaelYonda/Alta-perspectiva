using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenID.Web.Account {
    public class ExternalLoginConfirmationViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
