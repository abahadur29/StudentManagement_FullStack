import { Component } from '@angular/core';
import { StudentService } from '../../services/student';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email = '';
  password = '';

  constructor(private service: StudentService, private router: Router) {}

  register() {
    this.service.register({ email: this.email, password: this.password }).subscribe({
      next: () => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      },
      error: (err) => alert('Registration Failed')
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}