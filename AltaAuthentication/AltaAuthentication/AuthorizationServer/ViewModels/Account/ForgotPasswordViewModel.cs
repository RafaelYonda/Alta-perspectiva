using System.ComponentModel.DataAnnotations;

namespace AuthorizationServer.ViewModels.Account
{
    public class ForgotPasswordViewModel
    {
        [Required(ErrorMessage = "El campo Correo electrónico es obligatorio.")]
        [EmailAddress(ErrorMessage = "El campo Correo electrónico no es una dirección de correo electrónico válida.")]
        public string Email { get; set; }
    }
}
