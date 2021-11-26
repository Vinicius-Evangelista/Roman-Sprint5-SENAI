using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Roman.webApi.Domains;
using Roman.webApi.Interfaces;
using Roman.webApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfessoresController : ControllerBase
    {
        private IProfessorRepository _professorRepository { get; set; }

        public ProfessoresController()
        {
            _professorRepository = new ProfessorRepository();
        }

        [HttpPost("Cadastrar")]
        public IActionResult CadastrarProjeto(Projeto novoProjeto)
        {
            try
            {
                if (novoProjeto == null)
                {
                    return BadRequest(
                        new
                        {
                            message = "Novo projeto não pode ser vazio !",
                            erro = true
                        }
                        ); 
                }


                //Lembrar de pegar o Id do usuairo pelo token
                _professorRepository.CriarProjeto(novoProjeto);
                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
