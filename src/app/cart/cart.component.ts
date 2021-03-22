import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { min } from 'rxjs/operators';
import { CartService } from '../food/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartservice.getItems();
  checkoutForm = this.formbuilder.group({
    name: '',
    phone: ''
  });
  item;
  deleteItems;
  checkoutTotal = this.formbuilder.group({
    subTotal: '',
    tax: '',
    orderTotal: ''
  });


  constructor(
      private cartservice: CartService,
      private route: ActivatedRoute,
      private formbuilder: FormBuilder
    ) { }

  onSubmit() {
    this.items = this.cartservice.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

/*   deleteItem() {
    this.deleteItems = this.cartservice.removeCartItem(this.items);
    console.warn('delete');
  }
 */
  removeCartItem(item) {
    console.log(item);
    this.items.splice(item, 1);
    console.log('item was removed');
  }

  onCheckout() {
    this.checkoutTotal.reset();
  }

  emptyCart() {
    // if ()
  }

  priceTotal() {
    // bind price and total for each item * quantity displayed

    // add cumulative row totals to subtotals

    // multiply tax

    // add for a total
  }


  ngOnInit(): void {

  }

}
