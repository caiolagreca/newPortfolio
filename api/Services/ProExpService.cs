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
    public class ProExpService : IProExpService
    {
        private readonly AppDbContext _context;

        public ProExpService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<ProfessionalExperience>> GetAllAsync()
        {
            return await _context.ProfessionalExperiences.Include(x => x.ProfessionalExpSkills).ThenInclude(x => x.Skill).AsNoTracking().ToListAsync();
        }

        public async Task<ProfessionalExperience> GetByIdAsync(int id)
        {
            return await _context.ProfessionalExperiences.Include(x => x.ProfessionalExpSkills).ThenInclude(x => x.Skill).AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<ProfessionalExperience> CreateAsync(ProfessionalExperience experience)
        {
            await _context.ProfessionalExperiences.AddAsync(experience);
            await _context.SaveChangesAsync();
            return experience;
        }

        public async Task<ProfessionalExperience> UpdateAsync(int id, ProfessionalExperience experience)
        {
            if (id != experience.Id) return null;
            var existingExperience = await _context.ProfessionalExperiences.Include(x => x.ProfessionalExpSkills).FirstOrDefaultAsync(x => x.Id == id);
            if (existingExperience == null) return null;

            existingExperience.Position = experience.Position;
            existingExperience.Company = experience.Company;
            existingExperience.Location = experience.Location;
            existingExperience.StartDate = experience.StartDate;
            existingExperience.EndDate = experience.EndDate;
            existingExperience.IsCurrent = experience.IsCurrent;
            existingExperience.Description = experience.Description;

            foreach (var skill in experience.ProfessionalExpSkills)
            {
                existingExperience.ProfessionalExpSkills.Add(new ProfessionalExpSkill
                {
                    SkillId = skill.SkillId
                });
            }

            await _context.SaveChangesAsync();
            return experience;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var experience = await _context.ProfessionalExperiences.FirstOrDefaultAsync(x => x.Id == id);
            _context.ProfessionalExperiences.Remove(experience);
            return true;
        }

    }
}