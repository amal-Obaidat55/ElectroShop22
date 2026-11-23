import { Component, signal } from '@angular/core';

interface Product{
    name : string ;
    price : number ; 
    description : string ;
}

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('ElectroShop');

  storeName : string = "ElectroShop";
  storeDescription : string = "Your favorite electronics store";
  storeAddress : string = "Amman, Jordan";
  totalProducts : number = 12;
  isStoreOpen : boolean = true;
  currency : string = "USD";

  productNames : string[] = ["Laptop","Smartphone", "Headphones","Smart Watch","Keyboard"];
  productPrices : number[] = [750 , 450 , 80 , 120 , 45];

  message : string ="";
  
  featuredProduct : Product=
  
    {
      name : "Tablet" ,
      price : 120 ,
      description : "#########" 
    }
  ;

  discountPercentage : number = 0.1;
  price : number = 750;
  discountTotal : number = 0 ;
  total : number = 0;


  totalProductPrice : number = 0 ;
  count : number = 0;
  max : number = this.productPrices[0];
  min : number = this.productPrices[0];

  
  constructor()
  {
    if(this.isStoreOpen)
    {
      this.message="We are Open";
    }
    else{
      this.message="We are Close";
    }

    
    if(this.discountPercentage > 0)
    {
      this.discountTotal = this.price * this.discountPercentage;
      this.total = this.price - this.discountTotal;
    }

    for(let i=0; i<this.productPrices.length ;i++)
    {
      this.totalProductPrice += this.productPrices[i];
      this.count++;
    }

    for(let i=0; i<this.productPrices.length ;i++)
    {
      if(this.max > this.productPrices[i])
      {
        this.max = this.productPrices[i];
      } 
    }
    for(let i=0; i<this.productPrices.length ;i++)
    {
      if(this.min < this.productPrices[i])
      {
        this.min = this.productPrices[i];
      } 
    }
    
  }
}
