using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TimePool.Entities
{
    public class Person
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id { get; set; }
        [Required]
        [MaxLength(50)]
        public string fName { get; set; }
        [Required]
        [MaxLength(50)]
        public string lName { get; set; }
        [Required]
        [MaxLength(20)]
        public string shortName { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public int roleId { get; set; }
    }
}