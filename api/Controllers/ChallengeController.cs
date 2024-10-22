using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;


namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChallengeController : ControllerBase
    {
        private readonly IChallengeService _challengeService;

        public ChallengeController(IChallengeService challengeService)
        {
            _challengeService = challengeService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Challenge>>> GetChallenges()
        {
            var challenges = await _challengeService.GetAllAsync();
            return Ok(challenges);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Challenge>> GetChallenge(int id)
        {
            var challenge = await _challengeService.GetByIdAsync(id);
            if (challenge == null) return NotFound();
            return Ok(challenge);
        }

        [HttpPost]
        public async Task<ActionResult<Challenge>> AddChallenge([FromBody] Challenge challenge)
        {
            await _challengeService.CreateAsync(challenge);
            return CreatedAtAction(nameof(GetChallenge), new { id = challenge.Id }, challenge);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Challenge>> UpdateChallenge(int id, [FromBody] Challenge challenge)
        {
            if (id != challenge.Id)
            {
                return BadRequest("ID mismatch.");
            }
            var updatedChallenge = await _challengeService.UpdateAsync(id, challenge);
            if (updatedChallenge == null) return NotFound();
            return Ok(updatedChallenge);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Challenge>> DeleteChallenge(int id)
        {
            await _challengeService.DeleteAsync(id);
            return NoContent();
        }
    }
}