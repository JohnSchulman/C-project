using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TP_1
{
    class Program
    {
        static void Main(string[] args)
        {
            Class_JsonConvert.Json();

            //// on met dans une variable le pointeur de la methode print people de notre delegate 
            //var action = new PrintAction(PrintPeople);
            //// on passe en parametre le variable du delegate
            //var people = Person.GetPerson(action);

            //// on met dans une variable le pointeur de la methode print people de notre delegate 
            //var action2 = new PrintAction(PrintLivre);
            //// on passe en parametre le variable du delegate
            //var livre = Person.GetLivre(action2);
            //// instanciation de livre

            //Livre livre = new Livre(4334, "test", "Mark Twain");
            //Console.WriteLine(livre.ToString());

            //// instanciation de person
            //Person person = new Person(777, "Samita", "Arellano");
            //Console.WriteLine(person.ToString());

            ////pour afficher une list
            //var l = Livre.GetBooks();
            //foreach (var item in l)

            //{
            //    // modifier une attribut 
            //    item.ISBN = 2344;
            //    // acceder au liste complet
            //    Console.WriteLine(item.ToString());
            //    // acceder au une attribut spécifique 
            //    Console.WriteLine(item.Author);

            //}
            // penser à la fin mettre ce ligne pour que le console affiche en continue 
            Console.ReadLine();

        }

        private static void PrintPeople(Person[] people)
        {

        }


    }

}
