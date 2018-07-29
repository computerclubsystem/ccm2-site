import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartAndStopComponent } from './start-and-stop.component';

const routes: Routes = [
  { path: '', component: StartAndStopComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StartAndStopRoutingModule { }
