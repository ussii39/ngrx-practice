import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {
  todos$: Observable<Todo[]>;
  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todos$ = this.todoService.loadAll();
  }
  create(todo: Todo) {}
}
