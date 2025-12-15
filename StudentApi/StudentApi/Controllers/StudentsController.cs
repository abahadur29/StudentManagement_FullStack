using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentApi.Data;
using StudentApi.Models;

namespace StudentApi.Controllers
{
    [Authorize] 
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentDbContext _ctx;

        public StudentsController(StudentDbContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            return Ok(await _ctx.Students.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> AddStudent(Student student)
        {
            _ctx.Students.Add(student);
            await _ctx.SaveChangesAsync();
            return Ok(student);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateStudent(int id, Student updatedStudent)
        {
            if (id != updatedStudent.Id)
            {
                return BadRequest("ID mismatch");
            }

            var existing = await _ctx.Students.FindAsync(id);
            if (existing == null)
            {
                return NotFound();
            }

            existing.Name = updatedStudent.Name;
            existing.Class = updatedStudent.Class;
            existing.Section = updatedStudent.Section;

            await _ctx.SaveChangesAsync();

            return Ok(existing);
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var student = await _ctx.Students.FindAsync(id);
            if (student == null) return NotFound();

            _ctx.Students.Remove(student);
            await _ctx.SaveChangesAsync();
            return Ok();
        }
    }
}