import { Routes } from '@angular/router';

export const routes: Routes = [];
// src/app/app-routes.ts

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  // Optional: Wildcard route for 404
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
