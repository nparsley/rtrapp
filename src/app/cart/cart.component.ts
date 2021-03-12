import { Component, OnInit } from '@angular/core';
import { CartService } from '../food/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartservice.getItems();

  constructor(private cartservice: CartService) { }


  ngOnInit(): void {
  }

}
