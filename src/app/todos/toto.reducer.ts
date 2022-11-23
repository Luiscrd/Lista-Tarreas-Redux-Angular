import { createReducer, on } from '@ngrx/store';
import { createTodo, toogle } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Ganar millones'),
  new Todo('Comprarme un coche'),
  new Todo('Salir de fiesta'),
];

export const todoReducer = createReducer(
  initialState,
  on(createTodo, (state, {text}) => [...state, new Todo(text)]),
  on(toogle, (state, {id}) => {
    return state.map(todo => {
      if (todo.id === id){
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo;
      }
    })
  }),
);
