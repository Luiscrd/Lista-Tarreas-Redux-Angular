import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filterTodos } from '../../filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  actualFilter: string = 'all';

  filters = [
    { id: 'all', name: 'Todas'},
    { id: 'actives', name: 'Activas'},
    { id: 'completed', name: 'Completadas'},
  ];

  pending: number = 0;

  constructor(private store: Store<AppState> ) { }

  ngOnInit(): void {

    // this.store.select('filter').subscribe(filter => {

    //   this.actualFilter = filter;

    // })

    this.store.subscribe(state => {

      this.actualFilter = state.filter;

      this.pending = state.todos.filter(todo => !todo.completed).length;

    })

    console.log(this.actualFilter);

  }

  changeFilter(filter : string) {

    this.store.dispatch(filterTodos({filter: filter}));
    console.log(filter);


  }

}
