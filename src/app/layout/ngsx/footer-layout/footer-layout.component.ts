import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Injectable()
@Component({
  selector: 'ngsx-footer-layout',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './footer-layout.component.html',
  styleUrls: ['./footer-layout.component.scss']
})
export class FooterLayoutComponent {

}
