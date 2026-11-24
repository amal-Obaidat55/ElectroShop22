import { Component } from '@angular/core';

interface Product {
  name: string;
  desc: string;
  price: number;
  isAvailable : boolean;
  imgUrl:string;
}
@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] =
    [
      {
        name: "Laptop",
        desc: "High-performance laptop",
        price: 750,
        isAvailable :true,
        imgUrl:"images/laptop.jpeg"
      },
      {
        name: "Smartphone",
        desc: "Latest smartphone",
        price: 450,
        isAvailable :true,
        imgUrl:"images/smartphone.jpeg"
      },
      {
        name: "Headphones",
        desc: "Wireless headphones",
        price: 80,
        isAvailable :true,
        imgUrl:"images/headphone.jpeg"
      },
      {
        name: "Smart Watch",
        desc: "Smart fitness watch",
        price: 120,
        isAvailable :true,
        imgUrl:"images/watch.jpeg"
      },
      {
        name: "Keyboard",
        desc: "Mechanical keyboard",
        price: 45,
        isAvailable : false,
        imgUrl:"images/Keyboard.jpeg"
      },
    ]

     buyProduct(productName: string) {
    alert("You selected: " + productName);
  }

}
