import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-contact-details-page',
  imports: [RouterModule],
  templateUrl: './contact-details-page.html',
  styleUrl: './contact-details-page.scss'

})
export class ContactDetailsPage {
  contactsService = inject(ContactsService)
  id: string = ""

  constructor(private route: ActivatedRoute) {}
  onInit() {
    this.id = this.route.snapshot.paramMap.get("id")!;
  }
  
  contact = input.required<Contact>()

}
