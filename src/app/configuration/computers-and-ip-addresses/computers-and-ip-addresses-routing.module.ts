import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompoutersAndIpAddressesComponent } from './computers-and-ip-addresses.component';

const routes: Routes = [
  { path: '', component: CompoutersAndIpAddressesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompoutersAndIpAddressesRoutingModule { }
