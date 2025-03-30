import { Component } from '@angular/core';
import { IStudent } from '../Models/student';
import { FormsModule, NgForm } from '@angular/forms';
import { DisplayDataComponent } from "./display-data/display-data.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule, DisplayDataComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

    isVisible = false
    studentArr : IStudent[]  =[]
 
     newStudent : IStudent= {
        name : "",
        age : null,
        grade : "",
        subject : "",
        isEnrolled : false,
        address : {
          street : "",
          city : "",
          zip : null
        },
        activeType : 0,
        // role : 'Admin'
     }




     save(form : NgForm){
      console.log(this.newStudent)

         if(form.valid){
           this.studentArr.push({...this.newStudent,
            address: { ...this.newStudent.address}})
         }

         form.resetForm()
       console.log(this.studentArr)
     }


     showList(){
        this.isVisible = !this.isVisible
     }
    

     deleteStudent(ind : number){
         this.studentArr.splice(ind,1)
     }

     editSudent(ind: number){
         this.newStudent = this.studentArr[ind]
         this.studentArr.splice(ind,1)


     }
}

