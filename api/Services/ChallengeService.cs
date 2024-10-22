using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class ChallengeService : IChallengeService
    {
        private readonly AppDbContext _context;

        public ChallengeService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Challenge>> GetAllAsync()
        {
            return await _context.Challenges.ToListAsync();
        }

        public async Task<Challenge> GetByIdAsync(int id)
        {
            return await _context.Challenges.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Challenge> CreateAsync(Challenge challenge)
        {
            await _context.Challenges.AddAsync(challenge);
            await _context.SaveChangesAsync();
            return challenge;
        }

        public async Task<Challenge> UpdateAsync(int id, Challenge challenge)
        {
            if (id != challenge.Id) return null;
            var existingChallenge = await _context.Challenges.FirstOrDefaultAsync(x => x.Id == id);
            if (existingChallenge == null) return null;

            existingChallenge.Title = challenge.Title;
            existingChallenge.Description = challenge.Description;
            existingChallenge.ImageUrl = challenge.ImageUrl;
            existingChallenge.LinkGithub = challenge.LinkGithub;

            await _context.SaveChangesAsync();
            return existingChallenge;
        }

        public async Task<Challenge> DeleteAsync(int id)
        {
            var challenge = await _context.Challenges.FirstOrDefaultAsync(x => x.Id == id);
            if (challenge == null) return null;

            _context.Challenges.Remove(challenge);
            await _context.SaveChangesAsync();
            return challenge;
        }
    }
}