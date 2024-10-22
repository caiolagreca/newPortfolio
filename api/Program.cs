using api.data;
using api.Interfaces;
using api.Models;
using api.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//ConnectionString in the EnvironmentVariable
builder.Configuration.AddEnvironmentVariables();

builder.Services.AddScoped<IService<Article>, ArticleService>();
builder.Services.AddScoped<IService<Book>, BookService>();
builder.Services.AddScoped<IService<Challenge>, ChallengeService>();
builder.Services.AddScoped<IService<ProfessionalExperience>, ProExpService>();
builder.Services.AddScoped<IService<Project>, ProjectService>();
builder.Services.AddScoped<IService<Skill>, SkillService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

});

builder.Services.AddDbContext<AppDbContext>((options) => options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.UseCors("AllowAll");

app.Run();
