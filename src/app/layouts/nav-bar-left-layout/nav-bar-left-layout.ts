import { Component, inject } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-nav-bar-left-layout',
  imports: [ RouterModule ],
  templateUrl: './nav-bar-left-layout.html',
  styleUrl: './nav-bar-left-layout.scss'
})
export class NavBarLeftLayout {
  authService = inject(AuthService)
}
