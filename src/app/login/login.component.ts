import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LocalStrService } from '../Services/local-str.service';
import { CurrencyPipe, DatePipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, DatePipe, LowerCasePipe, UpperCasePipe, CurrencyPipe, PercentPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private http : UserService, private router : Router, private local : LocalStrService){}

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
