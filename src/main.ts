// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig) // appConfig is used for routing if the components are Native Angular  - non-standalone, used with NgModule
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app-routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]
});
