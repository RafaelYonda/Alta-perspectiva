using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenId.ViewModels.Account {
    public class ForgotPasswordViewModel {
        [Required(ErrorMessage = "El campo Correo electrónico es obligatorio")]
        [EmailAddress(ErrorMessage = "Introduzca la dirección de correo electrónico correcta")]
        public string Email { get; set; }
    }
}
