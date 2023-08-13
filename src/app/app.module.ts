import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NameComponent } from './name/name.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { TecnologiesComponent } from './tecnologies/tecnologies.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NameComponent,
    AboutMeComponent,
    TecnologiesComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
