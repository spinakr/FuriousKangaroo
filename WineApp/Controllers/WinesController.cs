using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WineApi.Models;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using Microsoft.Extensions.Options;
using WineApp;

namespace WineApi.Controllers
{
    [Route("api/wines")]
    public class WinesController : Controller
    {
        private IWineRepository _wineRepo{ get; set; }
        public WinesController(IWineRepository wineRepo)
        {
            _wineRepo = wineRepo;
        }

        [HttpGet]
        public IEnumerable<WineInfo> Get()
        {
            return _wineRepo.GetAllInStock();
        }

        [HttpGet("{country}")]
        public IEnumerable<WineInfo> Get(string country)
        {
            return _wineRepo.GetAllInStock(country);
        }

        [HttpPost]
        public void Post([FromBody]WineInfo wine)
        {
            _wineRepo.Insert(wine);
        }
    }
}
