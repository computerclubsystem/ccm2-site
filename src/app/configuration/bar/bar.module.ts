import { NgModule } from '@angular/core';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';

@NgModule({
  imports: [
    BarRoutingModule
  ],
  declarations: [
    BarComponent
  ]
})
export class BarModule { }
