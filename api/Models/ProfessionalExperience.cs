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
        public string Position { get; set; }
        public string Company { get; set; }
        public string Location { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public bool? IsCurrent { get; set; }
        public string Description { get; set; }
        public List<ProfessionalExpSkill> ProfessionalExpSkills { get; set; } = new List<ProfessionalExpSkill>();
    }
}