using Microsoft.EntityFrameworkCore;

namespace CheesecakeFactory.Data;

public class CheesecakeFactoryDataContext : DbContext
{
    private readonly string _connectionString;

    public CheesecakeFactoryDataContext(string connectionString)
    {
        _connectionString = connectionString;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer(_connectionString);
    }
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
        {
            relationship.DeleteBehavior = DeleteBehavior.Restrict;
        }
    }

    public DbSet<CheesecakeOrder> CheesecakeOrders { get; set; }
}