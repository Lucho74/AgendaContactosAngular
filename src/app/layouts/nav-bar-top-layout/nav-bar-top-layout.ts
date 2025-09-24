import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-nav-bar-top-layout',
  imports: [RouterOutlet],
  templateUrl: './nav-bar-top-layout.html',
  styleUrl: './nav-bar-top-layout.scss'
})
export class NavBarTopLayout {
  authService = inject(AuthService)

  

}
