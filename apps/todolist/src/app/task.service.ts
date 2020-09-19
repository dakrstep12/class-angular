import { Iitemlist } from "./model"

export class TaskService { 
  private Titlelists: Iitemlist[] = [
    {
      id: 1,
      title: 'List item 1',
      done: false
    },
    {
      id: 2,
      title: 'List item 2',
      done: false
    }
  ]

  getTasks() { 
    return this.Titlelists.slice();
  }

  addTaskitem(event: string) {
    this.Titlelists.push({
      id: this.Titlelists.length + 1,
      title: event,
      done: false
    })
  }

  updateTask(status: boolean, listTitle: Iitemlist) {
    const findIndexlist =  this.Titlelists.findIndex(e => e.id === listTitle.id)
    this.Titlelists[findIndexlist].done = status;
    // const findIndexlist = this.Titlelists[listTitle.id - 1].done = status;
  }


}