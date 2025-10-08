import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  showRightBox = false;

  toggleRightBox() {
    this.showRightBox = !this.showRightBox;
  }

}
