import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State {}

export const reducers: ActionReducerMap<State> = {};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('action', action);
    console.log('state', result);
    console.groupEnd();
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = [logger];
