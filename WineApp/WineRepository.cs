using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using WineApi.Models;
using Microsoft.WindowsAzure.Storage; 
using Microsoft.WindowsAzure.Storage.Table; 

namespace WineApi
{
    public class WineRepository
    {

        public static IConfigurationRoot Configuration { get; set; }
        public CloudTable WineTable { get; private set; }

        public WineRepository()
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            Configuration = builder.Build();

            CloudStorageAccount storageAccount = CloudStorageAccount.Parse("UseDevelopmentStorage=true;");
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
            WineTable = tableClient.GetTableReference("wines");
            WineTable.CreateIfNotExistsAsync();

            WineTable.ExecuteAsync(TableOperation.InsertOrReplace(new WineInfo("France", "Nouveau L'Ancien")
            {
                Area = "Beaujolais",
                Fruit = "Gamay",
                Producer = "Jean-Paul Brun",
                Vintage = new DateTime(2015, 1, 1)
            })).Wait();

            WineTable.ExecuteAsync(TableOperation.InsertOrReplace(new WineInfo("Germany", "Ürziger Würzgarten, Spätlese")
            {
                Area = "Rheinhessen",
                Fruit = "Riesling",
                Producer = "Marcus Molitor",
                Vintage = new DateTime(2015, 1, 1)
            })).Wait();
        }

        public IEnumerable<WineInfo> GetAllCurrentlyInCooler()
        {
            TableQuery<WineInfo> query = new TableQuery<WineInfo>();
            IEnumerable<WineInfo> wines =  WineTable.ExecuteQuerySegmentedAsync(query, new TableContinuationToken()).Result;

            return wines;
        }
    }
}
