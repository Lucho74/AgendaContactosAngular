import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users-service';

@Component({
  selector: 'app-register-page',
  imports: [RouterModule, FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {

  isLoading = false;
  errorRegisterService = false;
  errorRegisterForm = false;

  userService = inject(UsersService);

  async registerUser(form: NgForm) {
    console.log(form.value)
    if (
      !form.value.firstName ||
      form.value.lastName ||
      !form.value.email ||
      !form.value.password ||
      !form.value.password2 ||
      form.value.password !== form.value.password2
    ) {
      this.errorRegisterForm = true;
      return;
    }
    this.isLoading = true;
    const ok = await this.userService.registerUser({
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
    });
    this.isLoading = false;

    if (!ok) {
      this.errorRegisterService = true;
    }

  }


}
