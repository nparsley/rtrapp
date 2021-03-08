import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  sideType = [
    {
      name: 'Sweet Potato fries',
      description: 'baked and served with spicy ketchup',
      price: 5.00
    },
    {
      name: 'Fried Onion rings',
      description: 'deep-fried with a side of ranch	',
      price: 3.00
    },
    {
      name: 'Salad',
      description: 'greens, tomatoes, croutons, and cucumbers	',
      price: 6.00
    },
    {
      name: 'Wings',
      description: 'served with celery and carrots',
      price: 7.00
    }
  ];
  cartSides = [];

  constructor() { }

  ngOnInit(): void {
  }

}
