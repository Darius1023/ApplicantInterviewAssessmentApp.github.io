using Microsoft.EntityFrameworkCore;

namespace ApplicantAPI.Models
{
    public class ApplicantDbContext: DbContext
    {
        public ApplicantDbContext(DbContextOptions<ApplicantDbContext>options):base(options)
        { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }

    }
}
