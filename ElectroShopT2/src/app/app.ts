import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShopTask2');

  productName = signal("Wireless Headphones");
  productdescription = signal("Bluetooth Headphones");
  productPrice = signal(120);
  isAvailable = signal(true);

  cartName = signal("");
  cartQuantity = signal(0);
  cartPrice = signal<number>(0);
  total= signal<number>(0)
  receiveData(data: { name: string; quantity: number })
  {
    this.cartName.set(data.name);
    this.cartQuantity.set(data.quantity);
    this.cartPrice.set(this.productPrice());
    this.total.set(this.cartPrice()*this.cartQuantity())
    console.log(data);
  }
}
