import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { Router, RouterModule } from '@angular/router';
import { ContactDetailsPage } from "../../pages/contact-details-page/contact-details-page";

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

    async deleteContact(){
    if(this.contact()){
    const res = await this.contactService.deleteContact(this.contact().id);
    if(res) this.router.navigate(['/']);
    }
  }

}
