import {Component, OnInit} from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {ProductType} from "./types/products.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public advantages: AdvantagesType[] = []
  public products: ProductType[] = []
  public phone: string
  public instagram: string
  public showGift: boolean

  constructor(private productService: ProductService,
              public cartService: CartService) {
    this.phone = "+375 (29) 368-98-68"
    this.instagram = "Мы в Instagram"
    this.showGift = true
  }

  ngOnInit() {
    this.products = this.productService.getProducts('products')as ProductType[]
    this.advantages=this.productService.getProducts('advantages')as AdvantagesType[]
  }


  public formValues: { productTitle: string, name: string, phone: string } = {
    productTitle: "",
    name: "",
    phone: ""
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(header: string, target: HTMLElement): void {
    alert(header + " добавлен в корзину.")
    console.log(this.cartService.getAmount())
    // this.scrollTo(target)
    // this.formValues.productTitle = header
  }

  public createOrder(): void {

    if (!this.formValues.productTitle) {
      alert("choose a macaroon");
      return;
    }
    if (!this.formValues.name) {
      alert("fill name");
      return;
    }
    if (!this.formValues.phone) {
      alert("fill phone");
      return;
    }
    alert("Thank You!");

    this.formValues = {
      productTitle: "",
      name: "",
      phone: ""
    }
  }

}
