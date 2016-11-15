﻿using System.ComponentModel.DataAnnotations;

namespace Altaperspectiva.OpenId.ViewModels.Account {
    public class ForgotPasswordViewModel {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}