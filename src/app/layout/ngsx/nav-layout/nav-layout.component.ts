import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Injectable()
@Component({
  selector: 'ngsx-nav-layout',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule],
  templateUrl: './nav-layout.component.html',
  styleUrls: ['./nav-layout.component.scss']
})
export class NavLayoutComponent {

}
