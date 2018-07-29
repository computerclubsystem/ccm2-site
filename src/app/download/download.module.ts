import { NgModule } from '@angular/core';

import { DownloadRoutingModule } from './download-routing.module';
import { DownloadComponent } from './download.component';

@NgModule({
  imports: [
    DownloadRoutingModule
  ],
  declarations: [
    DownloadComponent
  ]
})
export class DownloadModule { }
