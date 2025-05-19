// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contacts',
//   standalone: true,
//   imports: [],
//   templateUrl: './contacts.component.html',
//   styleUrls: ['./contacts.component.css']
// })
// export class ContactsComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // for ngModel in form

@Component({
  selector: 'contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  emails: string[] = [
    'amchosen@yahoo.com',
    'amonline0707@yahoo.com'
  ];

  phoneNumbers: string[] = [
    '+4915780253047',
    
  ];

  linkedInUrl = 'https://www.linkedin.com/in/nkemdilim-julie-chime-13a755339/';
  XINGUrl = 'https://www.xing.com/profile/NkemdilimJulie_Chime/web_profiles';

  // Contact form model
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Handle form submission (log for now)
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message!');
    this.formData = { name: '', email: '', message: '' };
  }
}
