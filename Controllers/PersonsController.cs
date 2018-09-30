using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TimePool.Models.PersonsDto;

namespace TimePool.Controllers
{
    [Route("api/Persons")]
    public class PersonsController : Controller
    {
        //private IPersonInfoRepository _PersonInfoRepository;
        private readonly ILogger<PersonsController> logger;

        private List<PersonsDto> Persons = new List<PersonsDto>(){
            new PersonsDto()
            {
                id=1,
                firstName = "Carl",
                lastName = "Cronsioe",
                shortName = "cc",
                password = "123"
            },
                        new PersonsDto()
            {
                id=2,
                firstName = "Luke",
                lastName = "Orun",
                shortName = "LO",
                password = "123"
            },
                        new PersonsDto()
            {
                id=3,
                firstName = "Richard",
                lastName = "Hentze",
                shortName = "RH",
                password = "123"
            }

        };
        public PersonsController(ILogger<PersonsController> logger/*, IPersonInfoRepository PersonInfoRepository*/)
        {
            this.logger = logger;
            //_PersonInfoRepository = PersonInfoRepository;
        }

        [HttpGet()]
        public IActionResult GetPersons()
        {

            var PersonEntities = Persons;

            var results = new List<PersonsDto>();
            foreach (var PersonEntity in PersonEntities)
            {
                results.Add(new PersonsDto
                {
                    id = PersonEntity.id,
                    firstName = PersonEntity.firstName,
                    lastName = PersonEntity.lastName,
                    shortName = PersonEntity.shortName,
                    password = PersonEntity.password
                });
            }

            return Ok(results);
        }

        [HttpGet("{id}")]
        public IActionResult GetPerson(int id)
        {
            var Person = Persons.SingleOrDefault(x => x.id == id);

            if (Person == null)
            {
                logger.LogInformation($"Person with {id} was not found");
                return NotFound();
            }
            var result = new PersonsDto
            {
                id = Person.id,
                firstName = Person.firstName,
                lastName = Person.lastName,
                shortName = Person.shortName,
                password = Person.password
            };
            return Ok(result);
        }

        [HttpPost()]
        public IActionResult CreatePerson([FromBody] PersonsCreateDto Person)
        {

            if (Person == null)
            {
                return BadRequest();
            }

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var newPerson = new PersonsDto
            {
                firstName = Person.firstName,
                lastName = Person.lastName,
                shortName = Person.shortName,
                password = Person.password
            };

            Persons.Add(newPerson);
            /*
            if (!Persons.Save())
            {
                return StatusCode(500, "Saving Person was not successfull");
            }
            */

            var createdPerson = new PersonsDto
            {
                id = newPerson.id,
                firstName = newPerson.firstName,
                lastName = newPerson.lastName,
                shortName = newPerson.shortName,
                password = newPerson.password
            };

            return Ok(createdPerson);
        }
        /*

        [HttpPut()]
        public IActionResult UpdatePerson([FromBody] PersonsUpdateDto Person)
        {
            var PersonToUpdate = _PersonInfoRepository.GetPersons().FirstOrDefault(x => x.id == Person.id);

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
            var Person = _PersonInfoRepository.GetPersons().FirstOrDefault(x => x.id == id);

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