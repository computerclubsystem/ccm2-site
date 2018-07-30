import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    // MaterialModule
    HttpClientModule
  ],
  exports: [
    // MaterialModule
  ]
})
export class SharedModule { }
