using System;
using System.Collections.Generic;

namespace DemoJson
{
    public class Book
    {
        public string ISBN { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }

        public static List<Book> GetBooks()
        {
            return new List<Book>
            {
                new Book{ ISBN = "123", Title = "book 1", Author = "author 1"},
                new Book{ ISBN = "456", Title = "book 2", Author = "author 2"},
                new Book{ ISBN = "789", Title = "book 3", Author = "author 1"},
            };
        }
    }
}
