import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  storeName = "Electro Shop";
  message = "Welcome To our shop ";
  slogan = "Everything you need in one place";
  
}
