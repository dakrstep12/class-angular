import { Component, HostBinding, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-checkbox',
  templateUrl: './task-checkbox.component.html',
  styleUrls: ['./task-checkbox.component.css']
})
export class TaskCheckboxComponent {

  @Input() checked: boolean
  @Output() sendStatusChecked = new EventEmitter<boolean>()
  
  updateStatus(event) {
    const sendStatusChecked: boolean  = event.target.checked;
    this.sendStatusChecked.emit(sendStatusChecked);
  }
}
