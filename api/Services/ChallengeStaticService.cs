using System.Text.Json;
using api.Interfaces;
using api.Models;

namespace api.Services
{
  public class ChallengeSaticService : IService<Challenge>
  {
    private readonly List<Challenge> _challenges;

    public ChallengeSaticService()
    {
      var jsonPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "data",
                "staticJSON",
                "challenges.json"
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

      _challenges = JsonSerializer.Deserialize<List<Challenge>>(jsonString, options)
                ?? new List<Challenge>();
    }

    public Task<IEnumerable<Challenge>> GetAllAsync()
    {
      return Task.FromResult<IEnumerable<Challenge>>(_challenges);
    }

    public Task<Challenge> GetByIdAsync(int id)
    {
      var challenge = _challenges.FirstOrDefault(b => b.Id == id);
      return Task.FromResult(challenge);
    }

    public Task<Challenge> CreateAsync(Challenge challenge)
    {
      var newId = _challenges.Any() ? _challenges.Max(b => b.Id) + 1 : 1;
      challenge.Id = newId;
      _challenges.Add(challenge);
      return Task.FromResult(challenge);
    }

    public Task<Challenge> UpdateAsync(int id, Challenge challenge)
    {
      var existingChallenge = _challenges.FirstOrDefault(b => b.Id == id);
      if (existingChallenge == null)
      {
        return Task.FromResult<Challenge>(null);
      }

      existingChallenge.Title = challenge.Title;
      existingChallenge.Description = challenge.Description;
      existingChallenge.ImageUrl = challenge.ImageUrl;
      existingChallenge.LinkGithub = challenge.LinkGithub;

      return Task.FromResult(existingChallenge);
    }

    public Task<bool> DeleteAsync(int id)
    {
      var challenge = _challenges.FirstOrDefault(b => b.Id == id);
      if (challenge == null)
      {
        return Task.FromResult(false);
      }
      _challenges.Remove(challenge);
      return Task.FromResult(true);
    }
  }
}
