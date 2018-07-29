import { NgModule } from '@angular/core';

import { CustomerCardsRoutingModule } from './customer-cards-routing.module';
import { CustomerCardsComponent } from './customer-cards.component';

@NgModule({
  imports: [
    CustomerCardsRoutingModule
  ],
  declarations: [
    CustomerCardsComponent
  ]
})
export class CustomerCardsModule { }
