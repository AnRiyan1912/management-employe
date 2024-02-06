import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login(): void {
    if (this.email === 'andre@gmail.com' && this.password === 'password') {
      this.router.navigate(['/']);
    } else {
      this.error = 'Invalid email or password';
    }
    console.log(this.email);
  }
}
