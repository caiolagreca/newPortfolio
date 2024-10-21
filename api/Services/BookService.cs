using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class BookService : IBookInterface
    {
        private readonly AppDbContext _context;

        public BookService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Book>> GetAllAsync()
        {
            return await _context.Books.ToListAsync();
        }

        public async Task<Book> GetByIdAsync(int id)
        {
            return await _context.Books.FindAsync(id);
        }

        public async Task<Book> CreateAsync(Book book)
        {
            await _context.Books.AddAsync(book);
            await _context.SaveChangesAsync();
            return book;
        }

        public async Task<Book> UpdateAsync(int id, Book book)
        {
            if (id != book.Id)
            {
                return null;
            }

            var existingBook = await _context.Books.FindAsync(id);

            existingBook.Title = book.Title;
            existingBook.Author = book.Author;
            existingBook.ImageUrl = book.ImageUrl;
            existingBook.Description = book.Description;

            await _context.SaveChangesAsync();
            return existingBook;
        }

        public async Task<Book> DeleteAsync(int id)
        {
            var book = await _context.Books.FindAsync(id);
            if (book == null) return null;

            _context.Books.Remove(book);
            await _context.SaveChangesAsync();
            return book;
        }
    }
}