import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellingItemsComponent } from './selling-items.component';

const routes: Routes = [
  { path: '', component: SellingItemsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SellingItemsRoutingModule { }
