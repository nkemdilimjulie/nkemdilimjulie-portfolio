import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

}

// import { Component, OnInit } from '@angular/core';
// import { AboutService } from './about.service';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-about',
//   standalone: true,  // <- this tells Angular it's standalone
//   imports: [FormsModule],
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })
// export class AboutComponent implements OnInit {
//   aboutMe: string = '';
//   techStack: string = '';
//   editMode: boolean = false;

//   constructor(private aboutService: AboutService) {}

// ngOnInit(): void {
//   this.aboutMe = localStorage.getItem('aboutMe') || this.aboutService.getAbout();
//   this.techStack = localStorage.getItem('techStack') || this.aboutService.getTech();
// }


//   toggleEdit(): void {
//     this.editMode = !this.editMode;
//   }

//   saveChanges(): void {
//   this.aboutService.updateAbout(this.aboutMe);
//   this.aboutService.updateTech(this.techStack);

//   // Persist to localStorage (optional)
//   localStorage.setItem('aboutMe', this.aboutMe);
//   localStorage.setItem('techStack', this.techStack);

//   this.toggleEdit();
// }

//   }

