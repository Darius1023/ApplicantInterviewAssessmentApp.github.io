using ApplicantAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.FileProviders;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicantDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection")));
//builder.Services.AddDbContex<ApplicantDbContext> = Dependency injection to ApplicantDbContext
//<ApplicantDbContext> = Data Type
//(options=>= Expression
//options.UseSqlServer = function whitch type of database to use
//(builder.Configuration.GetConnectionString("DevConnection"))) = Connection String
//Next is go to appsetting.json


var app = builder.Build();

app.UseCors(options =>
options.WithOrigins("http://localhost:3000") //create a connection to react front end
.AllowAnyMethod()
.AllowAnyHeader());

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(
        Path.Combine(builder.Environment.ContentRootPath, "Images")), //Directory
    RequestPath = "/Images"  //This is for image in questions.
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
