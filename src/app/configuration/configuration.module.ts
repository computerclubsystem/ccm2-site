import { NgModule } from '@angular/core';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';

@NgModule({
  imports: [
    ConfigurationRoutingModule
  ],
  declarations: [
    ConfigurationComponent
  ]
})
export class ConfigurationModule { }
