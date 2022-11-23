import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { createTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  txtImput: FormControl;

  constructor( private store: Store<AppState> ) {

    this.txtImput = new FormControl('', [Validators.required]);

  }

  ngOnInit(): void {
  }

  create() {

    if (!this.txtImput.valid) return;

    this.store.dispatch(createTodo({ text: this.txtImput.value }));

    this.txtImput.reset();

  }

}
