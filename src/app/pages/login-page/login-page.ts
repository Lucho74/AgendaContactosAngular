import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users-service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

  authService = inject(AuthService)
  router = inject(Router)

  errorLogin = false;

  async login(form: NgForm) {
    console.log(form.value)
    this.errorLogin = false;
    if (!form.value.email || !form.value.password) {
      this.errorLogin = true;
      return
    }
    const loginResult = await this.authService.login(form.value);
    if (loginResult) this.router.navigate(["/"]);
    this.errorLogin = true;


  }
}
