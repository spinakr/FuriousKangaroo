using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WineApp.Models
{
    public class WineGroup
    {
        public WineInfo Info { get; set; }
        public IEnumerable<string> Ids { get; set; }
    }
}
