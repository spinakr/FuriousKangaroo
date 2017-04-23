﻿using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace WineApi.Models
{
    public class WineInfo : TableEntity
    {
        public WineInfo(){}
        public WineInfo(string country, string id)
        {
            PartitionKey = country;
            RowKey = id;
            Country = country;
        }

        public string Name { get; set; }
        public DateTime Vintage { get; set; }
        public string Producer { get; set; }
        public string Country { get; set; }
        public string Area { get; set; }
        public string Fruit { get; set; }
    }
}