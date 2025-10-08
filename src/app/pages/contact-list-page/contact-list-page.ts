import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contact } from '../../interfaces/contact';
import { ActionsService } from '../../services/actions-service';

@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule, ContactListItem, FormsModule, CommonModule],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage implements OnInit {
  
  actionsService = inject(ActionsService)
  contactsService = inject(ContactsService)
  addContact = false
  contacts: Contact[] | void= []

async ngOnInit() {
  this.contacts = await this.contactsService.getContacts()
}

  showAddContact() {
    this.addContact = true
    console.log('click')
  }
  hiddenAddContact() {
    this.addContact = false
  }

  // showRightBox = false;
  
  showRightBox = this.actionsService.showRightBox
  toggleRightBox() {
    this.actionsService.toggleRightBox();
    this.showRightBox = this.actionsService.showRightBox
    console.log(this.showRightBox);
    
  }






  






}
