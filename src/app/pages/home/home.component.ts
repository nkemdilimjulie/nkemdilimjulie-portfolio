import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  introVideoUrl = 'https://www.youtube.com/shorts/FW3G5SxtR8A'
  pitch = 'https://www.loom.com/share/8d44714290d84f589dcf301919877f1c?sid=e1259f8f-477c-4478-8977-07e37fbf5394'
  tech = 'https://www.loom.com/share/76be12bb286d4f3696dee2e2f25809b4?sid=fd8ecbf8-8df0-4df4-b518-ad76ee47fbf7'
}
