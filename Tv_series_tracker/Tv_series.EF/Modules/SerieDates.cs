using System;
using System.Collections.Generic;

namespace Tv_series.EF.Modules
{
    public partial class SerieDates
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? TimeDate { get; set; }
        public int Season { get; set; }
        public int SerieNumber { get; set; }
        public int? NextAvailable { get; set; }
    }
}
