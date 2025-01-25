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
builder.Services.AddScoped<IService<Challenge>, ChallengeStaticService>();
builder.Services.AddScoped<IService<ProfessionalExperience>, ProExpStaticService>();
builder.Services.AddScoped<IService<Project>, ProjectStaticService>();
builder.Services.AddScoped<IService<Skill>, SkillStaticService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", builder => builder.WithOrigins("http://localhost:3000", "https://new-portfolio-sigma-ebon.vercel.app").AllowAnyMethod().AllowAnyHeader());

});

var app = builder.Build();

app.Use(async (context, next) =>
{
    if (context.Request.Method == HttpMethods.Head)
    {
        // Redireciona HEAD para GET
        context.Request.Method = HttpMethods.Get;
    }
    await next();
});

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
