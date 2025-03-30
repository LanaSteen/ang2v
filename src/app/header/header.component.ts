import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   butonTextFromHeader = "Log In"


   activeClass = "active"
}
