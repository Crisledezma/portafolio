import { Component, inject, ViewChild } from '@angular/core';
import { ToDoListService } from '../services';
import { MatListModule, MatSelectionList } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ToDo } from '../services/to-do-list.service';

@Component({
  selector: 'to-do-list',
  standalone: true,
  imports: [MatListModule, MatButtonModule, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  @ViewChild('ToDo') ToDo!: MatSelectionList;
  public toDoService = inject(ToDoListService);

  deleteItem(pItem: ToDo) {
    this.toDoService.toDoList = this.toDoService.toDoList.filter(
      (item) => item.id !== pItem.id
    );
  }
}
