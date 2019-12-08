using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DatingApp.Models
{
    public class Value
    {
        public int Id { set; get; }
        public string Name { set; get; }
    }
}
