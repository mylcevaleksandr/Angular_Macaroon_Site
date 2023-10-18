import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {CardComponent} from './components/card/card.component';
import {ProductService} from "./services/product.service";
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {RublePipe} from './pipes/ruble.pipe';
import { ButtonDirDirective } from './directives/button-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AdvantagesComponent,
    RublePipe,
    ButtonDirDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
