import { Component, inject, input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-contact-details-page',
  imports: [RouterModule],
  templateUrl: './contact-details-page.html',
  styleUrl: './contact-details-page.scss'

})
export class ContactDetailsPage implements OnInit {

  contactService = inject(ContactsService)
  idContact = input.required<string>()
  contactBack: Contact | undefined;

  async ngOnInit() {
    if (this.idContact()) {
      const res = await this.contactService.getContactById(this.idContact());
      if (res) this.contactBack = res;
    }
    console.log(this.idContact());
    
  }

  markUnmarkFavorite(){
    this.contactService.markUnmarkFavorite(this.contactBack!.id)
    this.contactBack!.isFavorite = !this.contactBack?.isFavorite
  }

}
