using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace api.Models
{
    public class ProfessionalExpSkill
    {
        public int SkillId { get; set; }
        public Skill? Skill { get; set; }
        public int ProfessionalExperienceId { get; set; }
        [JsonIgnore]
        public ProfessionalExperience? ProfessionalExperience { get; set; }
    }
}