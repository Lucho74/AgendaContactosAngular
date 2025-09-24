import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule, ContactListItem, FormsModule, CommonModule],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage {

  contactsService = inject(ContactsService)

  addContact = false

  showAddContact() {
    this.addContact = true
    console.log('click')
  }
  hiddenAddContact() {
    this.addContact = false
  }





}
