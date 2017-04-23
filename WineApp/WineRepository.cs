using System;
using System.Collections.Generic;
using WineApi.Models;

namespace WineApi
{
    public static class WineRepository
    {
        public static IEnumerable<WineInfo> GetAllCurrentlyInCooler()
        {
            return new List<WineInfo>
            {
                new WineInfo
                {
                    Id = 1,
                    Area = "Beaujolais",
                    Country = "France",
                    Fruit = "Gamay",
                    Name = "Nouveau L'Ancien",
                    Producer = "Jean-Paul Brun",
                    Vintage = new DateTime(2015, 1, 1)
                },

                new WineInfo
                {
                    Id = 2,
                    Area = "Rheinhessen",
                    Country = "Germany",
                    Fruit = "Riesling",
                    Name = "Ürziger Würzgarten, Spätlese ",
                    Producer = "Marcus Molitor",
                    Vintage = new DateTime(2015, 1, 1)
                }
            };
        }
    }
}
