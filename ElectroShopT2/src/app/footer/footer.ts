import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  storeName = "ElectroShop";

  storeAddress = "Irbid, Jordan";

  contactEmail = "info@electroshop.com";

  copyright = "All Rights Reserved © 2026";
}
