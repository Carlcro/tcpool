using System.Collections.Generic;
using TimePool.Entities;

namespace TimePool.Services
{
    public interface IPersonRepository
    {
        IEnumerable<Person> GetMembers();

        Person GetMember(int id);
        void AddMember(Person person);
        void UpdateMember(Person person);
        void DeleteMember(Person person);
        bool Save();
    }
}