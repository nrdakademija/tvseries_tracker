using System.Collections.Generic;
using Tv_series.EF.Modules;

namespace Tv_series.EF.repositories
{
    public interface ITv_seriesRepository 
    {
        List<Tvseries> GetTvseries();
    }
}