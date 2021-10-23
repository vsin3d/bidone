using Backend.Models;
using Backend.Services;
using Backend.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text.Json;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly ILogger<PersonController> _logger;
        private readonly IJsonService _jsonService;

        public PersonController(ILogger<PersonController> logger, IJsonService jsonService)
        {
            _logger = logger;
            _jsonService = jsonService;
        }

        [HttpPost]
        public async Task<ActionResult> SaveToJson([FromBody]Person person)
        {
            try
            {
                throw new Exception("Test excep.");
                string result = await _jsonService.WriteObject<Person>(person);
                return StatusCode(StatusCodes.Status200OK, JsonSerializer.Serialize(result));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, JsonSerializer.Serialize($"{MethodUtils.GetCurrentMethod()} : {ex.Message ?? ex.InnerException.Message}")); 
            }
        }
    }
}
