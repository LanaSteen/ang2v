import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStudent } from '../../Models/student';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.scss'
})
export class DisplayDataComponent {

  @Input() studentData :IStudent[]=[]
  @Input()  visible : boolean = false

  @Output() deleteSt = new EventEmitter<number>()
  @Output() editSt = new EventEmitter<number>()


  delete(x : number){
    this.deleteSt.emit(x)
  }


  edit(ind : number){
    this.editSt.emit(ind)
  }

}
