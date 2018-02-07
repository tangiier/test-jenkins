import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: String[];
  todo:String;

  constructor() { }

  addItem(){
    this.todos.push(this.todo);
  }
  ngOnInit() {
  }

}
