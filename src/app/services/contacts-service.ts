import { Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts:Contact[] = []

  createContact(newContact: NewContact){
    const contact:Contact = {
      ...newContact,
      id: Math.random(),
      isFavorite: false
    }
    this.contacts.push(contact)
  }
  editContact(){}
  deleteContact(id: number){
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
  getContacts(){}

}
