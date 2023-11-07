import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable, OnInit, Renderer2 } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Injectable()
@Component({
  standalone: true,
  selector: 'app-theming-tutor',
  imports: [SharedModule],
  templateUrl: './theming-tutor.component.html',
  styleUrls: ['./theming-tutor.component.scss']
})
export class ThemingTutorComponent implements OnInit {
  title = 'Theming Tutorial';
  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderer.addClass(this.document.body, 'light-theme');
  }
  changeThemes(themeName: string) {
    this.renderer.removeClass(this.document.body,'light-theme');
    this.renderer.removeClass(this.document.body,'dark-theme');
    this.renderer.removeClass(this.document.body,'orange-theme');
    if (themeName === 'light') {
      this.renderer.addClass(this.document.body,'light-theme');
    }
    if (themeName === 'dark') {
      this.renderer.addClass(this.document.body, 'dark-theme');
    }
    if (themeName === 'orange') {
      this.renderer.addClass(this.document.body, 'orange-theme');
    }
  }


}
