import { Component, effect } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';
import { SignalService } from '../Services/signal.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
   constructor(private sig : SignalService){
     
        effect(()=> {
          this.userNameFromRegister = this.sig.userNameFromSig()
        })

   }

   butonTextFromHeader = "Log In"


   activeClass = "active"


   userNameFromRegister = ""
}
