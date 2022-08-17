import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './app-features/about-me/about-me.component';
import { ContactComponent } from './app-features/contact/contact.component';
import { HomeComponent } from './app-features/home/home.component';
import { ProjectListComponent } from './app-features/project-list/project-list.component';
import { SidesComponent } from './app-features/sides/sides.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about-me', component: AboutMeComponent },
    {path: 'projects', component: ProjectListComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'sides', component: SidesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }