import { Component, effect } from '@angular/core';
import { SignalService } from '../Services/signal.service';

@Component({
  selector: 'app-for-signal-two',
  standalone: true,
  imports: [],
  templateUrl: './for-signal-two.component.html',
  styleUrl: './for-signal-two.component.scss'
})
export class ForSignalTwoComponent {
  constructor(private sig : SignalService){
    effect( ()=> {
         this.counterFrOtherComponent = this.sig.couterFromService()
    })
      

  }


  counterFrOtherComponent = 0
    

}
