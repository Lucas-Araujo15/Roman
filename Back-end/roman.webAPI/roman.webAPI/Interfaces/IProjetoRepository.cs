using roman.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace roman.webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pelo ProjetoRepository
    /// </summary>
    interface IProjetoRepository
    {
        /// <summary>
        /// Lista todos os projetos cadastrados
        /// </summary>
        /// <returns>Uma lista de projetos</returns>
        List<Projeto> ListarProjetos();

        /// <summary>
        /// Cadastra um novo projeto
        /// </summary>
        /// <param name="novoProjeto">Objeto Projeto que será cadastrado</param>
        void CadastrarProjeto(Projeto novoProjeto);
    }
}
