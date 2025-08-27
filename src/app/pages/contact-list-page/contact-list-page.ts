import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';

@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule, ContactListItem],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage {
  contactos = ["Gonzalo","Lucho","Nico","Mateo"]
  logueado = true

  desloguear(){
    this.logueado = false;
  }

  loguear(){
    this.logueado = true;
  }



}
