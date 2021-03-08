import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  burgerType = [
    {
      name: 'BBQ Bacon',
      description: 'bacon, american cheese, onions, pickles, and BBQ sauce',
      price: 13.00
    },
    {
      name: 'Swiss Avocado',
      description: 'swiss cheese, avocado slices, and tomatoes',
      price: 11.00
    },
    {
      name: 'Blue Cheese',
      description: 'blue cheese, fried onion strings, jalapenos and spicy ketchup',
      price: 12.00
    },
    {
      name: 'Cheese Burger',
      description: 'american cheese, lettuce, tomatoes, onions, and pickles',
      price: 10.00
    }
  ];
  cartBurger = [];

  constructor() { }

  ngOnInit(): void {
  }

}
