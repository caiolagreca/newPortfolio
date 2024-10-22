using api.Models;

namespace api.Interfaces
{
    public interface IProExpService
    {
        Task<IEnumerable<ProfessionalExperience>> GetAllAsync();
        Task<ProfessionalExperience> GetByIdAsync(int id);
        Task<ProfessionalExperience> CreateAsync(ProfessionalExperience experience);
        Task<ProfessionalExperience> UpdateAsync(int id, ProfessionalExperience experience);
        Task<bool> DeleteAsync(int id);
    }
}