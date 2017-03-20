using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenId.ViewModels.Account {
    public class LoginViewModel {
        [Required(ErrorMessage = "El campo Correo electrónico es obligatorio")]
        [EmailAddress]
        public string Email { get; set; }

        [Required(ErrorMessage = "El campo Contraseña es obligatorio.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Remember me?")]
        public bool RememberMe { get; set; }
    }
}
