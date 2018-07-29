import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'info', loadChildren: './info/info.module#InfoModule' },
  { path: 'download', loadChildren: './download/download.module#DownloadModule' },
  { path: 'configuration', loadChildren: './configuration/configuration.module#ConfigurationModule' },
  { path: 'how-to', loadChildren: './how-to/how-to.module#HowToModule' },
  { path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule' },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
