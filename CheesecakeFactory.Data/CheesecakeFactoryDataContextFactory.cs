using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeFactory.Data;

public class CheesecakeFactoryDataContextFactory : IDesignTimeDbContextFactory<CheesecakeFactoryDataContext>
{
    public CheesecakeFactoryDataContext CreateDbContext(string[] args)
    {
        var config = new ConfigurationBuilder()
           .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), 
           $"..{Path.DirectorySeparatorChar}CheesecakeFactory.Web"))
           .AddJsonFile("appsettings.json")
           .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

        return new CheesecakeFactoryDataContext(config.GetConnectionString("ConStr"));
    }
}