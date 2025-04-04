import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFuncService {

  constructor() { }


  printinConsole(name :string, obj : any){
    console.log(`${name} : ${obj}`)
  }
}




// SingleTon