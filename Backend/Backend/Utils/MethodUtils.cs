using System.Runtime.CompilerServices;

namespace Backend.Utils
{
    public static class MethodUtils
    {
        public static string GetCurrentMethod([CallerMemberName] string callerName = "")
        {
            return callerName;
        }
    }
}
