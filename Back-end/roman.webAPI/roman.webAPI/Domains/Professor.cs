using System;
using System.Collections.Generic;

#nullable disable

namespace roman.webAPI.Domains
{
    public partial class Professor
    {
        public Professor()
        {
            Projetos = new HashSet<Projeto>();
        }

        public short IdProfessor { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string NomeProfessor { get; set; }

        public virtual ICollection<Projeto> Projetos { get; set; }
    }
}
