import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];

  onAddTodo(todo: Todo) {
    this.todos.push(todo);
  }

  onDelete(index: number) {
    this.todos.splice(index, 1);
  }

  onToggle(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
