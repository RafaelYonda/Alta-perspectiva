using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenID.Web.Manage {
    public class AddPhoneNumberViewModel {
        [Required]
        [Phone]
        [Display(Name = "Phone number")]
        public string PhoneNumber { get; set; }
    }
}
