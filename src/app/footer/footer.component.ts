import { Component } from '@angular/core';
import { ButtonComponent } from "../header/button/button.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   textFromParent = "See more"
}
