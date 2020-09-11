import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './todo.state';
import { todoFeatureKey } from './todo.reducer';

const getState = createFeatureSelector<State>(todoFeatureKey);

export const getLoading = createSelector(getState, (state) => state.loading);

export const getTodos = createSelector(getState, (state) => state.todos);
