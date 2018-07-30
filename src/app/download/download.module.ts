import { NgModule } from '@angular/core';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    DownloadRoutingModule,
    SharedModule
  ],
  declarations: [
    DownloadComponent
  ]
})
export class DownloadModule { }
