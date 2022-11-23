import { createReducer, on } from '@ngrx/store';
import { createTodo } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [new Todo('Salvar el mundo')];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, {text}) => [...state, new Todo(text)]),
);
