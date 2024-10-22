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
    public class ProjectService : IService<Project>
    {
        private readonly AppDbContext _context;
        public ProjectService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Project>> GetAllAsync()
        {
            return await _context.Projects.Include(x => x.ProjectSkills).ThenInclude(x => x.Skill).AsNoTracking().ToListAsync();
        }

        public async Task<Project> GetByIdAsync(int id)
        {
            return await _context.Projects.Include(x => x.ProjectSkills).ThenInclude(x => x.Skill).AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<Project> CreateAsync(Project project)
        {
            await _context.Projects.AddAsync(project);
            await _context.SaveChangesAsync();
            return project;
        }

        public async Task<Project> UpdateAsync(int id, Project project)
        {
            if (id != project.Id) return null;
            var existingProject = await _context.Projects.Include(x => x.ProjectSkills).FirstOrDefaultAsync(x => x.Id == id);
            if (existingProject == null) return null;

            existingProject.Title = project.Title;
            existingProject.Description = project.Description;
            existingProject.ImageUrl = project.ImageUrl;
            existingProject.UrlWebsite = project.UrlWebsite;
            existingProject.UrlRepository = project.UrlRepository;

            existingProject.ProjectSkills.Clear();

            foreach (var item in project.ProjectSkills)
            {
                existingProject.ProjectSkills.Add(new ProjectSkill
                {
                    SkillId = item.SkillId
                });
            }

            await _context.SaveChangesAsync();
            return existingProject;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var project = await _context.Projects.FirstOrDefaultAsync(x => x.Id == id);
            if (project == null) return false;

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}