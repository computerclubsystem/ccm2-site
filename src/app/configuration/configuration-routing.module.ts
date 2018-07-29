import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
    children: [
      { path: 'initial', loadChildren: './initial/initial.module#InitialModule' },
      {
        path: 'computers-and-ip-addresses',
        loadChildren: './computers-and-ip-addresses/computers-and-ip-addresses.module#ComputersAndIpAddressesModule'
      },
      { path: 'prices', loadChildren: './prices/prices.module#PricesModule' },
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'language-and-font', loadChildren: './language-and-font/language-and-font.module#LanguageAndFontModule' },
      { path: 'customer-cards', loadChildren: './customer-cards/customer-cards.module#CustomerCardsModule' },
      { path: 'other', loadChildren: './other/other.module#OtherModule' },
      { path: 'bar', loadChildren: './bar/bar.module#BarModule' },
      { path: 'ini-files', loadChildren: './ini-files/ini-files.module#IniFilesModule' },
      { path: '', redirectTo: 'initial', pathMatch: 'full' }
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
export class ConfigurationRoutingModule { }
