using System.Threading.Tasks;

namespace Altaperspectiva.OpenId.Services {
    public interface ISmsSender {
        Task SendSmsAsync(string number, string message);
    }
}
