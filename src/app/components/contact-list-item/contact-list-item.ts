import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { RouterModule } from '@angular/router';
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

  contactsService = inject(ContactsService)

  markUnmarkFavorite() {
    if(this.contact().isFavorite){
      this.contact().isFavorite = false
    }
    else {
      this.contact().isFavorite = true
    }
    this.contactsService.markUnmarkFavorite(this.contact().id)
  }

}
