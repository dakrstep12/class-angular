import { Component, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { Iitemlist, FilterButtonType } from '../model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

  filterType: FilterButtonType[] = ['ALL', 'DONE', 'UNDONE']
  Titlelists: Iitemlist[]
  filter = 'ALL'

  //สร้าง constructor รับข้อมูลจาก task.service.ts มา
  constructor(private taskService: TaskService) {
    this.Titlelists = taskService.getTasks();
  }

  addTask(event: string) {
    this.taskService.addTaskitem(event);
    // this.Titlelists = this.taskService.getTasks();
    this.doFilter(this.filter)
  }

  updateStatus(event: boolean, listTitle: Iitemlist) {
    this.taskService.updateTask(event, listTitle);
    this.doFilter(this.filter)
  }

  doFilter(event: string) {
    // console.log(event);
    this.Titlelists = this.taskService.getTasks();
    this.filter = event
    this.Titlelists = this.Titlelists.filter(t => {
      if(event === 'ALL'){
        return true
      } else if(event === 'DONE') {
        return t.done
      } else {
        return !t.done
      }
    })
  }
}
