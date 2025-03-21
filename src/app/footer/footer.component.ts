import { Component } from '@angular/core';
import { ButtonComponent } from '../header/button/button.component';
import { SearchComponent } from "../search/search.component";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent, SearchComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
   textFromParent = "See more"
   labelFromParent = "Email"

   print(){
    console.log("hi")
   }
}
