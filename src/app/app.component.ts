import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './pages/back-to-top/back-to-top.component'; 
// import { appRoutes } from './app-routes';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
