import {Injectable} from '@angular/core';
import {ProductService} from "./product.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private amount: number = 0
  private counter: number = 0

  constructor(private productService: ProductService) {
    console.log(this.productService)
  }

  public setAmount(value: number) {
    this.counter++
    this.amount = this.amount + value;
  }

  public getCounter() {
    return this.counter
  }

  public getAmount() {
    return this.amount.toFixed(2)
  }
}
