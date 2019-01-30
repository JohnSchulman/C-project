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
    //internal delegate void PrintAction(Livre[] people);
    
    class Livre
    {



        // création de mon constructeur : public  Nom de la clase () {}
        public Livre(int isbn, string test, string author)
        {
            ISBN = isbn;
            Test = test;
            Author = author;

        }

        //public int ISBN
        //{
        //    get
        //    {
        //        return _ISBN;
        //    }

        //}


        // pas besoin de lister les attributs privée au début
        //getters, setters
        public int ISBN { get; set; }
        public string Test { get; set; }
        public string Author { get; set; }
        public bool IsAvailable { get; set; }

        // permet de écrire les attribut spécifique
        // override plus espace choisi
        public override string ToString()
        {
            return $"{ISBN},{Test}, {Author}, {(IsAvailable ? "is available" : "not avalaiable")}";
        }

        public static Livre[] GetBooks()
        {
            var result = new Livre[]
            {
                    new Livre(4334, "test", "Mark Twain"),
                    new Livre(567, "test2", "victor Hugo"),
                    new Livre(789, "test3", "John Standal")
            };
            //PrintBook(result);
            return result;

        }
    }
}
