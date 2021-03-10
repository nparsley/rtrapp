import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';

@Component({
  selector: 'app-sides',
  templateUrl: './sides.component.html',
  styleUrls: ['./sides.component.css']
})
export class SidesComponent implements OnInit {

  sweetPotato = {
    name: 'sweet potato fries',
    description: 'baked and served with spicy ketchup',
    price: 5
  }

  friedOnion = {
    name: 'fried onion rings',
    description: 'deep-fried with a side of ranch',
    price: 6
  }

  salad = {
    name: 'salad',
    description: 'greens, tomatoes, croutons, and cucumbers',
    price: 3
  }

  wings = {
    name: 'wings',
    description: 'served with celery and carrots',
    price: 7
  }

  constructor(private addtocart: AddToCartService) { }

  addToCart(/* product */) {
    this.addtocart.addToCart(/* product */);
    window.alert('Your product has been added to the cart.');
  }

  ngOnInit(): void {
  }

}
