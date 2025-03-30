import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../Models/student';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() studernt! : IStudent
  @Input() ind! : number

  @Output() delSt = new EventEmitter<number>()
  @Output() edditSt = new EventEmitter<number>()



  delete(ind : number){

    this.delSt.emit(ind)

  }

  edit(ind : number){
    this.edditSt.emit(ind)
  }

}
