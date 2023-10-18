import {Component, Input} from '@angular/core';
import {AdvantagesType} from "../../types/advantages.type";

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent {
  @Input() advantage: AdvantagesType
  @Input() index: number

  constructor() {
    this.index = 0
    this.advantage = {
      header: '',
      article: '',
    }
  }

}
