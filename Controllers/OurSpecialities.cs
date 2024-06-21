using Microsoft.AspNetCore.Mvc;

using StellarHospitalWebsite.Models;

using System.Diagnostics;

namespace StellarHospitalWebsite.Controllers
{
    public class OurSpecialities : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public OurSpecialities(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Neurosciences()
        {
            return View("~/Views/OurSpecialities/Neurosciences.cshtml");
        }
    }
}
