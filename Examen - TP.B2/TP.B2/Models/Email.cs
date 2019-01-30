using System;
namespace TP.B2.Models
{
    [Serializable]
    public class Email
    {
        public string Destinataire { get; set; }
        public string Emetteur { get; set; }
        public string Message { get; set; }
        public DateTime Date { get; set; }

        public override string ToString()
        {
            return $"[{Date.ToString()}] From: {Emetteur} – To : {Destinataire} – message : {Message}";
        }
    }
}
