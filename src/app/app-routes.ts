

import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
import { SendMessageComponent } from './pages/send-message/send-message.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'tech-stack', component: TechStackComponent },
  { path: 'send-message', component: SendMessageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Optional: Wildcard route for 404
];
