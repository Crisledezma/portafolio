import { Injectable } from '@angular/core';

export interface ToDo {
  id: number;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  public toDoList: ToDo[] = [
    {
      id: 1,
      description: 'Buy milk',
      completed: true,
    },
    {
      id: 2,
      description: 'Buy eggs',
      completed: false,
    },
    {
      id: 3,
      description: 'Buy bread',
      completed: true,
    },
    {
      id: 4,
      description: 'Buy butter',
      completed: false,
    },
    {
      id: 5,
      description: 'Buy jam',
      completed: false,
    },
  ];
}
