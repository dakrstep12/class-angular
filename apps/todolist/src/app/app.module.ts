import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskCheckboxComponent } from './task-checkbox/task-checkbox.component';
import { TaskService } from './task.service';
import { TabComponent } from './ui/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskInputComponent,
    TaskItemComponent,
    TaskCheckboxComponent,
    TabComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
