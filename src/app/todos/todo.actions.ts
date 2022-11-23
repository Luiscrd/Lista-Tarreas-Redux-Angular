import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo] CreateTodo', props<{text: string}>());

export const toogle = createAction('[Todo] ToogleTodo', props<{id: string}>());
