import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../header/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  id = 10


  title = 'MY first Project';
  userName = "JOHN"
  linkOfLogbook = "https://lb.itstep.org/attendance"
  color = "linkStyle"
  isButtonDis = false
  imgSorce = "https://plus.unsplash.com/premium_photo-1741194732785-4624b6e5f0b5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  imgWidth="200px"

  firstName = ""
  savedFirstName =""
  namesArr : string[] = []
  
  isVisible = false

  showList(){
    // this.isVisible == false? this.isVisible = true : this.isVisible = false
    this.isVisible = !this.isVisible
  }


  delete(ind : number){
    this.namesArr.splice(ind,1)
  }

  eddit(ind : number){
    this.firstName = this.namesArr[ind]
    this.namesArr.splice(ind,1)

  }




  saveName(){
    this.savedFirstName = this.firstName
    this.firstName = ""
    this.namesArr.push(this.savedFirstName)
    console.log(this.namesArr)

  }



  makeUpperCaase(text : any){
     return   text.toUpperCase()
  }


  print(){
    this.imgWidth="300px"
    this.userName="dfhfdf"
    this.title = "Something"
    this.color == "linkStyle"? this.color ="linkStyle1" : this.color ="linkStyle"
    this.isButtonDis = true
  }





}
