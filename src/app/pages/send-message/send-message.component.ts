import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

import emailjs from 'emailjs-com';

@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css'
})
export class SendMessageComponent {

  formData = {
    title: '',
    name: '',
    email: '',
    message: ''
  };

  messageSent = false;
  errorSending = false;
  isSubmitting = false;

  constructor() {}

  ngOnInit(): void {
    emailjs.init(environment.emailJs.publicKey);
  }

  submitForm() {
    this.isSubmitting = true;
    this.messageSent = false;
    this.errorSending = false;

    emailjs.send(
      environment.emailJs.serviceID,
      environment.emailJs.templateID,
      {
        from_title: this.formData.title,
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: this.formData.message
      },
      environment.emailJs.publicKey
    ).then(() => {
      this.messageSent = true;
      this.errorSending = false;
      this.formData = { title: '', name: '', email: '', message: '' };
      this.isSubmitting = false;
    }).catch((error) => {
      console.error('Failed to send message:', error);
      this.messageSent = false;
      this.errorSending = true;
      this.isSubmitting = false;
    });
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
  }
}




// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import emailjs from 'emailjs-com';

// @Component({
// selector: 'app-send-message',
// standalone: true,
// imports: [CommonModule, FormsModule],
// templateUrl: './send-message.component.html',
// styleUrl: './send-message.component.css'
// })
// export class SendMessageComponent implements OnInit {
// // formData holds input values
// formData = {
// from_title: '',
// from_name: '',
// from_email: '',
// message: ''
// };

// constructor() {}

// ngOnInit(): void {
// // ✅ Initialize EmailJS with your actual public key
// emailjs.init('FQ1KKZM0vDrkKVtlU'); 
// }

// submitForm(e: Event) {
// e.preventDefault(); // prevent page reload

// emailjs.send('service_5vqs5lk', 'template_shrjrqb', this.formData)
// .then(() => {
// alert('Message sent successfully!');
// this.formData = { from_title: '', from_name: '', from_email: '', message: '' };
// }, (error) => {
// console.error('Failed to send message:', error);
// alert('Failed to send. Please try again.');
// });
// }
// }
