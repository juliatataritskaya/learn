import { Component, OnInit } from '@angular/core';
import { TodoListItem } from '../todo-list-item.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todolist: TodoListItem[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todolist = this.todoService.getTodoItems();
  }

}
