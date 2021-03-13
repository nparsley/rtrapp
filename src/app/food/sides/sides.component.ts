import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {
  side;

    sides = [
    {
      id: 1,
      name: 'sweet potato fries',
      description: 'baked and served with spicy ketchup',
      price: 5
    },

    {
      id: 2,
      name: 'fried onion rings',
      description: 'deep-fried with a side of ranch',
      price: 6
    },

    {
      id: 3,
      name: 'salad',
      description: 'greens, tomatoes, croutons, and cucumbers',
      price: 3
    },

    {
      id: 4,
      name: 'wings',
      description: 'served with celery and carrots',
      price: 7
    }
  ];

  constructor(private cartservice: CartService, private route: ActivatedRoute) { }

  addSideToCart(side) {
    this.cartservice.addSideToCart(side);
    window.alert('Your side has been added to the cart.');
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const sideIdFromRoute = Number(routeParams.get('sideId'));

    this.side = this.sides.find(side => side.id === sideIdFromRoute);
  }

}
