import { NgModule } from '@angular/core';
import { PricesRoutingModule } from './prices-routing.module';
import { PricesComponent } from './prices.component';

@NgModule({
  imports: [
    PricesRoutingModule
  ],
  declarations: [
    PricesComponent
  ]
})
export class PricesModule { }
