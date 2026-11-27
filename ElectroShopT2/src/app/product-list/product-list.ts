import { Component } from '@angular/core';

interface Product {
  name: string;
  desc: string;
  price: number;
  isAvailable: boolean;
  imgUrl: string;
}
interface Product2 {
  id: number;
  name: string;
  category: string;
  price: number;
  discount: number;
  isAvailable: boolean;
  imgUrl: string;
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
        isAvailable: true,
        imgUrl: "images/laptop.jpeg"
      },
      {
        name: "Smartphone",
        desc: "Latest smartphone",
        price: 450,
        isAvailable: true,
        imgUrl: "images/smartphone.jpeg"
      },
      {
        name: "Headphones",
        desc: "Wireless headphones",
        price: 80,
        isAvailable: true,
        imgUrl: "images/headphone.jpeg"
      },
      {
        name: "Smart Watch",
        desc: "Smart fitness watch",
        price: 120,
        isAvailable: true,
        imgUrl: "images/watch.jpeg"
      },
      {
        name: "Keyboard",
        desc: "Mechanical keyboard",
        price: 45,
        isAvailable: false,
        imgUrl: "images/Keyboard.jpeg"
      },
    ]

  products2: Product2[] =
    [
      {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 850,
        isAvailable: true,
        imgUrl: "images/laptop.jpeg",
        discount: 15
      },
      {
        id: 2,
        name: "Smartphone",
        category: "Electronics",
        price: 450,
        isAvailable: true,
        imgUrl: "images/smartphone.jpeg",
        discount: 0
      },
      {
        id: 3,
        name: "Headphones",
        category: "Accessories",
        price: 120,
        isAvailable: false,
        imgUrl: "images/headphone.jpeg",
        discount: 10
      },
      {
        id: 4,
        name: "Smart Watch",
        category: "Accessories",
        price: 180,
        isAvailable: true,
        imgUrl: "images/headphone.jpeg",
        discount: 20
      },
      {
        id: 5,
        name: "Tablet",
        category: "Electronics",
        price: 300,
        isAvailable: false,
        imgUrl: "images/headphone.jpeg",
        discount: 5
      },
      {
        id: 6,
        name: "Keyboard",
        category: "Accessories",
        price: 65,
        isAvailable: true,
        imgUrl: "images/headphone.jpeg",
        discount: 0
      },
      {
        id: 7,
        name: "Gaming Mouse",
        category: "Accessories",
        price: 45,
        isAvailable: true,
        imgUrl: "images/headphone.jpeg",
        discount: 10
      },
      {
        id: 8,
        name: "Monitor",
        category: "Electronics",
        price: 220,
        isAvailable: false,
        imgUrl: "images/headphone.jpeg",
        discount: 0
      },
    ]
    filteredProducts: Product2[] = this.products2;
    message ="";
  buyProduct(productName: string) {
    alert("You selected: " + productName);
  }
  showAll(){
    
    this.filteredProducts=this.products2.filter(product=>(product.category === "Electronics" || product.category === "Accessories"))
    this.message = "All Products"
  }
  showElec(){
    this.filteredProducts=this.products2.filter(product=>(product.category === "Electronics"))
    this.message = "Electronics only"
  }
  showAccess(){
    this.filteredProducts=this.products2.filter(product=>(product.category === "Accessories"))
    this.message = "Accessories only"
  }

}
