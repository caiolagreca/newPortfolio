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
    public class ArticleService : IArticleService
    {
        private readonly AppDbContext _context;

        public ArticleService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Article>> GetAllAsync()
        {
            return await _context.Articles.ToListAsync();
        }

        public async Task<Article> GetByIdAsync(int id)
        {
            return await _context.Articles.FindAsync(id);
        }

        public async Task<Article> CreateAsync(Article article)
        {
            await _context.Articles.AddAsync(article);
            await _context.SaveChangesAsync();
            return article;

        }
        public async Task<Article> UpdateAsync(int id, Article updatedArticle)
        {
            if (id != updatedArticle.Id)
            {
                return null;
            }

            var existingArticle = await _context.Articles.FindAsync(id);
            if (existingArticle == null) return null;

            existingArticle.Title = updatedArticle.Title;
            existingArticle.Description = updatedArticle.Description;
            existingArticle.Topic = updatedArticle.Topic;
            existingArticle.ImageUrl = updatedArticle.ImageUrl;
            existingArticle.UrlArticle = updatedArticle.UrlArticle;

            await _context.SaveChangesAsync();
            return existingArticle;


        }
        public async Task<Article> DeleteAsync(int id)
        {
            var article = await _context.Articles.FindAsync(id);
            if (article == null) return null;

            _context.Articles.Remove(article);
            await _context.SaveChangesAsync();
            return article;
        }

    }
}