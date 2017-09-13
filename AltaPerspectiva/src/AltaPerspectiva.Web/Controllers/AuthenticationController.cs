using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Http.Authentication;
using Microsoft.AspNetCore.Mvc;

namespace AltaPerspectiva.Controllers
{
    public class AuthenticationController : Controller
    {
        [HttpGet("~/signin")]
        public ActionResult SignIn()
        {
            // Instruct the OIDC client middleware to redirect the user agent to the identity provider.
            // Note: the authenticationType parameter must match the value configured in Startup.cs
            return new ChallengeResult(OpenIdConnectDefaults.AuthenticationScheme, new AuthenticationProperties
            {
                RedirectUri = "/"
            });
        }

        [HttpGet("~/signout"), HttpPost("~/signout")]
        public async Task SignOut()
        {
            // Instruct the cookies middleware to delete the local cookie created when the user agent
            // is redirected from the identity provider after a successful authorization flow.
            await HttpContext.Authentication.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

            // Instruct the OpenID Connect middleware to redirect the user agent to the identity provider to sign out.
            await HttpContext.Authentication.SignOutAsync(OpenIdConnectDefaults.AuthenticationScheme);
        }

        [HttpGet("~/signup")]
        public IActionResult SignUp()
        {
            var redirectUrl = Startup.Url;
            var authUrl = Startup.AuthUrl;
#if DEBUG
            authUrl = "http://alta-staging-auth.azurewebsites.net/";
            redirectUrl = "http://alta-staging.azurewebsites/signupcallback";
            //authUrl = "http://localhost:54540/";
            //redirectUrl = "http://localhost:5273/signupcallback";

#else
            authUrl = "http://alta-staging-auth.azurewebsites.net/";
            redirectUrl = "http://alta-staging.azurewebsites/signupcallback";
            //authUrl= "http://altaauth.azurewebsites.net";
           // redirectUrl= "http://www.altaperspectiva.com/signupcallback";
#endif
            return new RedirectResult(authUrl + "Account/Register?returnUrl=" + redirectUrl);
        }
        [HttpGet("~/signupcallback")]
        public ActionResult SignUpCallBack()
        {
            //after signup go back authenetication page for sign in again
            return new ChallengeResult(OpenIdConnectDefaults.AuthenticationScheme, new AuthenticationProperties
            {
                RedirectUri = "/"
            });
        }
    }
}