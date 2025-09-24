import { Component, inject, input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-contact-details-page',
  imports: [RouterModule],
  templateUrl: './contact-details-page.html',
  styleUrl: './contact-details-page.scss'

})
export class ContactDetailsPage implements OnChanges {

  contactsService = inject(ContactsService)
  idContact = input<string>()
  contactBack: Contact | undefined = undefined;

  async ngOnChanges() {
    if(this.idContact()){
      const contact:Contact | null = await this.contactsService.getContactById(this.idContact()!)
      if(contact){
        this.contactBack = contact
      }
    }
  }

}
