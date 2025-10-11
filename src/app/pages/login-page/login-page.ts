import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users-service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service';
import { Spinner } from '../../components/spinner/spinner';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule, CommonModule, Spinner],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

  authService = inject(AuthService)
  router = inject(Router)

  error = false;
  backRequest = false;

  async login(form: NgForm) {
    console.log(form.value)
    this.error = false;

    if (
      !form.value.email ||
      !form.value.password
      ) {
      this.error = true;
      return
    }
    this.backRequest = true;
    const ok = await this.authService.login(form.value);
    this.backRequest = false;

    if (!ok) {
      this.error = true;
    } 
    else {
      this.router.navigate(["/"]);
    }


  }
}
