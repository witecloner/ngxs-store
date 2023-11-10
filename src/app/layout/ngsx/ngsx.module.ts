import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreLayoutComponent } from './store-layout/store-layout.component';

@Injectable()
@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    //Store-Layout Component
    StoreLayoutComponent
  ],
  exports: [
    //Allow Store-Layout Component Available in whole project.
    StoreLayoutComponent
  ]
})
export class NgsxModule { }
