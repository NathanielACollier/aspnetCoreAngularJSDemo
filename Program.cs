using System;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace aspnetCoreAngularJSDemo
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseContentRoot(System.IO.Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .Build();
    }
}
