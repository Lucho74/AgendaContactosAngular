import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {

  usersService = inject(UsersService)

  loginUser(form:any){
    const user: User = {
      email: form.email,
      password: form.password
    }
    this.usersService.loginUser(user)
  }

  
}
