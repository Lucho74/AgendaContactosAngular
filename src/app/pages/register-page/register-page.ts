import { Component, Inject, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../services/users-service';
import Swal from 'sweetalert2';
import { Spinner } from '../../components/spinner/spinner';

@Component({
  selector: 'app-register-page',
  imports: [RouterModule, FormsModule, Spinner],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {
  
  errorService = false;
  errorRegisterForm = false;
  errorPasswords = false
  backRequest = false;

  userService = inject(UsersService);
  router = inject(Router)

  async registerUser(form: NgForm) {
    console.log(form.value)
    if (
      !form.value.firstName ||
      form.value.lastName ||
      !form.value.email ||
      !form.value.password ||
      !form.value.password2
    ) {
      this.errorRegisterForm = true;
      return;
    }
    if (form.value.password !== form.value.password2
    ){
      this.errorPasswords = true;
      return;
    }
    this.backRequest = true;
    const ok = await this.userService.registerUser({
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
    });
    this.backRequest = false;

    if (!ok) {
      this.errorService = true;
    }
    else {
      Swal.fire({
        title: "¡Registro exitoso!",
        showDenyButton: false,
        showCancelButton: false,
        confirmButtonColor: "var(--button-primary-color)",
        confirmButtonText: "Iniciar sesión",
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(["/login"]);
        }
      });
    }


  }


}
