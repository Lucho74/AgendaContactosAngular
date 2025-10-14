import { Component, inject, input, viewChild } from '@angular/core';
import { Contact, NewContact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Spinner } from '../../components/spinner/spinner';
import { concatAll } from 'rxjs';


@Component({
  selector: 'app-new-edit-contact-page',
  imports: [FormsModule, RouterModule, Spinner],
  templateUrl: './new-edit-contact-page.html',
  styleUrl: './new-edit-contact-page.scss'
})
export class NewEditContactPage {

  contactService = inject(ContactsService);
  router = inject(Router)
  errorBack = false;
  idContact = input<string>();
  contactBack:Contact | undefined = undefined;
  form = viewChild<NgForm>("newContactForm");
  backRequest = false;
  img: string = "";
  imgURL = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png";
  
  async ngOnInit() {
    console.log(this.idContact());
    
    if(this.idContact()){
      const contact:Contact|null = await this.contactService.getContactById(this.idContact()!);
      if(contact){
        this.contactBack = contact;
        this.form()?.setValue({
          firstName:contact.firstName,
          lastName: contact.lastName,
          company: contact.company,
          number: contact.number,
          email: contact.email,
          address: contact.address,
          image: contact.image,
        })
      }
    }
  }

  async handleFormSubmission(form:NgForm){
    this.errorBack = false;


    const newContact: NewContact ={
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavorite: false
    }

    this.backRequest = true;
    let res;

    if(this.idContact()){
      res = await this.contactService.editContact({...newContact,id:this.contactBack!.id});
    } else {
      res = await this.contactService.createContact(newContact);
    }
    this.backRequest = false;

    if(!res) {
      this.errorBack = true;
      return
    };
    
    this.router.navigate(["/"]);
  }

}
