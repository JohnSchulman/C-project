using System;
using System.IO;
using System.Linq;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace DemoJson
{
    class Program
    {
        static void Main(string[] args)
        {
            var books = Book.GetBooks();
            var json = JsonConvert.SerializeObject(books);
            File.WriteAllText("data.json", json);
            Console.WriteLine("OK");

            var data = JArray.Parse(File.ReadAllText("data.json"));
            var title = data.Children().ElementAt(1)["Title"];
            Console.WriteLine(title);


            Console.ReadLine();
        }
    }
}
