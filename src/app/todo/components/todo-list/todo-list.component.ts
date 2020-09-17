import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  styleUrls: ['./todo-list.component.css'],
  templateUrl: './todo-list.component.html',

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {}
