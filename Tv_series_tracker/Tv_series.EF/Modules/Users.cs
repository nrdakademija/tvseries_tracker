using System;
using System.Collections.Generic;

namespace Tv_series.EF.Modules
{
    public partial class Users
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public int? Usertype { get; set; }
    }
}
