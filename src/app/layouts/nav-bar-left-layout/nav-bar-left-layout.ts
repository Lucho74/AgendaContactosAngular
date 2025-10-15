import { Component, inject } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import Swal from 'sweetalert2';
import { UsersService } from '../../services/users-service';

@Component({
  selector: 'app-nav-bar-left-layout',
  imports: [RouterModule],
  templateUrl: './nav-bar-left-layout.html',
  styleUrl: './nav-bar-left-layout.scss'
})
export class NavBarLeftLayout {
  authService = inject(AuthService)

  showLogoutModal() {
    Swal.fire({
      title: "¿Seguro que quiere cerrar sesión?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "var(--nav-bar-left-color)",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Cerrar sesión",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.authService.logout()
      }
    });
  }

  menuHidden = false;
  toggleMenu() {
    this.menuHidden = !this.menuHidden;

  }
}



