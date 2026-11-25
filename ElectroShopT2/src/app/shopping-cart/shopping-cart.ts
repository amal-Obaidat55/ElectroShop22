import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: false,
  styleUrl: './shopping-cart.css',
  templateUrl: './shopping-cart.html',
})
export class ShoppingCart {
  @Input() productName = "";
  @Input() productQuantity = 0;
  @Input() productPrice = 0;
  @Input() total = 0;
}
