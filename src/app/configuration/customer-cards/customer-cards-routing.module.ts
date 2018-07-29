import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerCardsComponent } from './customer-cards.component';

const routes: Routes = [
  { path: '', component: CustomerCardsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerCardsRoutingModule { }
