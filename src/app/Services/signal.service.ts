import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }


   couterFromService = signal(0)

   grow(){
      this.couterFromService.update((curentValue) =>  curentValue + 1)
   }
   reduce(){
    this.couterFromService.update((curentValue) => {
      if(curentValue > 0){
        return curentValue - 1
      }else{
        return 0
      }
    })
   }

   reset(){
    this.couterFromService.set(0)
   }





   ////// პარამეტრიანი

    userNameFromSig = signal("")

    setUserName(name : string){
      this.userNameFromSig.set(name)
    }

    resetUserName(){
      this.userNameFromSig.set("")
    }



}
