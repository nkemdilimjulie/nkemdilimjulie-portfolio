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

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  title = "List of Links to my Projects";
  projects = [
    "https://github.com/nkemdilimjulie/Product-Review-code",
    "https://github.com/nkemdilimjulie/weatherworld"
  ];
}
