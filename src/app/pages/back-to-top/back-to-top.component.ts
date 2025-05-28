import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
   standalone: true,
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})

export class BackToTopComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    window.addEventListener('scroll', this.toggleBackToTop);
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.toggleBackToTop);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleBackToTop = (): void => {
    const button = document.getElementById('backToTopBtn');
    if (!button) return;

    if (window.pageYOffset > 300) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  };
}