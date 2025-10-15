import { Component, inject } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { FormsModule } from '@angular/forms';
import { Spinner } from "../../components/spinner/spinner";

@Component({
  selector: 'app-fav-contact-list-page',
  imports: [ContactListItem, FormsModule, Spinner],
  templateUrl: './fav-contact-list-page.html',
  styleUrl: './fav-contact-list-page.scss'
})
export class FavContactListPage {

  contactsService = inject(ContactsService)
  noExistingContacts = false
  backRequest = false

async ngOnInit() {   
  this.backRequest = true
  await this.contactsService.getContacts("", true)
  this.backRequest = false

  
}


}
