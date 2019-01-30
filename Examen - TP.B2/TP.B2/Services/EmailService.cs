using System;
using System.Collections;
using System.Collections.Generic;
using TP.B2.Models;

namespace TP.B2.Services
{
    public delegate void SentEventHandler(Email email);

    public class EmailService : IEmailService
    {
        private Queue<Email> _queue = new Queue<Email>();

        public int Count => _queue.Count;

        public event SentEventHandler Sent;

        public void AddEmail(Email email)
        {
            _queue.Enqueue(email);
        }

        public List<Email> GetEmails()
        {
            var list = new List<Email>();
            while (_queue.Count > 0)
            {
                var email = _queue.Dequeue();
                list.Add(email);
            }
            return list;
        }

        public void SendAll()
        {
            while(_queue.Count > 0)
            {
                var email = _queue.Dequeue();
                Sent?.Invoke(email);
            }
        }
    }
}
