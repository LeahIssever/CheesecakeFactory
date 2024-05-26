using CheesecakeFactory.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CheesecakeFactory.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheesecakeFactory : ControllerBase
    {
        private string _connectionString;

        public CheesecakeFactory(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getorders")]
        public List<CheesecakeOrder> GetOrders()
        {
            var repo = new CheesecakeFactoryRepository(_connectionString);
            return repo.GetAll();
        }

        [HttpPost]
        [Route("addorder")]
        public void AddOrder(CheesecakeOrder order)
        {
            var repo = new CheesecakeFactoryRepository(_connectionString);
            repo.AddOrder(order);
        }

        [HttpGet]
        [Route("getorderbyid")]
        public CheesecakeOrder GetOrderbyId(int id)
        {
            var repo = new CheesecakeFactoryRepository(_connectionString);
            return repo.GetOrder(id);
        }

    }
}
