using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using WineApi.Models;

namespace WineImporter
{
    class Program
    {
        static void Main(string[] args)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse("UseDevelopmentStorage=true;");
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
            var wineTable = tableClient.GetTableReference("wines");
            wineTable.DeleteIfExists();
            wineTable.CreateIfNotExistsAsync();
            var fileReader = File.ReadAllLines(@"../../../import/in-cooler.csv", Encoding.GetEncoding("ISO-8859-1"));
            var fileReader2 = File.ReadAllLines(@"../../../import/was-in-cooler.csv", Encoding.GetEncoding("ISO-8859-1"));

            var wineRepo = File.ReadAllLines(@"../../../WineApp/produkter.csv", Encoding.GetEncoding("ISO-8859-1")).Skip(1)
                .Select(x => x.Split(';'))
                .ToDictionary(x => x[1], x => x);

            ImportFromFile(wineTable, fileReader, "instock", wineRepo);
            ImportFromFile(wineTable, fileReader2, "archive", wineRepo);

        }

        private static void ImportFromFile(CloudTable wineTable, string[] fileReader, string status, Dictionary<string, string[]> wineRepo)
        {
            foreach (string line in fileReader)
            {
                var columns = line.Split(',');
                var guid = Guid.NewGuid().ToString();
                var vinmonopoletId = columns[10];

                var wine = new WineInfo(status, guid)
                {
                    Type = columns[0],
                    Name = columns[1],
                    Producer = columns[2],
                    Country = columns[4],
                    Vintage = columns[3],
                    Area = columns[5],
                    Price = columns[6],
                    Occation = columns[7] == "Lagring" ? "" : columns[7],
                    Storage = columns[7] == "Lagring" ? true : false,
                    BoughtDate = columns[8],
                    Fruit = columns[9]
                };


                if (!string.IsNullOrEmpty(vinmonopoletId))
                {
                    var wineInfo = wineRepo[vinmonopoletId];
                    wine = new WineInfo(status, guid)
                    {
                        VinmonopoletId = vinmonopoletId,
                        Name = wineInfo[2],
                        Price = wineInfo[4],
                        Type = wineInfo[6],
                        Country = wineInfo[20],
                        Area = wineInfo[21],
                        Vintage = wineInfo[23],
                        Fruit = wineInfo[24],
                        Producer = wineInfo[30],
                        VinmonopoletUrl = wineInfo[35],

                        Occation = columns[7] == "Lagring" ? "" : columns[7],
                        Storage = columns[7] == "Lagring" ? true : false,
                        BoughtDate = columns[8],
                    };
                }

                wineTable.Execute(TableOperation.Insert(wine));
            }
        }
    }
}
