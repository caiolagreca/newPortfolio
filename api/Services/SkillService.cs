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
    public class SkillService : IService<Skill>
    {
        private readonly AppDbContext _context;
        public SkillService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Skill>> GetAllAsync()
        {
            var skills = await _context.Skills.AsNoTracking().ToListAsync();
            if (skills == null) return null;
            return skills;
        }

        public async Task<Skill> GetByIdAsync(int id)
        {
            var skill = await _context.Skills.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
            if (skill == null) return null;
            return skill;
        }

        public async Task<Skill> CreateAsync(Skill skill)
        {
            if (skill == null) return null;
            await _context.Skills.AddAsync(skill);
            await _context.SaveChangesAsync();
            return skill;
        }

        public async Task<Skill> UpdateAsync(int id, Skill skill)
        {
            var existingSkill = await _context.Skills.Include(x => x.ProjectSkills).FirstOrDefaultAsync(x => x.Id == id);
            if (existingSkill == null) return null;

            existingSkill.Name = skill.Name;
            existingSkill.Category = skill.Category;

            await _context.SaveChangesAsync();
            return existingSkill;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var skill = await _context.Skills.FirstOrDefaultAsync(x => x.Id == id);
            if (skill == null) return false;
            _context.Skills.Remove(skill);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}