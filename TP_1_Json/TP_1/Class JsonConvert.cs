using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TP_1
{

    // writes in Json format in the .txt the output of the program 

    class Class_JsonConvert
    {
        public static void Json()
        {
            var books = Livre.GetBooks();
            // creer le json serializer 
            var serializer = JsonSerializer.Create();
            // creer le fichier.txt que j'utilise en ecriture
            using (StreamWriter sw = new StreamWriter(@"d:\json.txt"))
             {
                // transformation du stream writer en json writer
                using (JsonWriter writer = new JsonTextWriter(sw))
                {
                    // d'écrire la liste des livres dans le fichier
                    serializer.Serialize(writer, books);
                }
             }     
           }
        }
    }


