using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using Tv_series.EF.Modules;

namespace Tv_series.EF.repositories
{
    public class Tv_seriesRepository : Repository<Tvseries>, ITv_seriesRepository
    {
    
        public Tv_seriesRepository(ProjektasContext context) : base(context)
        {
        }


        public List<Tvseries> GetTvseries()
        {
            return ProjektasContext.Tvseries
                .ToList();
        }
        public ProjektasContext ProjektasContext
        {
            get { return Context as ProjektasContext; }
        }
    }
}
