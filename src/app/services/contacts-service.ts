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

    async editContact(contact:Contact){
    const res = await fetch(this.URL_Base+"/"+contact.id, 
      {
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer "+this.authService.token,
        },
        body: JSON.stringify(contact)
      });
    if(!res.ok) return;
    this.contacts = this.contacts.map(oldContact =>{
      if(oldContact.id === contact.id) return contact;
      return oldContact;
    })
    return contact;
  }

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
    this.contacts = this.contacts.filter(contact => contact.id !== id)
    return true;
  }

  async getContacts(search: string | any) {

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
      if(search){
        this.contacts = resJason.filter(contact => contact.firstName.toLowerCase().startsWith(search.toLowerCase()))
      }
      else {
        this.contacts = resJason
      }
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

  async markUnmarkFavorite(id: number | string) {
    const res = await fetch(this.URL_Base+"/"+id+"/favorite",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer " + this.authService.token,
        },
      });
    if (!res.ok) return;

    this.contacts = this.contacts.map(contact => {
      if(contact.id === id) {
        return {...contact, isFavorite: !contact.isFavorite};
      };
      return contact;
    });
    return true;

  }
}

