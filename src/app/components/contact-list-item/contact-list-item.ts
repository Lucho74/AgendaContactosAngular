import { Component, input } from '@angular/core';

@Component({
  selector: 'app-contact-list-item',
  imports: [],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  contacto = input.required<string>();
  index = input.required<number>();
  esFavorito = input<boolean>();

}
