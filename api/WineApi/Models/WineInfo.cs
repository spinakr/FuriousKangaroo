using System;

namespace WineApi.Models
{
    public class WineInfo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Vintage { get; set; }
        public string Producer { get; set; }
        public string Country { get; set; }
        public string Area { get; set; }
        public string Fruit { get; internal set; }
    }
}