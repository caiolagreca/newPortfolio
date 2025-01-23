using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using api.data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
  public class ProjectStaticService : IService<Project>
  {
    private readonly List<Project> _projects;
    public ProjectStaticService()
    {
      var jsonPath = Path.Combine(
          Directory.GetCurrentDirectory(),
          "data",
          "staticJSON",
          "projects.json"
      );

      if (!File.Exists(jsonPath))
      {
        // Se quiser, você pode lançar uma exceção caso o arquivo não seja encontrado
        throw new FileNotFoundException($"Arquivo JSON não encontrado em: {jsonPath}");
      }

      var jsonString = File.ReadAllText(jsonPath);
      var options = new JsonSerializerOptions
      {
        PropertyNameCaseInsensitive = true
      };

      _projects = JsonSerializer.Deserialize<List<Project>>(jsonString, options)
                ?? new List<Project>();
    }

    public Task<IEnumerable<Project>> GetAllAsync()
    {
      return Task.FromResult<IEnumerable<Project>>(_projects);
    }

    public Task<Project> GetByIdAsync(int id)
    {
      var project = _projects.FirstOrDefault(b => b.Id == id);
      return Task.FromResult(project);
    }

    public Task<Project> CreateAsync(Project project)
    {
      var newId = _projects.Any() ? _projects.Max(b => b.Id) + 1 : 1;
      project.Id = newId;
      _projects.Add(project);
      return Task.FromResult(project);
    }

    public Task<Project> UpdateAsync(int id, Project project)
    {
      var existingProject = _projects.FirstOrDefault(b => b.Id == id);
      if (existingProject == null)
      {
        return Task.FromResult<Project>(null);
      }

      existingProject.Title = project.Title;
      existingProject.Description = project.Description;
      existingProject.ImageUrl = project.ImageUrl;
      existingProject.UrlWebsite = project.UrlWebsite;
      existingProject.UrlRepository = project.UrlRepository;

      return Task.FromResult(existingProject);
    }

    public Task<bool> DeleteAsync(int id)
    {
      var project = _projects.FirstOrDefault(b => b.Id == id);
      if (project == null)
      {
        return Task.FromResult(false);
      }
      _projects.Remove(project);
      return Task.FromResult(true);
    }
  }
}