import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = 'MY first Project';
  userName = "JOHN"
  linkOfLogbook = "https://lb.itstep.org/attendance"
  color = "linkStyle"
  isButtonDis = false
  imgSorce = "https://plus.unsplash.com/premium_photo-1741194732785-4624b6e5f0b5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  imgWidth="200px"
  print(){
    this.imgWidth="300px"
    this.userName="dfhfdf"
    this.title = "Something"
    this.color == "linkStyle"? this.color ="linkStyle1" : this.color ="linkStyle"
    this.isButtonDis = true
  }


}
