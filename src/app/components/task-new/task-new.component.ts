import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder, private taskSvc: TaskService, private router: Router) { 

    this.form = this.formBuilder.group (
      {
        title:["", [Validators.required]],
        description:["", [Validators.required]],
        datetime: [, [Validators.required]],
        reminder: [true, [Validators.required]],
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

  onCreate(event: Event) {
    event.preventDefault;
    this.taskSvc.createTask(this.form.value).subscribe(data => {
      console.log(JSON.stringify(data));
      location.reload()});
    }
  
}
