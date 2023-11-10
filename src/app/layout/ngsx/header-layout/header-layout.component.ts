import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

@Injectable()
@Component({
  selector: 'ngsx-header-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent {

}
