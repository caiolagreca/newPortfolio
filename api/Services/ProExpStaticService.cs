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
  public class ProExpStaticService : IService<ProfessionalExperience>
  {
    private readonly List<ProfessionalExperience> _proExp;

    public ProExpStaticService()
    {
      var jsonPath = Path.Combine(
          Directory.GetCurrentDirectory(),
          "data",
          "staticJSON",
          "books.json"
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

      _proExp = JsonSerializer.Deserialize<List<ProfessionalExperience>>(jsonString, options)
                ?? new List<ProfessionalExperience>();
    }

    public Task<IEnumerable<ProfessionalExperience>> GetAllAsync()
    {
      return Task.FromResult<IEnumerable<ProfessionalExperience>>(_proExp);
    }

    public Task<ProfessionalExperience> GetByIdAsync(int id)
    {
      var proExp = _proExp.FirstOrDefault(b => b.Id == id);
      return Task.FromResult(proExp);
    }

    public Task<ProfessionalExperience> CreateAsync(ProfessionalExperience proExp)
    {
      var newId = _proExp.Any() ? _proExp.Max(b => b.Id) + 1 : 1;
      proExp.Id = newId;
      _proExp.Add(proExp);
      return Task.FromResult(proExp);
    }

    public Task<ProfessionalExperience> UpdateAsync(int id, ProfessionalExperience experience)
    {
      var existingExperience = _proExp.FirstOrDefault(b => b.Id == id);
      if (existingExperience == null)
      {
        return Task.FromResult<ProfessionalExperience>(null);
      }

      existingExperience.Position = experience.Position;
      existingExperience.Company = experience.Company;
      existingExperience.Location = experience.Location;
      existingExperience.StartDate = experience.StartDate;
      existingExperience.EndDate = experience.EndDate;
      existingExperience.IsCurrent = experience.IsCurrent;
      existingExperience.Description = experience.Description;

      return Task.FromResult(existingExperience);
    }

    public Task<bool> DeleteAsync(int id)
    {
      var proExp = _proExp.FirstOrDefault(b => b.Id == id);
      if (proExp == null)
      {
        return Task.FromResult(false);
      }
      _proExp.Remove(proExp);
      return Task.FromResult(true);
    }

  }
}