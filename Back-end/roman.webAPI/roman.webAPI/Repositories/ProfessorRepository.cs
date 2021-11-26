using roman.webAPI.Contexts;
using roman.webAPI.Domains;
using roman.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace roman.webAPI.Repositories
{
    public class ProfessorRepository : IProfessorRepository
    {
        RomanContext ctx = new RomanContext();
        public Professor Logar(string email, string senha)
        {
            return ctx.Professors.FirstOrDefault(x => x.Email == email && x.Senha == senha);
        }
    }
}
