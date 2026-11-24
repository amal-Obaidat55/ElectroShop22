import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  selectedPage = "Home";
  change(page: string)
  {
        console.log(page);

    this.selectedPage = page;
  }
}
