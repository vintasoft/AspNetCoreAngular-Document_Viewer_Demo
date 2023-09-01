// register the evaluation license for VintaSoft Imaging .NET SDK
Vintasoft.Imaging.ImagingGlobalSettings.Register("REG_USER", "REG_EMAIL", "EXPIRATION_DATE", "REG_CODE");

var builder = WebApplication.CreateBuilder(args);

// set the custom font program controller as the default font program controller
AspNetCoreAngularDocumentViewerDemo.CustomFontProgramsController.SetDefaultFontProgramsController();

// specify that VintaSoft Imaging .NET SDK should use SkiaSharp library for drawing of 2D graphics
Vintasoft.Imaging.Drawing.SkiaSharp.SkiaSharpDrawingFactory.SetAsDefault();

// Add services to the container.

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromSeconds(10);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

builder.Services.AddControllersWithViews().AddNewtonsoftJson();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseSession();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
