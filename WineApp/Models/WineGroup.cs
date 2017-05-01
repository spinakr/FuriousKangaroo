using System.Collections.Generic;

namespace WineApp.Models
{
    public class WineGroup
    {
        public WineInfo Info { get; set; }
        public IEnumerable<string> Ids { get; set; }
    }
}
