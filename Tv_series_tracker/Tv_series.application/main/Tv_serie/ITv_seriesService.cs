using System.Collections.Generic;
using Tv_series.EF.Modules;

namespace Tv_series.application.main.Tv_serie
{
    public interface ITv_seriesService
    {
        List<Tvseries> GetAllTv_series();
    }
}