import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onToggleNewTask = new EventEmitter();

  faCirclePlus = faCirclePlus;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle() {
    this.onToggleNewTask.emit();
  }

}
