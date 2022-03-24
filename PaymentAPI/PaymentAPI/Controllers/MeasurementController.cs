using Microsoft.AspNetCore.Mvc;
using System;
using System.Text.Json;

namespace PaymentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MeasurementController : ControllerBase
    {
        [HttpGet]
        public ActionResult<Measurement> GetData()
        {
            string jsonData = System.IO.File.ReadAllText("db.json");
            Measurement measurement = JsonSerializer.Deserialize<Measurement>(jsonData);

            return measurement;
        }

        [HttpPut]
        public ActionResult<Measurement> PutMeasurement(Measurement measurement) //Task<IActionResult>
        {
            try
            {
                string jsonFile = JsonSerializer.Serialize(measurement);
                System.IO.File.WriteAllText("db.json", jsonFile);
            }
            catch (Exception ex)
            {
                throw;
            }

            return NoContent();
        }
    }
}