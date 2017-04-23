using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WineApp
{
    public class AppSettings
    {
        public AppSettings()
        {
            StorageConnectionString = "empty";
        }
        public string StorageConnectionString { get; set; }
    }
}
