using System;
using System.Collections.Generic;

namespace Tv_series.EF.Modules
{
    public partial class Tvseries
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Seriesyear { get; set; }
        public int Seasons { get; set; }
        public int? Enddate { get; set; }
        public string Description { get; set; }
    }
}
