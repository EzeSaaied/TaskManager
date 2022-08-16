import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onEditTask: EventEmitter<Task> = new EventEmitter();

  faSquareXmark = faSquareXmark;
  faSquarePen = faSquarePen;

  editTaskBtn = false;

  form: UntypedFormGroup;
  
  constructor(private formBuilder: UntypedFormBuilder) { 

    this.form = this.formBuilder.group (
      {
        title:["", [Validators.required]],
        description:["", [Validators.required]],
        datetime: [, [Validators.required]],
        reminder: [, [Validators.required]],
      }
    )
  }

  ngOnInit(): void {
  }

  get Title() {
    return this.form.get("title")
  }

  get Description() {
    return this.form.get("description")
  }

  get Datetime() {
    return this.form.get("datetime")
  }

  get Reminder() {
    return this.form.get("reminder")
  }

  onDelete(task: Task) {
    if(confirm("Seguro que desea borrar " + this.task.title + "?")){
    this.onDeleteTask.emit(task)};
  }

  onEdit(task: Task) {
    this.onEditTask.emit(task);
    console.log(task)
  }

  toggleEdit() {
    this.editTaskBtn = !this.editTaskBtn;
  }

}
