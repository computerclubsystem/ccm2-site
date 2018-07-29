import { NgModule } from '@angular/core';

import { IniFilesRoutingModule } from './ini-files-routing.module';
import { InitFilesComponent } from './ini-files.component';

@NgModule({
  imports: [
    IniFilesRoutingModule
  ],
  declarations: [
    InitFilesComponent
  ]
})
export class IniFilesModule { }
