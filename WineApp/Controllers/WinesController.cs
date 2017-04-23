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
        public CloudTable WineTable { get; private set; }
        public WinesController(IOptions<AppSettings> optionsAccessor)
        {
            CloudStorageAccount storageAccount = CloudStorageAccount.Parse(optionsAccessor.Value.StorageConnectionString);
            CloudTableClient tableClient = storageAccount.CreateCloudTableClient();
            WineTable = tableClient.GetTableReference("wines");
            WineTable.CreateIfNotExistsAsync();
        }

        [HttpGet]
        public IEnumerable<WineInfo> Get()
        {
            return WineTable.ExecuteQuerySegmentedAsync(new TableQuery<WineInfo>(), new TableContinuationToken()).Result;
        }

        [HttpGet("{country}")]
        public IEnumerable<WineInfo> Get(string country)
        {
            return WineTable.ExecuteQuerySegmentedAsync(new TableQuery<WineInfo>().Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, country)), new TableContinuationToken()).Result;
        }

        [HttpPost]
        public void Post([FromBody]WineInfo wine)
        {
            WineTable.ExecuteAsync(TableOperation.Insert(wine));
        }
    }
}
