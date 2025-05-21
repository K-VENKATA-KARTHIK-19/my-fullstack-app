import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor() { }
 orders = [
    {
      id: 'ORD-1001',
      customer: 'Alice Johnson',
      date: '2025-05-10',
      status: 'Shipped',
      total: '$150.00',
      image: 'assets/Wireless_Headphones.jpeg'
    },
    {
      id: 'ORD-1002',
      customer: 'Bob Smith',
      date: '2025-05-12',
      status: 'Processing',
      total: '$230.00',
      image: 'assets/Running_Shoes.jpg'
    },
    {
      id: 'ORD-1003',
      customer: 'Carol Williams',
      date: '2025-05-14',
      status: 'Delivered',
      total: '$89.99',
      image: 'assets/Smart_Watch.jpeg'
    }
  ];
  ngOnInit(): void {
    this.orders
  }

}
