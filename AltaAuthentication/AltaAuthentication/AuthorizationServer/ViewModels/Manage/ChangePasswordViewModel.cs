using System.ComponentModel.DataAnnotations;

namespace AuthorizationServer.ViewModels.Manage
{
    public class ChangePasswordViewModel
    {
        [Required(ErrorMessage = "Se requiere el campo Contraseña actual.")]
        [DataType(DataType.Password)]
        [Display(Name = "Contraseña actual")]
        public string OldPassword { get; set; }

        [Required(ErrorMessage = "Se requiere el campo Nueva contraseña.")]
        [StringLength(100, ErrorMessage = "El {0} debe tener al menos {2} caracteres.", MinimumLength = 6)]
        [DataType(DataType.Password)]
        [Display(Name = "Nueva contraseña")]
        public string NewPassword { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirmar nueva contraseña")]
        [Compare("NewPassword", ErrorMessage = "La nueva contraseña y la contraseña de confirmación no coinciden.")]
        public string ConfirmPassword { get; set; }
    }
}
