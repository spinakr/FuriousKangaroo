using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WineApi.Models;

namespace WineApi.Controllers
{
    [Route("api/[controller]")]
    public class WinesController : Controller
    {
        private WineRepository _wineRepo { get; set; }

        public WinesController(WineRepository repo)
        {
            _wineRepo = repo;
        }

        [HttpGet]
        public IEnumerable<WineInfo> Get()
        {
            return _wineRepo.GetAllCurrentlyInCooler();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
    }
}
