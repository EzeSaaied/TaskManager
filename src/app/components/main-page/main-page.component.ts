import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task.service';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskSvc: TaskService) {}

  ngOnInit(): void {
    this.taskSvc.getTasks()
    .pipe(
      tap( tasks => this.tasks = tasks)
    )
    .subscribe();
  }

  deleteTask(task: Task){
    this.taskSvc.deleteTask(task)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe(
      () => (this.tasks = this.tasks.filter( t => t.id !== task.id)));
  }

  editTask(task: Task){
    console.log(task);
    this.taskSvc.editTask(task)
    .pipe(
      tap( response => console.log(response.response))
    )
    .subscribe();
  }

}
