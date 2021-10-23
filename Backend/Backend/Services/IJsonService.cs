using System.Threading.Tasks;

namespace Backend.Services
{
    public interface IJsonService
    {
        public Task<string> WriteObject<T>(T person);
    }
}
