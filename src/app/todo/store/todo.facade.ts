import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoStoreModule } from './todo.store.module';
import { State } from './todo.state';
import * as Actions from './todo.action';
import * as Selectors from './todo.selector';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: TodoStoreModule,
})
export class TodoFacade {
  todos$ = this.store.pipe(select(Selectors.getTodos));
  loading$ = this.store.pipe(select(Selectors.getLoading));

  constructor(private store: Store<State>) {}

  createTodo(todo: Todo) {
    this.store.dispatch(Actions.create({ todo }));
  }
}
