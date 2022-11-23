import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toogleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  complteted: boolean = false;

  constructor( private store: Store ) { }

  ngOnInit(): void {
  }

  toogleAll() {

    this.complteted = !this.complteted;

    this.store.dispatch(toogleAll({completed: this.complteted}));

  }

}
