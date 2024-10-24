using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.data.Configurations;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProjectSkillConfiguration());
            modelBuilder.ApplyConfiguration(new ProfessionalExpSkillConfiguration());

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<Book> Books { get; set; }
        public DbSet<Challenge> Challenges { get; set; }
        public DbSet<ProfessionalExperience> ProfessionalExperiences { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Skill> Skill { get; set; }
        public DbSet<ProjectSkill> ProjectSkills { get; set; }
        public DbSet<ProfessionalExpSkill> ProfessionalExpSkills { get; set; }
    }
}