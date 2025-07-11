
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';



@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  imports: [NgFor],  // ✅ Add this line
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  title = 'My Projects';
  projects = [
    { title: 'Portfolio', url: 'https://github.com/nkemdilimjulie/nkemdilimjulie-portfolio' },
    { title: 'Product Review Frontend App', url: 'https://github.com/nkemdilimjulie/Product-Review-code' },
    { title: 'Product Review Backend App', url: 'https://github.com/nkemdilimjulie/Product-Review-Backend-Final-Project' },
    { title: 'World Weather App', url: 'https://github.com/nkemdilimjulie/weatherworld' },
    { title: 'Train-Up-A-Child App', url: 'https://github.com/nkemdilimjulie/Train-Up-A-Child-Frontend' } 
  ];

}
