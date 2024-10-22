using api.Interfaces;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController] //Habilit Automatic Vallidation
    public class BookController : ControllerBase
    {
        private readonly IBookService _bookService;

        public BookController(IBookService bookService)
        {
            _bookService = bookService;
        }

        //GET: api/Book
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
        {
            var books = await _bookService.GetAllAsync();
            return Ok(books);
        }

        //GET: api/Book/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _bookService.GetByIdAsync(id);
            if (book == null) return NotFound();
            return Ok(book);
        }

        //POST: api/Book
        [HttpPost]
        public async Task<ActionResult<Book>> AddBook([FromBody] Book book)
        {
            await _bookService.CreateAsync(book);
            return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
        }

        //PUT: api/Book/1
        [HttpPut("{id}")]
        public async Task<ActionResult<Book>> UpdateBook(int id, [FromBody] Book book)
        {
            if (id != book.Id)
            {
                return BadRequest("ID mismatch.");

            }
            var updatedBook = await _bookService.UpdateAsync(id, book);
            if (updatedBook == null) return NotFound();
            return Ok(updatedBook);
        }

        //DELETE: api/Book/1
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBook(int id)
        {
            var book = await _bookService.DeleteAsync(id);
            if (book == null) return NotFound();
            return NoContent();
        }
    }
}