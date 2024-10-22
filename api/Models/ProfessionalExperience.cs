using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class ProfessionalExperience
    {
        public int Id { get; set; }
        [Required]
        public string Position { get; set; } = string.Empty;
        public string Company { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool? IsCurrent { get; set; }
        public string Description { get; set; } = string.Empty;
        public List<ProfessionalExpSkill> ProfessionalExpSkills { get; set; } = new List<ProfessionalExpSkill>();
    }
}