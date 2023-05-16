import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() toggleTodo = new EventEmitter<number>();

  onDelete(index: number) {
    this.deleteTodo.emit(index);
  }

  onToggle(index: number) {
    this.toggleTodo.emit(index);
  }
}
