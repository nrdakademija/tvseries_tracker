using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using Tv_series.application.main.Tv_serie;
using Tv_series.EF.Modules;

namespace Tv_series.application.automapper
{
   public class MappingsProfile : Profile
    {
        public MappingsProfile()
        {
            CreateMap<Tvseries, Tv_seriesDTO>();

        }
    }
}
