import { createFeatureSelector, createSelector } from '@ngrx/store';
import { todoFeatureKey, State } from './todo.reducer';

const getState = createFeatureSelector<State>(todoFeatureKey);

export const getLoading = createSelector(getState, (state) => state.loading);

export const getTodos = createSelector(getState, (state) => state.todos);
