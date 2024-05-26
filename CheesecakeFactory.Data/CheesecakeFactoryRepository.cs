using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CheesecakeFactory.Data
{
    public class CheesecakeFactoryRepository
    {
        private readonly string _connectionString;

        public CheesecakeFactoryRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<CheesecakeOrder> GetAll()
        {
            using var context = new CheesecakeFactoryDataContext(_connectionString);
            return context.CheesecakeOrders.ToList();
        }

        public void AddOrder(CheesecakeOrder order)
        {
            using var context = new CheesecakeFactoryDataContext(_connectionString);
            context.CheesecakeOrders.Add(order);
            context.SaveChanges();
        }

        public CheesecakeOrder GetOrder(int id)
        {
            using var context = new CheesecakeFactoryDataContext(_connectionString);
            return context.CheesecakeOrders.FirstOrDefault(o => o.Id == id);
        }
    }
}
