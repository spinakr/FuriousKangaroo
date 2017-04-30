﻿using Microsoft.WindowsAzure.Storage.Table;
using System;

namespace WineApi.Models
{
    public class WineInfo : TableEntity
    {
        public WineInfo(){}
        public WineInfo(string status, string id)
        {
            PartitionKey = status;
            RowKey = id;
        }

        public string Name { get; set; }
        public string Vintage { get; set; }
        public string Type { get; set; }
        public string Producer { get; set; }
        public string Country { get; set; }
        public string Area { get; set; }
        public string Fruit { get; set; }
        public string Price { get; internal set; }
        public string Occation { get; internal set; }
        public bool Storage { get; internal set; }
        public string BoughtDate { get; internal set; }
    }
}