using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
    public class Project
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string? UrlWebsite { get; set; }
        public string UrlRepository { get; set; }
        public List<ProjectSkill> ProjectSkills { get; set; } = new List<ProjectSkill>();
    }
}