using System;
using System.Collections.Generic;

#nullable disable

namespace roman.webAPI.Domains
{
    public partial class Tema
    {
        public Tema()
        {
            Projetos = new HashSet<Projeto>();
        }

        public short IdTema { get; set; }
        public string TituloTema { get; set; }

        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
