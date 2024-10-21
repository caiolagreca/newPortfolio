using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using api.Interfaces;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace api.Controllers
{
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        private readonly IBookInterface _bookService;

        public BookController(IBookInterface bookService)
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

        [HttpGet("{id}")]
        public async Task<ActionResult<Book>> GetBook(int id)
        {
            var book = await _bookService.GetByIdAsync(id);
            if (book == null) return NotFound();
            return Ok(book);
        }

        [HttpPost]
        public async Task<ActionResult<Book>> AddBook([FromBody] Book book)
        {
            await _bookService.CreateAsync(book);
            /* return CreatedAtAction(nameof(GetArticle), new { id = article.Id }, article); */
            return Ok(book);
        }

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

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteBook(int id)
        {
            var article = await _bookService.DeleteAsync(id);
            if (article == null) return NotFound();
            return NoContent();
        }
    }
}