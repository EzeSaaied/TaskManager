import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  item = {
    title:"title",
    description:"description",
    hour: 10,
    minute: 30,
    day: 15,
    month: 8,
    year: 2022,
    reminder: true
  }
  constructor() { }

  ngOnInit(): void {
  }

}
