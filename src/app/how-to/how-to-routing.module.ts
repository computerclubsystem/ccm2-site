import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowToComponent } from './how-to.component';

const routes: Routes = [
  {
    path: '',
    component: HowToComponent,
    children: [
      { path: 'start-and-stop', loadChildren: './start-and-stop/start-and-stop.module#StartAndStopModule' },
      { path: 'selling-items', loadChildren: './selling-items/selling-items.module#SellingItemsModule' },
      { path: 'shift-completion', loadChildren: './shift-completion/shift-completion.module#ShiftCompletionModule' },
      { path: '', redirectTo: 'start-and-stop', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HowToRoutingModule { }
