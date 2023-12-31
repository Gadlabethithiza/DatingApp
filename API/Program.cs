using API.Extensions;
using API.Middleware;

var builder = WebApplication.CreateBuilder(args);


//Using Extensions to have a clean code
builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.UseMiddleware<ExceptionMiddleware>();
app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200")); //This will allow Angular app to call this api

app.UseAuthentication(); //Student have valid ID
app.UseAuthorization(); // IS the student above 18 ?

app.MapControllers();
app.Run();
