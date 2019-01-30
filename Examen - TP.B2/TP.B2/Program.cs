using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using TP.B2.Models;
using TP.B2.Services;

namespace TP.B2
{
    class Program
    {
        private static IEmailService _emailService = new EmailService();
        private static IBackupService _backupService = new JsonBackupService(_emailService);

        static void Main(string[] args)
        {
            _emailService.Sent += _emailService_Sent;
            ReadFile();

            bool exit = false;
            while (!exit)
            {
                Console.WriteLine("1: ecrire un mail");
                Console.WriteLine("2: envoyer les mails");
                Console.WriteLine("3: quitter");

                var input = Console.ReadLine();
                switch (input)
                {
                    case "1":
                        EcrireMail();
                        break;
                    case "2":
                        EnvoyerMails();
                        break;
                    case "3":
                        exit = true;
                        Exit();
                        break;
                    default:
                        Console.WriteLine("j'ai pas compris!");
                        break;
                }
            }
        }

        static void _emailService_Sent(Models.Email email)
        {
            Console.WriteLine($"ENVOYER: {email.ToString()}");
        }



        private static void EcrireMail()
        {
            Console.WriteLine("destinataire: ");
            var dest = Console.ReadLine();

            Console.WriteLine("emetteur: ");
            var em = Console.ReadLine();

            Console.WriteLine("message: ");
            var message = Console.ReadLine();

            var email = new Email
            {
                Date = DateTime.Now,
                Destinataire = dest,
                Emetteur = em,
                Message = message
            };

            _emailService.AddEmail(email);
        }

        private static void EnvoyerMails()
        {
            _emailService.SendAll();
        }

        private static void Exit()
        {
            if(_emailService.Count > 0)
            {
                Save();
            }
        }

        private static void Save()
        {
            _backupService.Save();
        }

        private static void ReadFile()
        {
            _backupService.Read();
        }
    }
}
