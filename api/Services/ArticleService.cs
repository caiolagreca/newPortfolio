using api.Interfaces;
using api.Models;
using System.Text.Json;  // para deserialização do JSON

namespace api.Services
{
    public class ArticleStaticService : IService<Article>
    {
        private readonly List<Article> _articles;

        public ArticleStaticService()
        {
            // Monta o caminho físico até o arquivo JSON
            // Você pode ajustar este Path conforme a necessidade do seu projeto.
            var jsonPath = Path.Combine(
                Directory.GetCurrentDirectory(),
                "data",
                "staticJSON",
                "articles.json"
            );

            if (!File.Exists(jsonPath))
            {
                // Se quiser, você pode lançar uma exceção caso o arquivo não seja encontrado
                throw new FileNotFoundException($"Arquivo JSON não encontrado em: {jsonPath}");
            }

            var jsonString = File.ReadAllText(jsonPath);
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            _articles = JsonSerializer.Deserialize<List<Article>>(jsonString, options)
                      ?? new List<Article>();
        }

        // Lista todos os livros
        public Task<IEnumerable<Article>> GetAllAsync()
        {
            return Task.FromResult<IEnumerable<Article>>(_articles);
        }

        // Busca um livro pelo Id
        public Task<Article> GetByIdAsync(int id)
        {
            var article = _articles.FirstOrDefault(b => b.Id == id);
            return Task.FromResult(article);
        }

        // Métodos de escrita (Create/Update/Delete)
        // Se você quiser permitir escrita estática (não persistida em DB),
        // pode implementar aqui in-memory. Se não, pode simplesmente
        // devolver NotImplementedException ou algo similar.

        public Task<Article> CreateAsync(Article article)
        {
            // Implementação in-memory (opcional):
            // Simplesmente gera um novo Id e adiciona à lista. 
            // Observação: não persiste no arquivo JSON.
            var newId = _articles.Any() ? _articles.Max(b => b.Id) + 1 : 1;
            article.Id = newId;
            _articles.Add(article);
            return Task.FromResult(article);
        }

        public Task<Article> UpdateAsync(int id, Article article)
        {
            // Implementação in-memory (opcional):
            var existingarticle = _articles.FirstOrDefault(b => b.Id == id);
            if (existingarticle == null)
            {
                return Task.FromResult<Article>(null);
            }

            existingarticle.Title = article.Title;
            existingarticle.Description = article.Description;
            existingarticle.Topic = article.Topic;
            existingarticle.ImageUrl = article.ImageUrl;
            existingarticle.UrlArticle = article.UrlArticle;


      return Task.FromResult(existingarticle);
        }

        public Task<bool> DeleteAsync(int id)
        {
            // Implementação in-memory (opcional):
            var article = _articles.FirstOrDefault(b => b.Id == id);
            if (article == null)
            {
                return Task.FromResult(false);
            }
            _articles.Remove(article);
            return Task.FromResult(true);
        }
    }
}
