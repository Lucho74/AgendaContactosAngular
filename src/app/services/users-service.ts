import { inject, Injectable, OnInit} from '@angular/core';
import { User, NewUser } from '../interfaces/user';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  authService = inject(AuthService)
  
  Users: User[] = []
  NewUsers: NewUser[] = []
  

  createUser(newUser: NewUser){
    this.NewUsers.push(newUser)
    }
  
  loginUser(user: User){
    console.log(user)
    this.Users.push(user)
  }
  
  async registerUser(registerUser: NewUser){
    const res = await fetch('https://agenda-api.somee.com/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.authService.token,
      },
      body: JSON.stringify(registerUser),
    });
    return res.ok;
    
  }

  
}

