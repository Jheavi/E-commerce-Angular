import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/cartItem';
import { CartitemsService } from 'src/app/cartitems.service';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.scss']
})
export class CartModalComponent implements OnInit {

  cartItems$: Observable<CartItem[]> | undefined

  modalVisibility = this.cartItemsService.cartModalVisible

  constructor(private cartItemsService: CartitemsService) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartItemsService.cartItems$
    this.cartItemsService.getCartItems().subscribe()
  }

  closeModal () {
    this.cartItemsService.toggleModalVisibility(false)
  }
}
