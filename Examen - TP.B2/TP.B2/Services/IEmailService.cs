using System;
using System.Collections.Generic;
using TP.B2.Models;

namespace TP.B2.Services
{
    public interface IEmailService
    {
        event SentEventHandler Sent;

        void AddEmail(Email email);
        void SendAll();

        int Count { get; }
        List<Email> GetEmails();
    }
}
