using System;
using System.Collections.Generic;
using System.Text;

namespace Tv_series.application.main.Tv_serie
{
   public class Tv_seriesDTO
    {
          
        public int Id { get; set; }
        public string Name { get; set; }
        public int Seriesyear { get; set; }
        public int Seasons { get; set; }
        public int? Enddate { get; set; }
        public string Description { get; set; }
    }

}
