using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TP_1
{
    // example de delegate: cad une type qui qui ne renvoie rien et 
    // une type qui permet de stocker une pointeur sur une fonction
    // il prends toujours en parametres un methodes
    internal delegate void PrintAction(Person[] people);

    class Person
    {

        // création de mon constructeur : public  Nom de la clase () {}
        public Person(int id, string firstname, string lastname)
        {
            Id = id;
            FirstName = firstname;
            LastName = lastname;

        }

        // getter, setters
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        // création d'un livre qu'on va mettre dans une tableau 
        // on remplace le int par Livre[]
        public Livre[] Book { get; set; }


        // permet de écrire les attribut spécifique 
        // override plus espace choisi
        public override string ToString()
        {
            return $"{Id},{FirstName}, {LastName}, {Book}";
        }

        public static Person[] GetPerson(PrintAction action)
        {
            var result = new Person[]
            {
                    new Person(1, "Samita", "Love"),
                    new Person(2, "Mischa", "Schulman"),
                    new Person(3, "Barry", "Schulman")
            };
            action(result);
            return result;
            
        }
    }
}
