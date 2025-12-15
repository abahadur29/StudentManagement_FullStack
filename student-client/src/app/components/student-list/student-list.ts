import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StudentService } from '../../services/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList implements OnInit {
  students: any[] = [];
  newStudent: any = { id: 0, name: '', class: '', section: '' };

  constructor(private service: StudentService, private cd: ChangeDetectorRef, private router: Router) {}

  ngOnInit() {
    this.loadStudents();
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loadStudents() {
    this.service.getStudents().subscribe({
      next: (data) => {
        this.students = data;
        console.log('Loaded Students:', data); 
        this.cd.detectChanges();
      },
      error: (err) => alert('Cannot load students. Are you logged in?')
    });
  }

  save() {
    if(!this.newStudent.name) return alert('Name is required');

    console.log('Attempting to save:', this.newStudent);

    if (this.newStudent.id === 0) {
      this.service.addStudent(this.newStudent).subscribe({
        next: () => {
          alert('Added Successfully');
          this.resetForm();
          this.loadStudents();
        },
        error: (err) => console.error('Add Failed:', err)
      });
    } else {
      this.service.updateStudent(this.newStudent.id, this.newStudent).subscribe({
        next: () => {
          alert('Updated Successfully');
          this.resetForm();
          this.loadStudents();
        },
        error: (err) => {
          console.error('Update Failed:', err);
          alert('Update Failed! Check Console (F12) for details.');
        }
      });
    }
  }

  edit(s: any) {
    this.newStudent = {
      id: s.id || s.Id,
      name: s.name || s.Name,
      class: s.class || s.Class,
      section: s.section || s.Section
    };
    console.log('Editing Student:', this.newStudent);
  }

  delete(id: number) {
    if(confirm('Are you sure you want to delete this student?')) {
      this.service.deleteStudent(id).subscribe(() => {
        this.loadStudents();
      });
    }
  }

  resetForm() {
    this.newStudent = { id: 0, name: '', class: '', section: '' };
  }
}