using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
            var fileReader = File.ReadAllLines(@"../../../import/in-cooler.csv");
            var fileReader2 = File.ReadAllLines(@"../../../import/was-in-cooler.csv");

            ImportFromFile(wineTable, fileReader, "instock");
            ImportFromFile(wineTable, fileReader2, "archive");
        }

        private static void ImportFromFile(CloudTable wineTable, string[] fileReader, string status)
        {
            foreach (string line in fileReader)
            {
                var columns = line.Split(',');
                var guid = Guid.NewGuid().ToString();

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

                wineTable.Execute(TableOperation.Insert(wine));
            }
        }
    }
}
