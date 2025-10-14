import { Component, inject, input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
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
  router = inject(Router);

  async ngOnInit() {
    if (this.idContact()) {
      const res = await this.contactService.getContactById(this.idContact());
      if (res) this.contactBack = res;
    }
    
  }

  async markUnmarkFavorite(){
    if(this.contactBack){
      const res = await this.contactService.markUnmarkFavorite(this.contactBack.id);
      if(res) this.contactBack.isFavorite = !this.contactBack.isFavorite;
    }
  }

  async deleteContact(){
    if(this.contactBack){
    const res = await this.contactService.deleteContact(this.contactBack!.id);
    if(res) this.router.navigate(['/']);
    }
  }
}
