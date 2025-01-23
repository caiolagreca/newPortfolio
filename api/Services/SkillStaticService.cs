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
  public class SkillStaticService : IService<Skill>
  {
    private readonly List<Skill> _skills;
    public SkillStaticService()
    {
      var jsonPath = Path.Combine(
    Directory.GetCurrentDirectory(),
    "data",
    "staticJSON",
    "skills.json"
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

      _skills = JsonSerializer.Deserialize<List<Skill>>(jsonString, options)
                ?? new List<Skill>();
    }

    public Task<IEnumerable<Skill>> GetAllAsync()
    {
      return Task.FromResult<IEnumerable<Skill>>(_skills);
    }

    public Task<Skill> GetByIdAsync(int id)
    {
      var skill = _skills.FirstOrDefault(b => b.Id == id);
      return Task.FromResult(skill);
    }

    public Task<Skill> CreateAsync(Skill skill)
    {
      var newId = _skills.Any() ? _skills.Max(b => b.Id) + 1 : 1;
      skill.Id = newId;
      _skills.Add(skill);
      return Task.FromResult(skill);
    }

    public Task<Skill> UpdateAsync(int id, Skill skill)
    {
      var existingSkill = _skills.FirstOrDefault(b => b.Id == id);
      if (existingSkill == null)
      {
        return Task.FromResult<Skill>(null);
      }

      existingSkill.Name = skill.Name;
      existingSkill.Category = skill.Category;

      return Task.FromResult(existingSkill);
    }

    public Task<bool> DeleteAsync(int id)
    {
      var skill = _skills.FirstOrDefault(b => b.Id == id);
      if (skill == null)
      {
        return Task.FromResult(false);
      }
      _skills.Remove(skill);
      return Task.FromResult(true);
    }
  }
}