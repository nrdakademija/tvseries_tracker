using Microsoft.EntityFrameworkCore;
using Tv_series.EF.Modules;


namespace Tv_series.EF
{
    public partial class ProjektasContext : DbContext
    {
        public ProjektasContext(DbContextOptions<ProjektasContext> options)
        : base(options)
        { }

        public virtual DbSet<Genres> Genres { get; set; }
        public virtual DbSet<SerieDates> SerieDates { get; set; }
        public virtual DbSet<Tvseries> Tvseries { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        // Unable to generate entity type for table 'dbo.TVSeriesGenres'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.TVSeriesDates'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.Wishlists'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.WatchedSeries'. Please see the warning messages.
        // Unable to generate entity type for table 'dbo.PersonalCalendors'. Please see the warning messages.
          
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Genres>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SerieDates>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.NextAvailable).HasColumnName("nextAvailable");

                entity.Property(e => e.Season).HasColumnName("season");

                entity.Property(e => e.SerieNumber).HasColumnName("serieNumber");

                entity.Property(e => e.TimeDate)
                    .HasColumnName("timeDate")
                    .HasColumnType("datetime");
            });

            modelBuilder.Entity<Tvseries>(entity =>
            {
                entity.ToTable("TVSeries");

                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Enddate).HasColumnName("enddate");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Seasons).HasColumnName("seasons");

                entity.Property(e => e.Seriesyear).HasColumnName("seriesyear");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.Property(e => e.Id)
                    .HasColumnName("id")
                    .ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Usertype)
                    .HasColumnName("usertype")
                    .HasDefaultValueSql("((1))");
            });
        }
    }
}
