import { Component, inject, OnChanges, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../../interfaces/contact';
import { Spinner } from "../../components/spinner/spinner";
import { TestRequest } from '@angular/common/http/testing';


@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule, ContactListItem, FormsModule, CommonModule, Spinner],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage implements OnInit {


  contactsService = inject(ContactsService)
  backRequest = false
  contacts: Contact[] = []

async ngOnInit() {   
  this.backRequest = true
  await this.contactsService.getContacts()
  this.contacts = this.contactsService.contacts
  this.backRequest = false

}


// async search(text: string){
//   await this.contactsService.getContacts(text)

// }
search(text: string){
  this.contacts = this.contactsService.contacts.filter(
          contact => contact.firstName.toLowerCase().startsWith(text.toLowerCase()))
  

}





}
