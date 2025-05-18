// import { Component } from '@angular/core';
// // import { ProjectsService } from './projects.service';

// @Component({
//   selector: 'projects',
//   standalone: true,
//   imports: [],
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
// export class ProjectsComponent {
//     title = "List of Links to my Projects";
//     // projects = ["https://github.com/nkemdilimjulie/Product-Review-code", "https://github.com/nkemdilimjulie/weatherworld"];
    
// }

// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'projects',
//   standalone: true,
//   imports: [RouterModule],
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
// export class ProjectsComponent {
//   title = "List of Links to my Projects";
//   projects = [
//     "https://github.com/nkemdilimjulie/Product-Review-code",
//     "https://github.com/nkemdilimjulie/weatherworld"
//   ];
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

// @Component({
//   selector: 'app-projects',
//   standalone: true,  // ✅ Important: Only needed if you're using standalone components
//   imports: [CommonModule], // ✅ Add CommonModule here
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
// export class ProjectsComponent {
//   projects = [
//     { title: 'Project 1', description: 'Description 1' },
//     { title: 'Project 2', description: 'Description 2' },
//   ];
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.css']
// })
// export class ProjectsComponent {
//   title = 'My Projects'; // ✅ Add this inside the class

//   projects = [
//     { title: 'Portfolio', url: 'https://github.com/nkemdilimjulie/nkemdilimjulie-portfolio' },
//     { title: 'Product Review App', url: 'https://github.com/nkemdilimjulie/Product-Review-code' }
//   ];
// }

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
    { title: 'Product Review App', url: 'https://github.com/nkemdilimjulie/Product-Review-code' }
  ];
}
