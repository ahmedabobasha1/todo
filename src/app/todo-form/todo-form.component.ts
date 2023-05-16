import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoText: string = '';
  @Output() addTodo = new EventEmitter<Todo>();

  addTask(): void {
    const newTodo: Todo = {
      text: this.todoText,
      completed: false
    };
    this.addTodo.emit(newTodo);
    this.todoText = '';
  }
}
