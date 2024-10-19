using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;
using System;

namespace api.data
{
    // This class is used to create an instance of AppDbContext at design time
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        // This method creates a new instance of AppDbContext with the appropriate options
        public AppDbContext CreateDbContext(string[] args)
        {
            // Get the current directory path
            var basePath = Directory.GetCurrentDirectory();

            // Build the configuration to read settings from appsettings.json and environment variables
            var configuration = new ConfigurationBuilder()
                .SetBasePath(basePath) // Set the base path for the configuration files
                .AddJsonFile("appsettings.json", optional: true) // Add appsettings.json file
                .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true) // Add environment-specific appsettings file
                .AddEnvironmentVariables() // Include environment variables
                .Build(); // Build the configuration

            var connectionString = configuration.GetConnectionString("DefaultConnection");

            if (string.IsNullOrEmpty(connectionString))
            {
                throw new ArgumentException("Connection string 'DefaultConnection' not found.");
            }

            // Create a DbContextOptionsBuilder for AppDbContext
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

            // Configure the options builder to use Npgsql (PostgreSQL) with the connection string
            optionsBuilder.UseNpgsql(connectionString);

            // Return a new instance of AppDbContext with the configured options
            return new AppDbContext(optionsBuilder.Options);
        }
    }
}
