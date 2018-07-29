import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LanguageAndFontComponent } from './language-and-font.component';

const routes: Routes = [
  { path: '', component: LanguageAndFontComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LanguageAndFontRoutingModule { }
