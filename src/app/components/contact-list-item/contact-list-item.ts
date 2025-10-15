import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { Router, RouterModule } from '@angular/router';
import { ContactDetailsPage } from "../../pages/contact-details-page/contact-details-page";
import Swal from 'sweetalert2';
import { Toast } from '../../utils/modals';

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {

  contact = input.required<Contact>();
  index = input.required<number>();
  router = inject(Router);
  contactService = inject(ContactsService)

  async markUnmarkFavorite(){
    if(this.contact()){
      const res = await this.contactService.markUnmarkFavorite(this.contact().id);
      if(res) this.contact().isFavorite = !this.contact().isFavorite;
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
        this.contactService.deleteContact(this.contact().id).then(res => {
          if (res) {
            Toast.fire({
              icon: "success",
              title: "Contacto eliminado"
            });
          }
        })
      }
    });
  }

}
