using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using roman.webAPI.Domains;
using roman.webAPI.Interfaces;
using roman.webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;

namespace roman.webAPI.Controllers
{
    [Produces("application/json")]
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private IProjetoRepository projetoRepository { get; set; }

        public ProjetosController()
        {
            projetoRepository = new ProjetoRepository();
        }

        [HttpGet]
        public IActionResult ListarTodos()
        {
            return Ok(projetoRepository.ListarProjetos());
        }

        [HttpPost]
        public IActionResult Cadastrar(Projeto projeto)
        {
            projeto.IdProfessor = Convert.ToInt16(HttpContext.User.Claims.First(o => o.Type == JwtRegisteredClaimNames.Jti).Value);

            if (projeto.IdProfessor == 0 || projeto.IdTema == 0 || projeto.TituloProjeto == null || projeto.Descricao == null)
            {
                return BadRequest(new
                {
                    mensagem = "Algumas informações não foram inseridas."
                });
            }

            projetoRepository.CadastrarProjeto(projeto);
            return StatusCode(201);
        }
    }
}
