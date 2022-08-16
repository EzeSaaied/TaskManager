import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 

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
    console.log(this.form.value);
  }

}
