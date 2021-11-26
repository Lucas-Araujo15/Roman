using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using roman.webAPI.Domains;
using roman.webAPI.Interfaces;
using roman.webAPI.Repositories;
using roman.webAPI.ViewModel;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace roman.webAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IProfessorRepository professorRepository { get; set; }

        public LoginController()
        {
            professorRepository = new ProfessorRepository();
        }

        [HttpPost]
        public IActionResult Entrar(LoginViewModel login)
        {
            try
            {
                Professor professorBuscado = professorRepository.Logar(login.email, login.senha);

                if (professorBuscado == null)
                {
                    return BadRequest("Usuário não encontrado.");
                }

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, professorBuscado.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, professorBuscado.IdProfessor.ToString())
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("senai-roman-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var TokenGerado = new JwtSecurityToken(
                    issuer: "roman.webAPI",
                    audience: "roman.webAPI",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(30),
                    signingCredentials: creds
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(TokenGerado)
                });
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
