using System.ComponentModel.DataAnnotations;

namespace AuthorizationServer.ViewModels.Account
{
    public class RegisterViewModel
    {
        [Required(ErrorMessage = "El campo Correo electrónico es obligatorio")]
        [EmailAddress(ErrorMessage = "Introduzca la dirección de correo electrónico correcta")]
        [Display(Name = "Email")]
        public string Email { get; set; }

        // 
        [Required(ErrorMessage = "El campo Contraseña es obligatorio")]
        [StringLength(100, ErrorMessage = "La contraseña debe tener al menos 6 caracteres", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "La contraseña y la contraseña de confirmación no coinciden.")]
        public string ConfirmPassword { get; set; }
    }
}
