import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewContact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-add-contact-page',
  imports: [RouterModule, FormsModule],
  templateUrl: './add-contact-page.html',
  styleUrl: './add-contact-page.scss'
})
export class AddContactPage {

  contactsService = inject(ContactsService)

  createContact(form: any) {

    const newContact: NewContact = {
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      number: form.number,
      company: form.company,
      description: form.description,
      image: form.image
    }
    this.contactsService.createContact(newContact)
  }
}