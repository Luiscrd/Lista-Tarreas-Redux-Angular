import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo] CreateTodo', props<{text: string}>());

export const toogle = createAction('[Todo] ToogleTodo', props<{id: string}>());

export const toogleAll = createAction('[Todo] ToogleAllTodo', props<{completed: boolean}>());

export const edit = createAction('[Todo] EditTodo', props<{id: string, text: string}>());

export const deleteTodo = createAction('[Todo] DeleteTodo', props<{id: string}>());
