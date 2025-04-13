import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ErrorhandlerService } from '../Services/errorhandler.service';

@Component({
  selector: 'app-error-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  constructor(private erroHandler : ErrorhandlerService){
        this.erroHandler.dialogState.subscribe(
          state => {
            this.showDialog = state.show
            this.erroMessage = state.message
            document.body.style.overflow='hidden'
          }
        )
  }

  erroMessage =""
  showDialog :boolean = false
  closeDialog(){
     this.showDialog = false
     this.erroHandler.hideDialog()
       document.body.style.overflow='scroll'
  }
}
