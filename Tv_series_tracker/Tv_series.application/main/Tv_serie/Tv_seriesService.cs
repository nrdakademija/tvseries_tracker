using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Tv_series.EF.Modules;
using Tv_series.EF.repositories;

namespace Tv_series.application.main.Tv_serie
{
    public class Tv_seriesService : ITv_seriesService
    {
        protected readonly ITv_seriesRepository _TvseriesRepository;
        
        public Tv_seriesService(ITv_seriesRepository TvseriesRepository)
        {
            _TvseriesRepository = TvseriesRepository;
          
        }



        public List<Tvseries> GetAllTv_series()
        {
            var list = _TvseriesRepository.GetTvseries();
           
            return list;
        }
    }
}
