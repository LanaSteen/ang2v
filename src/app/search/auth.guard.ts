import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private authService: AuthService, private route : Router){}

  canActivate(){
    if(this.authService.isLogedIn()){
      return true
    }
    this.authService.reject()
    this.route.navigateByUrl('/login')
    return false
  }
  
  // return true;
};
