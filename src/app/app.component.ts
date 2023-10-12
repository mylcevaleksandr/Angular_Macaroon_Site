import {Component} from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {ProductType} from "./types/products.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public phone: string
  public instagram: string
  public showGift: boolean

  constructor() {
    this.phone = "+375 (29) 368-98-68"
    this.instagram = "Мы в Instagram"
    this.showGift = true
  }

  public advantages: AdvantagesType[] = [
    {
      header: "Лучшие продукты",
      article: "Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители."
    },
    {
      header: "Много вкусов",
      article: "Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок."
    },
    {
      header: "Бисквитное тесто",
      article: "Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!"
    },
    {
      header: "Честный продукт",
      article: "Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г",
      cardCenter: " card-center"
    },
  ]

  public products: ProductType[] = [
    {
      image: "card1.png",
      header: "Макарун с малиной",
      amount: "1 шт.",
      price: "1,70 руб."
    }, {
      image: "card2.png",
      header: "Макарун с манго",
      amount: "1 шт.",
      price: "1,75 руб."
    }, {
      image: "card3.png",
      header: "Макарун с ванилью",
      amount: "1 шт.",
      price: "1,80 руб."
    }, {
      image: "card4.png",
      header: "Пирог с фисташками",
      amount: "1 шт.",
      price: "1,65 руб.",
      cardCenter: " card-center"
    },
  ]

  public formValues: { productTitle: string, name: string, phone: string } = {
    productTitle: "",
    name: "",
    phone: ""
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.productTitle = product.header.toUpperCase()
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
