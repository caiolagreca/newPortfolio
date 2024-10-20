using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Models;

namespace api.Interfaces
{
    public interface IArticleService
    {

        Task<IEnumerable<Article>> GetAllAsync(); //porque IEnumerable ao inves de IList?
        Task<Article> GetByIdAsync(int id);
        Task<Article> CreateAsync(Article article);
        Task<Article> UpdateAsync(int id, Article updatedArticle);
        Task<Article> DeleteAsync(int id);
    }
}