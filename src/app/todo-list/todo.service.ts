import { Injectable } from '@angular/core';
import {TodoListItem} from './todo-list-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getTodoItems(): TodoListItem[] {
    return [
      {
        id: 1,
        title: 'q1'
      },
      {
        id: 2,
        title: 'q2'
      },
      {
        id: 3,
        title: 'q3'
      },
      {
        id: 4,
        title: 'q4'
      },
      {
        id: 5,
        title: 'q5'
      }
    ];
  }
}
