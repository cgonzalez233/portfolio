import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './app-features/about-me/about-me.component';
import { SidesComponent } from './app-features/sides/sides.component';
import { HomeComponent } from './app-features/home/home.component';
import { ContactComponent } from './app-features/contact/contact.component';
import { NavbarComponent } from './app-features/navbar/navbar.component';
import { ProjectListComponent } from './app-features/project-list/project-list.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SidesComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
