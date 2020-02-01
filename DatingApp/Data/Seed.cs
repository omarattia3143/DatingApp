using System;
using System.Collections.Generic;
using System.IO;
using DatingApp.Models;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace DatingApp.Data
{
    public class Seed
    {
        private readonly DataContext _context;

        public Seed(DataContext context)
        {
            _context = context;
        }

        public void SeedUser()
        {
            try
            {
                var userData = File.ReadAllText(@"Data/UserSeedData.json");
                var users = JsonConvert.DeserializeObject<List<User>>(userData);

                if (users == null) return;
                foreach (var user in users)
                {
                    CreatePasswordHash("password", out var passwordHash, out var passwordSalt);

                    user.PasswordHash = passwordHash;
                    user.PasswordSalt = passwordSalt;
                    user.Username = user.Username.ToLower();

                    _context.Users.Add(user);
                }

                _context.SaveChanges();
            }
            catch (IOException e)
            {
                Console.WriteLine(e);
                throw;
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex);
                throw;
            }
        }
        
        private void CreatePasswordHash(string outsiderPassword, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(outsiderPassword));
            }
        }
    }
}