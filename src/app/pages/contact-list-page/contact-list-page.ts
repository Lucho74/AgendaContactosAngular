import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../../interfaces/contact';


@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule, ContactListItem, FormsModule, CommonModule],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage implements OnInit {


  contactsService = inject(ContactsService)
  contacts: Contact[] | void= []

async ngOnInit() {   
  this.contacts = await this.contactsService.getContacts()
}


async search(text: string){
  this.contacts = await this.contactsService.getContacts(text)

}

async favoriteContacts(){

}





}
