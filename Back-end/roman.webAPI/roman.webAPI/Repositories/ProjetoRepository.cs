using Microsoft.EntityFrameworkCore;
using roman.webAPI.Contexts;
using roman.webAPI.Domains;
using roman.webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace roman.webAPI.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {
        RomanContext ctx = new RomanContext();
        public void CadastrarProjeto(Projeto novoProjeto)
        {
            ctx.Projetos.Add(novoProjeto);
            ctx.SaveChanges();
        }

        public List<Projeto> ListarProjetos()
        {
            List<Projeto> listaProjetos = ctx.Projetos.Include(x => x.IdProfessorNavigation).Include(x => x.IdTemaNavigation).ToList();
            return listaProjetos;
        }
    }
}
