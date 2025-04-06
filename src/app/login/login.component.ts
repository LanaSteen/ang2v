import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LocalStrService } from '../Services/local-str.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private http : UserService, private router : Router, private local : LocalStrService){}


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
