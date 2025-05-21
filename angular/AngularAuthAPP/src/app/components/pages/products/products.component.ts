import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
 products = [
    {
      id: 'P-1001',
      name: 'Wireless Headphones',
      price: '$99.99',
      category: 'Electronics',
      image: 'assets/Wireless_Headphones.jpeg'
    },
    {
      id: 'P-1002',
      name: 'Running Shoes',
      price: '$120.00',
      category: 'Footwear',
      image: 'assets/Running_Shoes.jpg'
    },
    {
      id: 'P-1003',
      name: 'Smart Watch',
      price: '$149.50',
      category: 'Gadgets',
      image: 'assets/Smart_Watch.jpeg'
    },
    {
      id: 'P-1004',
      name: 'Backpack',
      price: '$65.75',
      category: 'Accessories',
      image: 'assets/Backpack.jpeg'
    }
  ];
  ngOnInit(): void {
  }

}
