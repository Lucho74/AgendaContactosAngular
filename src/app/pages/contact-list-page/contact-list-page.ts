import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-list-page',
  imports: [RouterModule],
  templateUrl: './contact-list-page.html',
  styleUrl: './contact-list-page.scss'
})
export class ContactListPage {
  contactos = ["Gonzalo","Lucho","Nico","Mateo"]
  logueado = true



}
