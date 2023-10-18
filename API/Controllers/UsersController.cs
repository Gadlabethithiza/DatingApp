using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers;

[Authorize]
//[AllowAnonymous] //This can
public class UsersController : BaseApiController
{
   private readonly DataContext _context;
   public UsersController(DataContext context)
   {
     _context =  context;
   }   

   [AllowAnonymous] //This can
   [HttpGet]
   public async Task<ActionResult<IEnumerable<AppUser>>> GetAllUsers()
   {
       var users = await _context.Users.ToListAsync();
       return users;
   }

   [HttpGet("{id}")]
   public async Task<ActionResult<AppUser>> GetUser(int id)
   {
        return await _context.Users.FindAsync(id);
   }

 /*   public async Task<ActionResult> Login(string username, string password)
   {
      var user = _context.Users.Find(username);


      return await user;
   } */

}
