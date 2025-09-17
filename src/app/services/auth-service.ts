import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: null | string = localStorage.getItem("token");
  router = inject(Router);

  async login(loginData: Auth) {
    const res = await fetch('https://agenda-api.somee.com/api/authentication/authenticate',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData),
      }
    )
    if (res.ok) {
      const resText = await res.text()
      this.token = resText;
      localStorage.setItem("token", this.token);
    }
    return res.ok;
  }

  logout() {
    localStorage.removeItem("token");
    this.token = null;
    this.router.navigate(["/login"]);
  }
}
