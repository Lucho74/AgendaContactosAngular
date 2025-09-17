import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../services/users-service';
import { FormUser } from '../../interfaces/user';

@Component({
  selector: 'app-register-page',
  imports: [RouterModule, FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {

  usersService = inject(UsersService)

  registerUser(form: any) {
    const user: FormUser = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
      password2: form.password2,
    }
    this.usersService.registerUser(user)
  }

}
