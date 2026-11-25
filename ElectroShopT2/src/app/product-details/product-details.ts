import { Component, signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  
  productImage: string = "images/laptop.jpeg";
  quantity = signal<number>(1);
  isAvailable = true;
  discountPercentage: number = 10;

  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() available: boolean = false;
  @Input() description: string = "";

  @Output() cartData = new EventEmitter<{name: string; quantity: number;}>();


  increase() {
    this.quantity.update(x => x + 1);
  }

  decrease() {

    if (this.quantity() > 1) {
      this.quantity.update(x => x - 1);
    }

  }
  addToCart() {
    this.cartData.emit({ name: this.name, quantity: this.quantity()});

  }

}
