import { inject, Injectable } from '@angular/core';
import { Contact, NewContact } from '../interfaces/contact';
import { AuthService } from './auth-service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  readonly URL_Base = "https:/agenda-api.somee.com/api/contacts"
  contacts: Contact[] = []
  authService = inject(AuthService)

  async createContact(newContact: NewContact) {
    const res = await fetch(this.URL_Base,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.authService.token,
        },
        body: JSON.stringify(newContact)
      });
    if (!res.ok) return;
    const resContact: Contact = await res.json();
    this.contacts.push(resContact);
    return resContact;
  }

  editContact() { }

  async deleteContact(id: number) {
    const res = await fetch(this.URL_Base + "/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + this.authService.token
        }
      }
    )
    if (!res.ok) {
      return
    }
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }

  async getContacts() {
    const res = await fetch(this.URL_Base,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.authService.token
        }
      }
    )
    if (res.ok) {
      const resJason: Contact[] = await res.json()
      this.contacts = resJason
    }
  }

  async getContactById(id: string | number) {
    const res = await fetch(this.URL_Base + "/" + id,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + this.authService.token
        }
      }
    )
    if (res.ok) {
      const resJason: Contact = await res.json()
      return resJason
    }
    return null
  }

  async markUnmarkFavorite(id: number) {
    const res = await fetch(this.URL_Base+"/"+id+"/favorite",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.authService.token,
        },
      });
    if (!res.ok) return;

  }
}

