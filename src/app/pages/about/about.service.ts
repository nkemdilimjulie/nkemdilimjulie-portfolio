import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutText: string = `Hello,\n\nMy name is Julie.\n\n In my youthful days, I had always imagined how a computer could do all that it did. This motivated me to pursue a degree in Computer Science. I learnt a lot about data handling and computer operations using FORTRAN, Pascal and COBOL languages.\n\nMoreover, I have a passion for teaching. By this I mean, I enjoy bringing a novice into knowledge. This inspired me to establish a Computer Training Center, where I trained individuals on using MS Word and Excel for their office work.\n\nToday, many organizations rely on Python for data management and backend operations. So, I took a delight to learn Python Programming. I am now a Python Backend Developer. I have been able to develop many projects - View Projects.\n\nI have a quick comprehension. During our team’s final project preparation, we needed to present our work as a Frontend. I opted to take that part because I like learning new features. So, I had a self-study on JavaScript with React tools for two weeks which I used to present our final project. Secondly, I needed to have a website for my Portfolio, in order to have a change of technology stack for my frontend, I decided to learn TypeScript using Angular web application Framework. Currently, my Portfolio website is built using Angular.\n\nI am eager to contribute my expertise in data handling and backend operations to the growth of your company.\n\nThanks for reading. And I look forward to the opportunity to be part of your team.\n\nWarm Regards,\n\nJulie\n\n`;
  private techText: string = `My Tech Stack\n\nBackend:\n➔ Fundamentals:  Linux, Version Control, Programming, Web Development, Agile Methodologies\n\nPython: Core Python, Text Handling, Dates, Collections, Control Structures, Functions, Logical and Algorithmic Thinking, Debugging, Object-Oriented Programming, Exception Handling, Testing, Coding Standards, File I/O, Libraries\n\nDatabases: Database usage in Python, Advanced SQL, Data Consistency, Basic Performance Optimization\n\nFrameworks: ORM, Django, Django Logging & Custom Commands, Django Testing
➔ APIs: API Basics, REST API\n\n➔ Cloud Services: AWS, GCP\n\nProfessional German Language Training\n\nFrontend\n\n➔ JavaScript with React and TypeScript using Angular`;

  getAbout(): string {
    return this.aboutText;
  }

  getTech(): string {
    return this.techText;
  }

  updateAbout(text: string): void {
    this.aboutText = text;
  }

  updateTech(text: string): void {
    this.techText = text;
  }
}
