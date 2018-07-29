import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftCompletionComponent } from './shift-completion.component';

const routes: Routes = [
  { path: '', component: ShiftCompletionComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShiftCompletionRoutingModule { }
