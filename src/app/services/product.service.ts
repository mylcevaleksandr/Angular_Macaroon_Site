import {Injectable} from '@angular/core';
import {ProductType} from "../types/products.type";
import {AdvantagesType} from "../types/advantages.type";

@Injectable()
export class ProductService {

  constructor() {
  }
  // Тут пытылся съимитировать работу запроса на сервер без any ts ругается. Что можно тут прописать вместо any?
  getProducts(params:string): ProductType[]|AdvantagesType[]|any{
   if (params==='products'){
     return [{
       image: "card1.png",
       header: "Макарун с малиной",
       amount: "1 шт.",
       price: 1.70
     }, {
       image: "card2.png",
       header: "Макарун с манго",
       amount: "1 шт.",
       price: 1.75
     }, {
       image: "card3.png",
       header: "Макарун с ванилью",
       amount: "1 шт.",
       price: 1.80
     }, {
       image: "card4.png",
       header: "Пирог с фисташками",
       amount: "1 шт.",
       price: 1.65
     },]
   }else if(params==='advantages'){
     return [
       {
         header: "Лучшие продукты",
         article: "Мы честно готовим макаруны только из натуральных и качественных продуктов."
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
       },
     ]
   }
  }
}
