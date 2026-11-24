import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  productName : string = "Laptop";
  productDescription : string = "High-performance laptop";
  productPrice : number = 750;
  productImage : string = "images/laptop.jpeg";
  quantity : number = 10;
  isAvailable = true;
  discountPercentage : number = 10;
}
