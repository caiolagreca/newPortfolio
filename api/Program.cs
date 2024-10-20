using api.data;
using api.Interfaces;
using api.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

//ConnectionString in the EnvironmentVariable
builder.Configuration.AddEnvironmentVariables();

builder.Services.AddScoped<IArticleService, ArticleService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>((options) => options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConection")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();


app.Run();
