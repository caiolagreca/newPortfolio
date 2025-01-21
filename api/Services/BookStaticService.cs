using api.Interfaces;
using api.Models;
using System.Text.Json;  // para deserialização do JSON

namespace api.Services
{
  public class BookStaticService : IService<Book>
  {
    private readonly List<Book> _books;

    public BookStaticService()
    {
      // Monta o caminho físico até o arquivo JSON
      // Você pode ajustar este Path conforme a necessidade do seu projeto.
      var jsonPath = Path.Combine(
          Directory.GetCurrentDirectory(),
          "data",
          "staticJSON",
          "books.json"
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

      _books = JsonSerializer.Deserialize<List<Book>>(jsonString, options)
                ?? new List<Book>();
    }

    // Lista todos os livros
    public Task<IEnumerable<Book>> GetAllAsync()
    {
      return Task.FromResult<IEnumerable<Book>>(_books);
    }

    // Busca um livro pelo Id
    public Task<Book> GetByIdAsync(int id)
    {
      var book = _books.FirstOrDefault(b => b.Id == id);
      return Task.FromResult(book);
    }

    // Métodos de escrita (Create/Update/Delete)
    // Se você quiser permitir escrita estática (não persistida em DB),
    // pode implementar aqui in-memory. Se não, pode simplesmente
    // devolver NotImplementedException ou algo similar.

    public Task<Book> CreateAsync(Book book)
    {
      // Implementação in-memory (opcional):
      // Simplesmente gera um novo Id e adiciona à lista. 
      // Observação: não persiste no arquivo JSON.
      var newId = _books.Any() ? _books.Max(b => b.Id) + 1 : 1;
      book.Id = newId;
      _books.Add(book);
      return Task.FromResult(book);
    }

    public Task<Book> UpdateAsync(int id, Book book)
    {
      // Implementação in-memory (opcional):
      var existingBook = _books.FirstOrDefault(b => b.Id == id);
      if (existingBook == null)
      {
        return Task.FromResult<Book>(null);
      }

      existingBook.Title = book.Title;
      existingBook.Author = book.Author;
      existingBook.ImageUrl = book.ImageUrl;
      existingBook.Description = book.Description;

      return Task.FromResult(existingBook);
    }

    public Task<bool> DeleteAsync(int id)
    {
      // Implementação in-memory (opcional):
      var book = _books.FirstOrDefault(b => b.Id == id);
      if (book == null)
      {
        return Task.FromResult(false);
      }
      _books.Remove(book);
      return Task.FromResult(true);
    }
  }
}
