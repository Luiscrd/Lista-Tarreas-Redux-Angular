import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { toogle } from '../todo.actions';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()todo!: Todo;

  chkComplited!: FormControl;

  txtEdit!: FormControl;

  editing: boolean = false;

  constructor( private store: Store<AppState> ) { }

  ngOnInit(): void {

    this.chkComplited = new FormControl(this.todo.completed);

    this.txtEdit = new FormControl(this.todo.text, [Validators.required]);

    this.chkComplited.valueChanges.subscribe(value => {

      this.store.dispatch(toogle({id: this.todo.id}));

    })
  }

  edit(inputText: HTMLInputElement) {

    this.editing = true;

    setTimeout(() => {
      inputText.select();
    }, 1);

  }

  save() {
    this.editing = false;
    console.log('hola');
  }

}
