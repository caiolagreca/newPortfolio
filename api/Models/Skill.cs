using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace api.Models
{
    public class Skill
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        [JsonIgnore]
        public List<ProjectSkill>? ProjectSkills { get; set; } = new List<ProjectSkill>();
        [JsonIgnore]
        public List<ProfessionalExpSkill>? ProfessionalExpSkills { get; set; } = new List<ProfessionalExpSkill>();
    }
}