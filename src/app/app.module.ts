
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app-routes';

// If you've already created these components inside `pages/`
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { ProjectsService } from './pages/projects/projects.service';
import { AboutService } from './pages/about/about.service';
import { TechStackComponent } from './pages/tech-stack/tech-stack.component';
// import { SendMessageComponent } from '.pages/send-message/send-message.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProjectsComponent,
    ContactsComponent,
    TechStackComponent,
    // SendMessageComponent 
  ],
  providers: [
    ProjectsService, AboutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
