import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { ThemingTutorComponent } from './examples/theming-tutor/theming-tutor.component';
import { LayoutModule } from './layout/layout.module';
import { FolderStructureComponent } from './examples/folder-structure/folder-structure.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,

    //
    SharedModule,

    // example theming tutorial
    ThemingTutorComponent,
    FolderStructureComponent,

    // Layout Module
    LayoutModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
