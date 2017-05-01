﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WineApp;
using System.Linq;
using WineApp.Models;

namespace WineApi.Controllers
{
    [Route("api/wines")]
    public class WinesController : Controller
    {
        private IWineRepository _wineRepo { get; set; }
        public WinesController(IWineRepository wineRepo)
        {
            _wineRepo = wineRepo;
        }

        [HttpGet]
        public WineResponse Get()
        {
            var wines = _wineRepo.GetAllInStock();
            var inStock = wines.Where(w => w.PartitionKey == "instock");
            var archive = wines.Where(w => w.PartitionKey == "archive");

            var inStockGrouped = inStock
                .GroupBy(w => w.Name)
                .Select(g => new WineGroup
                {
                    Info = g.First(),
                    Ids = g.Select(x => x.RowKey)
                });
            var archiveGrouped = archive
                .GroupBy(w => w.Name)
                .Select(g => new WineGroup
                {
                    Info = g.First(),
                    Ids = g.Select(x => x.RowKey)
                });


            return new WineResponse
            {
                InStock = inStockGrouped,
                Archived = archiveGrouped
            };
        }

        [HttpPost]
        public string Post([FromBody]WineInfo wine)
        {
            return _wineRepo.Insert(wine);
        }
    }
}
