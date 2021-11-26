using System;
using System.Collections.Generic;

#nullable disable

namespace roman.webAPI.Domains
{
    public partial class Projeto
    {
        public short IdProjeto { get; set; }
        public short IdProfessor { get; set; }
        public short IdTema { get; set; }
        public string TituloProjeto { get; set; }
        public string Descricao { get; set; }

        public virtual Professor IdProfessorNavigation { get; set; }
        public virtual Tema IdTemaNavigation { get; set; }
    }
}
