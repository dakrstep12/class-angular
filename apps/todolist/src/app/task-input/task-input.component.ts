import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css']
})
export class TaskInputComponent {

  @Output() sendTxtAdd = new EventEmitter();
  @ViewChild('inputTxt') input: ElementRef 

  handlerAdd(inputTxtvalue: string){
    if(inputTxtvalue != ''){
      this.sendTxtAdd.emit(inputTxtvalue);

      // Clear Value Input
      this.input.nativeElement.value = '';
    }
  }

  enterSubmit(event: number, inputTxtvalue: string){
    if(event === 13 && inputTxtvalue != '') {
      this.sendTxtAdd.emit(inputTxtvalue);

      // Clear Value Input
      this.input.nativeElement.value = '';
    }
  }
}
