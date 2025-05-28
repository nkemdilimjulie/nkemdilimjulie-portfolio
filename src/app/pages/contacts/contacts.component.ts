
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
  GitHubUrl = 'https://github.com/nkemdilimjulie/';
  DockerHubUrl = 'https://hub.docker.com/repositories/julie0707'
  formData = {
    title: '',
    name: '',
    email: '',
    message: ''
  };

  
}
