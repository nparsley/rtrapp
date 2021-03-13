import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.css']
})
export class BurgersComponent implements OnInit {
  burger;

  burgers = [
    {
      id: 1,
      name: 'bbq bacon',
      description: 'bacon, american cheese, onions, pickles, and BBQ sauce',
      price: 13
    },

    {
      id: 2,
      name: 'swiss avocado',
      description: 'swiss cheese, avocado slices, and tomatoes',
      price: 11
    },

    {
      id: 3,
      name: 'blue cheese',
      description: 'blue cheese, fried onion strings, jalapenos and spicy ketchup',
      price: 12
    },

    {
      id: 4,
      name: 'cheese burger',
      description: 'american cheese, lettuce, tomatoes, onions, and pickles',
      price: 10
    }
  ];


  constructor(private cartservice: CartService, private route: ActivatedRoute) { }

  addBurgerToCart(burgers) {
    this.cartservice.addBurgerToCart(burgers);
    window.alert('Your burger has been added to the cart.');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const burgerIdFromRoute = Number(routeParams.get('burgerId'));

    this.burger = this.burgers.find(burger => burger.id === burgerIdFromRoute);
  }

}
