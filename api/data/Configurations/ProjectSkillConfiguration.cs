using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace api.data.Configurations
{
    public class ProjectSkillConfiguration : IEntityTypeConfiguration<ProjectSkill>
    {
        public void Configure(EntityTypeBuilder<ProjectSkill> modelBuilder)
        {
            modelBuilder.HasKey(x => new { x.SkillId, x.ProjectId });
            modelBuilder.HasOne<Skill>(x => x.Skill).WithMany(x => x.ProjectSkills).HasForeignKey(x => x.SkillId);
            modelBuilder.HasOne<Project>(x => x.Project).WithMany(x => x.ProjectSkills).HasForeignKey(x => x.ProjectId);
        }

    }
}