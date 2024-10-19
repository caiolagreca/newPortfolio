using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.data.Configurations
{
    public class ProfessionalExpSkillConfiguration : IEntityTypeConfiguration<ProfessionalExpSkill>
    {
        public void Configure(EntityTypeBuilder<ProfessionalExpSkill> modelBuilder)
        {
            modelBuilder.HasKey(x => new { x.SkillId, x.ProfessionalExperienceId });
            modelBuilder.HasOne<ProfessionalExperience>(x => x.ProfessionalExperience).WithMany(x => x.ProfessionalExpSkills).HasForeignKey(x => x.ProfessionalExperienceId);
            modelBuilder.HasOne<Skill>(x => x.Skill).WithMany(x => x.ProfessionalExpSkills).HasForeignKey(x => x.SkillId);
        }

    }
}