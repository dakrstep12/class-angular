import { Component, Input, HostBinding, EventEmitter, Output } from '@angular/core';
import { Iitemlist } from '../model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {

  @Input() Titlelist: Iitemlist
  @Output() booStatus = new EventEmitter<boolean>()

  // status: boolean = false;

  @HostBinding('class.newcolor')
  get done()
  {
    return this.Titlelist.done
  }

  updateStatus(event: boolean){
    this.Titlelist.done = event;
    this.booStatus.emit(event);
  }
}
