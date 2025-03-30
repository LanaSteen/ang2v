import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

   constructor(private rou : Router){

   }
  //  ngOnInnit(){

  //  }

  // goToHome(){
  //     this.rou.navigate(["/home"])
  // }


    goToHome(){
      if(1==1){
        this.rou.navigateByUrl("/home")
      }
      else {
        return
      }
  }

}
