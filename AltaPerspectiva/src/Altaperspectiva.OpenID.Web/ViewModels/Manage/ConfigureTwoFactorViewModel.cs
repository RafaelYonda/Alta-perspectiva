using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace Altaperspectiva.OpenID.Web.Manage {
    public class ConfigureTwoFactorViewModel {
        public string SelectedProvider { get; set; }

        public ICollection<SelectListItem> Providers { get; set; }
    }
}
