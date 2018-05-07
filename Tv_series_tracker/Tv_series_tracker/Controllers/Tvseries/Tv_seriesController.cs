using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tv_series.application.main.Tv_serie;

namespace Tv_series_tracker.Controllers.Tvseries
{
    [Route("/[controller]")]
    public class Tv_seriesController : Controller
    {

        protected readonly ITv_seriesService _service;

       public Tv_seriesController(ITv_seriesService service)
        {
            _service = service;
        }

        [HttpGet]
        public IActionResult Get()
        {

            var tv_series = _service.GetAllTv_series();
            return Ok(tv_series);
        }
    }
}
