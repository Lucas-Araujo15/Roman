using roman.webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace roman.webAPI.Interfaces
{
    interface IProfessorRepository
    {
        /// <summary>
        /// Busca um professor específico
        /// </summary>
        /// <param name="email">Email do professor</param>
        /// <param name="senha">Senha do professor</param>
        Professor Logar(string email, string senha);
    }
}
