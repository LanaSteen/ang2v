import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LocalStrService } from '../Services/local-str.service';
import { CommonModule, CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../search/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, DatePipe, LowerCasePipe, 
           UpperCasePipe, CurrencyPipe, PercentPipe, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private http : UserService, 
  private router : Router, 
  private local : LocalStrService,
  private authService : AuthService
){}

ngOnInit(){
   if(this.authService.getIsRejected()=="reject"){
      // console.log("rejected ")
      this.throwFromOtherRoute = true

   }
}

 throwFromOtherRoute= false

  curDat = new Date()
    email : string =""
    password : string = ""

    register(form : NgForm){
        if(form.valid){

          let user = {
            email: this.email,
            password: this.password
          }


          this.http.loginUser(user).subscribe((resp:any)=>{
              console.log(resp)
              this.local.setLocalStr("token", resp.token)
              this.router.navigateByUrl("/home")
          })

          




        }
    }
}
