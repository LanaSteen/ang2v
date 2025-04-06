import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
   constructor(private http : UserService, private router : Router){}


    email : string =""
    password : string = ""

    register(form : NgForm){
        if(form.valid){

          let user = {
            email: this.email,
            password: this.password
          }


          this.http.postUser(user).subscribe((resp:any)=>{
              this.router.navigateByUrl("/login")
          })




        }
    }

  // reg(){
  //      this.http.postUser({
  //           email: "eve.holt@reqres.in",
  //           password: "pistol"
  //      }).subscribe((resp:any) => console.log(resp))
  // }

}
