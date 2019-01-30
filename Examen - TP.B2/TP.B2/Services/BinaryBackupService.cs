using System;
using System.Collections.Generic;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;
using TP.B2.Models;

namespace TP.B2.Services
{
    public class BinaryBackupService : IBackupService
    {
        public IEmailService EmailService { get; set; }

        public BinaryBackupService(IEmailService emailService)
        {
            EmailService = emailService;
        }

        public void Read()
        {
            var formatter = new BinaryFormatter();
            if (File.Exists("data.dat"))
            {
                using (var fs = new FileStream("data.dat", FileMode.Open))
                {
                    var data = formatter.Deserialize(fs) as List<Email>;
                    foreach (var item in data)
                    {
                        EmailService.AddEmail(item);
                    }
                }
            }
        }

        public void Save()
        {
            var data = EmailService.GetEmails();
            var formatter = new BinaryFormatter();
            using (var fs = new FileStream("data.dat", FileMode.Create))
            {
                formatter.Serialize(fs, data);
            }
        }
    }
}
