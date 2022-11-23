import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()todo!: Todo;

  chkComplited!: FormControl;

  txtEdit!: FormControl;

  constructor() { }

  ngOnInit(): void {

    this.chkComplited = new FormControl(this.todo.completed);

    this.txtEdit = new FormControl(this.todo.text, [Validators.required])
  }

}
