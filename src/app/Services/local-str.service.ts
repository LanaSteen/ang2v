import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStrService {

  constructor() { }


  setLocalStr(key: string, value:string){
      localStorage.setItem(key, value)
  }
}
