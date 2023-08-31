using Microsoft.EntityFrameworkCore;

namespace ApplicantAPI.Models
{
    public class ApplicantDbContext: DbContext
    {
        public ApplicantDbContext(DbContextOptions<ApplicantDbContext>options):base(options) //parameter
        { }

        public DbSet<Question> Questions { get; set; }
        public DbSet<Participant> Participants { get; set; }

    }
}
