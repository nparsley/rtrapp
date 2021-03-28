import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { min } from 'rxjs/operators';
import { CartService, MenuItem } from '../food/cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() state: any;
  // cartState$ = this.cartservice.state$;
  //

  items = this.cartservice.getItems();
  checkoutForm = this.formbuilder.group({
    name: '',
    phone: ''
  });
  item;
  deleteItems;


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

// rxjs ---------------------
  addItemToCart(item: MenuItem) {
    this.cartservice.addCartMenuItem(item);
  }

  remove(item: MenuItem) {
    this.cartservice.removeCartMenuItem(item);
  }

  // -------------------------

  ngOnInit(): void {

  }

}
