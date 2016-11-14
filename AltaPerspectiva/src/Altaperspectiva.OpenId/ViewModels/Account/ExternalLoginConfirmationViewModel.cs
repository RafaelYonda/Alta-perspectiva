using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenId.ViewModels.Account {
    public class ExternalLoginConfirmationViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
