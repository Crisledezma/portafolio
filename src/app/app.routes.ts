import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'todolist',
    component: ToDoListComponent,
  },
];
