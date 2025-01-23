using System.Text.Json.Serialization;
using api.data;
using api.Interfaces;
using api.Models;
using api.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//ConnectionString in the EnvironmentVariable
builder.Configuration.AddEnvironmentVariables();

builder.Services.AddScoped<IService<Article>, ArticleStaticService>();
builder.Services.AddScoped<IService<Book>, BookStaticService>();
builder.Services.AddScoped<IService<Challenge>, ChallengeService>();
builder.Services.AddScoped<IService<ProfessionalExperience>, ProExpService>();
builder.Services.AddScoped<IService<Project>, ProjectService>();
builder.Services.AddScoped<IService<Skill>, SkillService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", builder => builder.WithOrigins("http://localhost:3000", "https://new-portfolio-sigma-ebon.vercel.app").AllowAnyMethod().AllowAnyHeader());

});

builder.Services.AddDbContext<AppDbContext>((options) => options.UseNpgsql("Host=localhost;Database=portfolio;Username=postgres;Password=ad23344263"));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();
app.UseCors("AllowFrontend");
app.MapControllers();
app.Run();
