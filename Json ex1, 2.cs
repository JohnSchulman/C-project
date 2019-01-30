   // Jeremy's code
   
   static void Main(string[] args)
        {
            var books = Book.GetBooks();
            var json = JsonConvert.SerializeObject(books);
            File.WriteAllText("data.json", json);
            Console.WriteLine("OK");

			// lie le contenu du data.json en string 
			// le string est le file.readalltexts
            var data = JArray.Parse(File.ReadAllText("data.json"));
			// la méthode Children() est pour les éléments en paramètres CAD .ElementAt(1) ["Title"] = le premier titre
            var title = data.Children().ElementAt(1)["Title"];
			// affiche au console le titre
            Console.WriteLine(title);


            Console.ReadLine();
        }
		
	// my code
		
		 public static void Json()
        {
			// on appel la methode Getbooks sur la class et on le met dans une variable
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