using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TimePool.Models.RolesDto;

namespace TimePool.Controllers
{
    [Route("api/Roles")]
    public class RolesController : Controller
    {
        //private IPersonInfoRepository _PersonInfoRepository;
        private readonly ILogger<RolesController> logger;

        private List<RolesDto> Roles = new List<RolesDto>(){
            new RolesDto()
            {
                id=1,
                name= "Substitute",
                shortName="sub"
            },
            new RolesDto()
            {
                id=2,
                name= "Boss",
                shortName="boss"
            },            new RolesDto()
            {
                id=3,
                name= "Can assign",
                shortName="cs"
            }

        };
        public RolesController(ILogger<RolesController> logger/*, IPersonInfoRepository PersonInfoRepository*/)
        {
            this.logger = logger;
            //_PersonInfoRepository = PersonInfoRepository;
        }

        [HttpGet()]
        public IActionResult GetRoles()
        {

            var PersonEntities = Roles;

            var results = new List<RolesDto>();
            foreach (var PersonEntity in PersonEntities)
            {
                results.Add(new RolesDto
                {
                    id = PersonEntity.id,
                    name = PersonEntity.name,
                    shortName = PersonEntity.shortName,
                });
            }

            return Ok(results);
        }

        [HttpGet("{id}")]
        public IActionResult GetPerson(int id)
        {
            var Person = Roles.SingleOrDefault(x => x.id == id);

            if (Person == null)
            {
                logger.LogInformation($"Person with {id} was not found");
                return NotFound();
            }
            var result = new RolesDto
            {
                id = Person.id,
                name = Person.name,
                shortName = Person.shortName,
            };
            return Ok(result);
        }

        [HttpPost()]
        public IActionResult CreatePerson([FromBody] RolesCreateDto Person)
        {

            if (Person == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var newPerson = new RolesDto
            {
                name = Person.name,
                shortName = Person.shortName,
            };

            Roles.Add(newPerson);
            /*
            if (!Roles.Save())
            {
                return StatusCode(500, "Saving Person was not successfull");
            }
            */

            var createdPerson = new RolesDto
            {
                id = newPerson.id,
                name = newPerson.name,
                shortName = newPerson.shortName,
            };

            return Ok(createdPerson);
        }
        /*

        [HttpPut()]
        public IActionResult UpdatePerson([FromBody] RolesUpdateDto Person)
        {
            var PersonToUpdate = _PersonInfoRepository.GetRoles().FirstOrDefault(x => x.id == Person.id);

            if (PersonToUpdate == null)
            {
                return NotFound();
            }

            var newPerson = new Person
            {
                id = Person.id,
                fname = Person.fname,
                lname = Person.lname,
                description = Person.description
            };

            _PersonInfoRepository.UpdatePerson(newPerson);
            if (!_PersonInfoRepository.Save())
            {
                return StatusCode(500, "Updating Person was not successfull");
            }
            return Ok(newPerson);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePerson(int id)
        {
            var Person = _PersonInfoRepository.GetRoles().FirstOrDefault(x => x.id == id);

            if (Person == null)
            {
                return NotFound();
            }

            _PersonInfoRepository.DeletePerson(Person);

            if (!_PersonInfoRepository.Save())
            {
                return StatusCode(500, "Deleting Person was not successfull");
            }

            return NoContent();
        }
        */
    }
}