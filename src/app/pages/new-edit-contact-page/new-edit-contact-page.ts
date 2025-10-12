import { Component, inject, input, viewChild } from '@angular/core';
import { Contact, NewContact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-new-edit-contact-page',
  imports: [FormsModule, RouterModule],
  templateUrl: './new-edit-contact-page.html',
  styleUrl: './new-edit-contact-page.scss'
})
export class NewEditContactPage {
  // contactsService = inject(ContactsService)

  // createContact(form: any) {

  //   const newContact: NewContact = {
  //     firstName: form.firstName,
  //     lastName: form.lastName,
  //     address: form.address,
  //     email: form.email,
  //     number: form.number,
  //     company: form.company,
  //     description: form.description,
  //     image: form.image
  //   }
  //   this.contactsService.createContact(newContact)
  // }

  contactService = inject(ContactsService);
  router = inject(Router)
  errorEnBack = false;
  idContact = input<string>();
  contactoBack:Contact | undefined = undefined;
  form = viewChild<NgForm>("newContactForm");
  solicitudABackEnCurso = false;
  
  async ngOnInit() {
    console.log(this.idContact());
    
    if(this.idContact()){
      const contacto:Contact|null = await this.contactService.getContactById(this.idContact()!);
      if(contacto){
        this.contactoBack = contacto;
        this.form()?.setValue({
          address: contacto.address,
          company: contacto.company,
          email: contacto.email,
          firstName:contacto.firstName,
          image:contacto.image,
          isFavorite:contacto.isFavorite,
          lastName: contacto.lastName,
          number: contacto.number
        })
      }
    }
  }

  async handleFormSubmission(form:NgForm){
    this.errorEnBack = false;
    const nuevoContacto: NewContact ={
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      email: form.value.email,
      image: form.value.image,
      number: form.value.number,
      company: form.value.company,
      isFavorite: form.value.isFavorite
    }

    this.solicitudABackEnCurso = true;
    let res;
    if(this.idContact()){
      res = await this.contactService.editContact({...nuevoContacto,id:this.contactoBack!.id});
    } else {
      res = await this.contactService.createContact(nuevoContacto);
    }
    this.solicitudABackEnCurso = false;

    if(!res) {
      this.errorEnBack = true;
      return
    };
    
    this.router.navigate(["/"]);
  }

}
