import { Component, effect, signal } from '@angular/core';
import { SignalService } from '../Services/signal.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
     constructor(private sig : SignalService){
          effect(()=> {
            console.log( this.sig.couterFromService())
            this.counterFrServ = this.sig.couterFromService()
          })
     }



   counterFrServ = 0  

   counter = signal(0)

   ///  update set


   increment(){
      this.counter.update((curentValue) => curentValue + 1)
      this.sig.grow()
   }
    decrement(){
      this.counter.update((curentValue) => curentValue - 1)
      this.sig.reduce()
    }



}
