using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("/api/[controller]")]
    [ApiController]
    public class SkillController : ControllerBase
    {
        private readonly IService<Skill> _skillService;

        public SkillController(IService<Skill> skillService)
        {
            _skillService = skillService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Skill>>> GetSkills()
        {
            var skills = await _skillService.GetAllAsync();
            if (skills == null) return NotFound();
            return Ok(skills);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Skill>> GetSkill(int id)
        {
            var skill = await _skillService.GetByIdAsync(id);
            if (skill == null) return NotFound();
            return Ok(skill);
        }

        [HttpPost]
        public async Task<ActionResult<Skill>> CreateSkill([FromBody] Skill skill)
        {
            if (!ModelState.IsValid) return BadRequest("Skill data invalid.");
            await _skillService.CreateAsync(skill);
            return CreatedAtAction(nameof(GetSkill), new { id = skill.Id }, skill);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Skill>> UpdateSkill(int id, [FromBody] Skill skill)
        {
            if (!ModelState.IsValid) return BadRequest("Skill data invalid.");
            if (id != skill.Id) return NotFound();
            var updatedSkill = await _skillService.UpdateAsync(id, skill);
            if (updatedSkill == null) return NotFound();
            return Ok(skill);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSkill(int id)
        {
            var success = await _skillService.DeleteAsync(id);
            if (!success) return NotFound();
            return NoContent();
        }
    }
}