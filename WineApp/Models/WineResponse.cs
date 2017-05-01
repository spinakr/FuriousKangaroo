using System.Collections.Generic;

namespace WineApp.Models
{
    public class WineResponse
    {
        public IEnumerable<WineGroup> Archived { get; set; }
        public IEnumerable<WineGroup> InStock { get; set; }
    }
}
