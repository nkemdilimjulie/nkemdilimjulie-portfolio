import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
// import { appRoutes } from './app-routes';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
