import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-top-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav-bar-top-layout.html',
  styleUrl: './nav-bar-top-layout.scss'
})
export class NavBarTopLayout {

}
