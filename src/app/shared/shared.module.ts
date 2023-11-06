import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faEdit,
  faTrash,
  faTimes,
  faCaretUp,
  faCaretDown,
  faExclamationTriangle,
  faFilter,
  faTasks,
  faCheck,
  faSquare,
  faLanguage,
  faPaintBrush,
  faLightbulb,
  faWindowMaximize,
  faStream,
  faBook,
  faUserCircle,
  faAsterisk,
  faBars,
  faPowerOff,
  faCog,
  faPlayCircle,
  faRocket
} from '@fortawesome/free-solid-svg-icons';
import {
  faMediumM,
  faGithub,
  faTwitter,
  faInstagram,
  faFacebook,
  faYoutube,
  faWhatsapp,
  faTelegram
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule
  ]
})
export class SharedModule {
  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(
      faBars,
      faUserCircle,
      faPowerOff,
      faCog,
      faPlayCircle,
      faRocket,
      faGithub,
      faMediumM,
      faTwitter,
      faInstagram,
      faFacebook,
      faYoutube,
      faWhatsapp,
      faTelegram,
      faPlus,
      faEdit,
      faTrash,
      faTimes,
      faCaretUp,
      faCaretDown,
      faExclamationTriangle,
      faFilter,
      faTasks,
      faCheck,
      faSquare,
      faLanguage,
      faPaintBrush,
      faLightbulb,
      faWindowMaximize,
      faStream,
      faBook,
      faUserCircle,
      faAsterisk,
    );
  }
 }
