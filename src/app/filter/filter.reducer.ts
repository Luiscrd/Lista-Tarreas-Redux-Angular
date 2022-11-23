import { createReducer, on } from '@ngrx/store';
import { filterTodos } from './filter.actions';

export const initialState: string = 'all';

export const filterReducer = createReducer(

  initialState,

  on(filterTodos, (state, { filter }) => filter),

)
