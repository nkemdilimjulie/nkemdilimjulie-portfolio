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
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'; // for ngModel in form
// import emailjs from 'emailjs-com';

// @Component({
//   selector: 'contacts',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './contacts.component.html',
//   styleUrls: ['./contacts.component.css']
// })
// export class ContactsComponent {
//   emails: string[] = [
//     'amchosen@yahoo.com',
//     'amonline0707@yahoo.com'
//   ];

//   phoneNumbers: string[] = [
//     '+4915780253047',
    
//   ];

  // linkedInUrl = 'https://www.linkedin.com/in/nkemdilim-julie-chime-13a755339/';
  // XINGUrl = 'https://www.xing.com/profile/NkemdilimJulie_Chime/web_profiles';

//   // Contact form model
//   formData = {
//     name: '',
//     email: '',
//     message: ''
//   };

// //   submitForm() {
// //     // Handle form submission (log for now)
// //     console.log('Form submitted:', this.formData);
// //     alert('Thank you for your message!');
// //     this.formData = { name: '', email: '', message: '' };
// //   }
// // }

//   submitForm() {
//     const serviceID = 'service_5vqs5Ik';
//     const templateID = 'template_shrjrqb';
//     const userID = 'FQ1KKZM0vDrkKVtlU';

//    emailjs.send(serviceID, templateID, {
//       from_name: this.formData.name,
//       from_email: this.formData.email,
//       message: this.formData.message
//     }, userID)
//     .then(() => {
//       alert('Message sent successfully!');
//       this.formData = { name: '', email: '', message: '' };
//     }, (error) => {
//       console.error('Failed to send message:', error);
//       alert('Failed to send. Please try again.');
//     });
//   }
// }

// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import emailjs from 'emailjs-com';

// @Component({
//   selector: 'app-contacts',
//   standalone: true,
//   imports: [CommonModule, FormsModule], // add any needed modules
//   templateUrl: './contacts.component.html',
//   styleUrls: ['./contacts.component.css']
// })
// export class ContactsComponent {
//   formData = {
//     title: '',
//     name: '',
//     message: ''
//   };

//   submitForm() {
//     const serviceID = 'service_5vqs5Ik';
//     const templateID = 'template_shrjrqb';
//     const userID = 'FQ1KKZM0vDrkKVtlU';

//     emailjs.send(serviceID, templateID, {
//       from_title: this.formData.title,
//       from_name: this.formData.name,
//       message: this.formData.message
//     }, userID)
//     .then(() => {
//       alert('Message sent successfully!');
//       this.formData = {title: '', name: '',  message: '' };
//     }, (error) => {
//       console.error('Failed to send message:', error);
//       alert('Failed to send. Please try again.');
//     });
//   }
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  emails: string[] = ['amchosen@yahoo.com'];
  phoneNumbers: string[] = ['+4915780253047'];
  linkedInUrl = 'https://www.linkedin.com/in/nkemdilim-julie-chime-13a755339/';
  XINGUrl = 'https://www.xing.com/profile/NkemdilimJulie_Chime/web_profiles';
  formData = {
    title: '',
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    const serviceID = 'service_5vqs5Ik';
    const templateID = 'template_shrjrqb';
    const userID = 'FQ1KKZM0vDrkKVtlU';

    emailjs.send(serviceID, templateID, {
      from_title: this.formData.title,
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message
    }, userID)
    .then(() => {
      alert('Message sent successfully!');
      this.formData = { title: '', name: '', email: '', message: '' };
    }, (error) => {
      console.error('Failed to send message:', error);
      alert('Failed to send. Please try again.');
    });
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
}
