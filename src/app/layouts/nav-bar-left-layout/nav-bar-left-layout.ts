import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-left-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav-bar-left-layout.html',
  styleUrl: './nav-bar-left-layout.scss'
})
export class NavBarLeftLayout {

}
