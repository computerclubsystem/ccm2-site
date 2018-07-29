import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    RouterModule,
    SharedModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
