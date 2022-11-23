import { createAction, props } from '@ngrx/store';

export type validFilters =  'actives' | 'completed' | 'all';

export const filterTodos = createAction('[Filter] FilterTodos', props<{filter: string}>());
