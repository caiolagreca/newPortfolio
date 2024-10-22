using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class ProjectSkill
    {
        public int ProjectId { get; set; }
        public Project? Project { get; set; }
        public int SkillId { get; set; }
        public Skill? Skill { get; set; }

    }
}