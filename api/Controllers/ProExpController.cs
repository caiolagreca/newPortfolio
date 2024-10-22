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
    [Route("api/[controller]")]
    [ApiController]
    public class ProExpController : ControllerBase
    {
        private readonly IService<ProfessionalExperience> _proExpService;

        public ProExpController(IService<ProfessionalExperience> proExpService)
        {
            _proExpService = proExpService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProfessionalExperience>>> GetExperiences()
        {
            var experiences = await _proExpService.GetAllAsync();
            return Ok(experiences);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProfessionalExperience>> GetExperience(int id)
        {
            var experience = await _proExpService.GetByIdAsync(id);
            if (experience == null) return NotFound();
            return Ok(experience);
        }

        [HttpPost]
        public async Task<ActionResult<ProfessionalExperience>> CreateExperience([FromBody] ProfessionalExperience experience)
        {
            await _proExpService.CreateAsync(experience);
            return CreatedAtAction(nameof(GetExperience), new { id = experience.Id }, experience);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProfessionalExperience>> UpdateExperience(int id, [FromBody] ProfessionalExperience experience)
        {
            if (id != experience.Id) return BadRequest("Id mismatch.");
            var updatedExperience = await _proExpService.UpdateAsync(id, experience);
            if (updatedExperience == null) return NotFound();
            return Ok(updatedExperience);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExperience(int id)
        {
            var success = await _proExpService.DeleteAsync(id);
            if (!success) return NotFound();
            return NoContent();

        }

    }
}