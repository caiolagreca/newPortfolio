using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleService _articleService;
        public ArticleController(IArticleService articleService)
        {
            _articleService = articleService;
        }

        // GET: api/Article
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Article>>> GetArticles()
        {
            var articles = await _articleService.GetAllAsync();
            return Ok(articles);
        }

        // GET: api/Article/5
        [HttpGet("{id:int}")]
        public async Task<ActionResult<Article>> GetArticle([FromRoute] int id)
        {
            var article = await _articleService.GetByIdAsync(id);
            if (article == null)
            {
                return NotFound();
            }
            return Ok(article);
        }

        // POST: api/Article
        [HttpPost]
        public async Task<ActionResult<Article>> AddArticle([FromBody] Article article)
        {
            await _articleService.CreateAsync(article);
            return CreatedAtAction(nameof(GetArticle), new { id = article.Id }, article);
        }

        // PUT: api/Article/5
        [HttpPut("{id}")]
        public async Task<ActionResult<Article>> UpdateArticle([FromRoute] int id, [FromBody] Article updatedArticle)
        {
            if (id != updatedArticle.Id)
            {
                return BadRequest("ID mismatch.");
            }
            var article = await _articleService.UpdateAsync(id, updatedArticle);
            if (article == null)
            {
                return NotFound();
            }
            return Ok(article);
        }

        // DELETE: api/Article/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArticle(int id)
        {
            var article = await _articleService.DeleteAsync(id);
            if (article == null)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}