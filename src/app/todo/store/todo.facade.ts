import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TodoStoreModule } from './todo.store.module';
import { State } from './todo.state';
import * as TodoActions from './todo.action';
import * as Selectors from './todo.selector';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: TodoStoreModule,
})
export class TodoFacade {
  todos$ = this.store.pipe(select(Selectors.getTodos));
  loading$ = this.store.pipe(select(Selectors.getLoading));

  constructor(private store: Store<State>) {}

  loadAll() {
    this.store.dispatch(TodoActions.loadAll());
  }

  load(id: number) {
    this.store.dispatch(TodoActions.load({ id }));
  }

  create(todo: Partial<Todo>) {
    this.store.dispatch(TodoActions.create({ todo }));
  }

  update(todo: Todo) {
    this.store.dispatch(TodoActions.update({ todo }));
  }

  remove(id: number) {
    this.store.dispatch(TodoActions.remove({ id }));
  }
}
