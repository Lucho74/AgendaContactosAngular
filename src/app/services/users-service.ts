import { Injectable } from '@angular/core';
import { User, NewUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  Users: User[] = []
  NewUsers: NewUser[] = []

  createUser(newUser:NewUser){
    this.NewUsers.push(newUser)
    }
  
  loginUser(user: User){
    
  }
  
}

