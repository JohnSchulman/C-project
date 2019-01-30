using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using TP.B2.Models;

namespace TP.B2.Services
{
    public class JsonBackupService : IBackupService
    {
        public IEmailService EmailService { get; set; }

        public JsonBackupService(IEmailService emailService)
        {
            EmailService = emailService;
        }

        public void Read()
        {
            if (File.Exists("data.json"))
            {
                var json = File.ReadAllText("data.json");
                var data = JsonConvert.DeserializeObject<List<Email>>(json);
                foreach (var item in data)
                {
                    EmailService.AddEmail(item);
                }
            }
        }

        public void Save()
        {
            var data = EmailService.GetEmails();
            var json = JsonConvert.SerializeObject(data);
            File.WriteAllText("data.json", json);
        }
    }
}
