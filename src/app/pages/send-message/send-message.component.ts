import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';


  
  
@Component({
  selector: 'app-send-message',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './send-message.component.html',
  styleUrl: './send-message.component.css'
})
export class SendMessageComponent {
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


