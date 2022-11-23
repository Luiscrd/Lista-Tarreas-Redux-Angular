import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: string): Todo[] {

    switch (filter) {

      case 'actives':

        return todos.filter(todo => !todo.completed);

      case 'completed':

        return todos.filter(todo => todo.completed);

        case 'all':

          return todos;

      default:

        return todos;

    }

  }

}
