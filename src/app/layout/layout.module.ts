import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgsxModule } from './ngsx/ngsx.module';


@Injectable()
@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Ngsx Module
    NgsxModule,
  ],
  exports: [
    // Allow Ngsx Module Available in Whole Project.
    NgsxModule
  ]
})
export class LayoutModule { }
