import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterLayoutComponent } from '../footer-layout/footer-layout.component';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { NavLayoutComponent } from '../nav-layout/nav-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Injectable()
@Component({
  selector: 'ngsx-store-layout',
  standalone: true,
  imports: [
    CommonModule,

    // Shared Module
    SharedModule,

    // Ngsx Layout Component
    HeaderLayoutComponent,
    FooterLayoutComponent,
    NavLayoutComponent
  ],
  templateUrl: './store-layout.component.html',
  styleUrls: ['./store-layout.component.scss']
})
export class StoreLayoutComponent {

}
