import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

     constructor(private rout : ActivatedRoute){
       this.rout.params.subscribe(data => console.log(data['id']))

     }


     ngOnInit(){
       console.log("hi")
       this.titles = []
      //  console.log(this.rout.snapshot.queryParamMap.get("id"))
     }

     titles = []


     

}




// life cycle hook

///fetch     prommise         then
// params    observable       subsccrite


