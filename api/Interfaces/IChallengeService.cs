using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IChallengeService
    {
        Task<IEnumerable<Challenge>> GetAllAsync();
        Task<Challenge> GetByIdAsync(int id);
        Task<Challenge> CreateAsync(Challenge challenge);
        Task<Challenge> UpdateAsync(int id, Challenge challenge);
        Task<Challenge> DeleteAsync(int id);
    }
}