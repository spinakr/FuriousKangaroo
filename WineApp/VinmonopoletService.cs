using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using WineApp.Models;

namespace WineApp
{
    public class VinmonopoletService
    {
        public Dictionary<string, string[]> WineRepo { get; set; }
        public VinmonopoletService()
        {
            WineRepo = File.ReadAllLines(@"./produkter.csv", Encoding.GetEncoding("ISO-8859-1")).Skip(1)
                .Select(x => x.Split(';'))
                .ToDictionary(x => x[1], x => x);
        }

        public WineInfo GetInfo(string vinmonopoletId)
        {
            var wineInfo = WineRepo[vinmonopoletId];
            return new WineInfo
            {
                RowKey = Guid.NewGuid().ToString(),
                PartitionKey = "instock",
                VinmonopoletId = vinmonopoletId,
                BoughtDate = DateTime.Now.Date.ToString(),
                Name = wineInfo[2],
                Price = wineInfo[4],
                Type = wineInfo[6],
                Country = wineInfo[20],
                Area = wineInfo[21],
                Vintage = wineInfo[23],
                Fruit = wineInfo[24],
                Producer = wineInfo[30],
                VinmonopoletUrl = wineInfo[35]
            };
        }
    }
}
