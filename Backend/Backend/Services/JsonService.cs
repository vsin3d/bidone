using System;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class JsonService : IJsonService
    {
        private string OUTPUT_DIRECTORY = @$"{AppDomain.CurrentDomain.BaseDirectory}/Output/";
        private string FORMAT_DATE = "dd-MMMM-yyyy&H_mm_s";

        public async Task<string> WriteObject<T>(T person)
        {
            string json = JsonSerializer.Serialize(person);
            string filePath = Path.GetFullPath($"{OUTPUT_DIRECTORY}{typeof(T).Name}_{DateTime.Now.ToString(FORMAT_DATE)}.json");
            Directory.CreateDirectory(OUTPUT_DIRECTORY);
            await File.WriteAllTextAsync(filePath, json);

            return filePath;
        }
    }
}
