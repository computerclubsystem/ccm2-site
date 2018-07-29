import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitFilesComponent } from './ini-files.component';

const routes: Routes = [
  { path: '', component: InitFilesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IniFilesRoutingModule { }
