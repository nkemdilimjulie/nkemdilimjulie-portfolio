
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { appRoutes } from './app/app-routes';

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(appRoutes)]
// });

// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './app/app-routes';
import { ProjectsService } from './app/pages/projects/projects.service';
import { AboutService } from './app/pages/about/about.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
    ),
    ProjectsService,
    AboutService
  ]
}).catch(err => console.error(err));
