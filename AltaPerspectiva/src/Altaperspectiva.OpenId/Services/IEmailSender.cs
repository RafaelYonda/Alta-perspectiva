using System.Threading.Tasks;

namespace Altaperspectiva.OpenId.Services {
    public interface IEmailSender {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
