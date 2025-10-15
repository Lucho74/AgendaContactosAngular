import { Component, inject, input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import Swal from 'sweetalert2';
import { Toast } from '../../utils/modals';
import { Spinner } from "../../components/spinner/spinner";

@Component({
  selector: 'app-contact-details-page',
  imports: [RouterModule, Spinner],
  templateUrl: './contact-details-page.html',
  styleUrl: './contact-details-page.scss'

})
export class ContactDetailsPage implements OnInit {

  contactService = inject(ContactsService)
  idContact = input.required<string>()
  contactBack: Contact | undefined;
  router = inject(Router);
  backRequest = false

  async ngOnInit() {
    this.backRequest = true
    if (this.idContact()) {
      const res = await this.contactService.getContactById(this.idContact());
      if (res) this.contactBack = res;
    }
    this.backRequest = false
  }

  async markUnmarkFavorite(){
    if(this.contactBack){
      const res = await this.contactService.markUnmarkFavorite(this.contactBack.id);
      if(res) this.contactBack.isFavorite = !this.contactBack.isFavorite;
    }
  }

  showDeleteModal() {
      Swal.fire({
        title: "Borrar contacto",
        text: "El borrado es permanente. ¿Está seguro?",
        showDenyButton: false,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "red",
        cancelButtonColor: "var(--nav-bar-left-color)",
        cancelButtonText: "Cancelar",
        confirmButtonText: `Borrar definitivamente`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.contactService.deleteContact(this.contactBack!.id).then(res => {
            if (res) {
              Toast.fire({
                icon: "success",
                title: "Contacto eliminado"
              });
            }
          })
          this.router.navigate(["/"])
        }
      });
    }
}
