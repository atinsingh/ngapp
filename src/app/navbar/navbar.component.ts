import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

   navData = [
    { id: 1, title: 'Home', url: "/"},
    { id: 2, title: 'About Us', url: "/about-us"},
    { id: 3, title: 'Services', url: "/services"},
    { id: 4, title: 'Contact', url: "/contact-us"},
  ]

  mobileView = false;

}
