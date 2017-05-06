using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Table;
using System;
using System.Collections.Generic;
using WineApp.Models;

namespace WineApp
{
    public interface IWineRepository
    {
        IEnumerable<WineInfo> GetAllInStock();
        IEnumerable<WineInfo> GetAllInStock(string country);
        WineInfo Insert(WineInfo wine);

    }

    public class WineRepository : IWineRepository
    {
        public CloudTable WineTable { get; private set; }
        public WineRepository(string connectionString)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
            WineTable = tableClient.GetTableReference("wines");
            WineTable.CreateIfNotExistsAsync();
        }

        public IEnumerable<WineInfo> GetAllInStock()
        {
            return WineTable.ExecuteQuerySegmentedAsync(new TableQuery<WineInfo>(), new TableContinuationToken()).Result;
        }

        public IEnumerable<WineInfo> GetAllInStock(string country)
        {
            return WineTable.ExecuteQuerySegmentedAsync(new TableQuery<WineInfo>().Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, country)), new TableContinuationToken()).Result;
        }

        public WineInfo Insert(WineInfo wine)
        {
            var guid =  Guid.NewGuid().ToString();
            wine.RowKey = guid;
            WineTable.ExecuteAsync(TableOperation.Insert(wine));
            return wine;
        }
    }
}
