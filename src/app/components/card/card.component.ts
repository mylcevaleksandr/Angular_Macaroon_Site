import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/products.type";
import {CartService} from "../../services/cart-service";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card: ProductType
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>()

  constructor(public cartService: CartService) {
    this.card = {
      amount: "", cardCenter: "", header: "", image: "", price: 0
    }
  }

  addProductToCart() {
    // console.log(this.cartService.)
    this.cartService.setAmount(this.card.price)
    this.addToCartEvent.emit(this.card.header);
  }
}
