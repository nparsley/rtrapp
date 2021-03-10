import { Component, OnInit } from '@angular/core';
import { CartService } from '../food/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  msg: string;




  clickEvent() {
    this.msg = 'helllllo';


    return this.msg;

  }

  constructor(private cartservice: CartService) { }

  // addToCart(/* product */) {
  //   this.addtocart.addToCart(/* product */);
  //   window.alert('Your product has been added to the cart.');
  // }

  ngOnInit(): void {
  }

}
