using Roman.webApi.Contexts;
using Roman.webApi.Domains;
using Roman.webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Roman.webApi.Repositories
{
    public class ProfessorRepository : IProfessorRepository
    {

        RomanContext context = new RomanContext();

        public void CriarProjeto(Projeto novoprojeto)
        {
            context.Projetos.Add(novoprojeto);

            context.SaveChanges();
        }
    }
}
