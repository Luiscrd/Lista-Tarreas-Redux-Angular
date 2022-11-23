import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[Todo] CreateTodo', props<{text: string}>());
