import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/todo';

import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
	@Input() todos: Todo[];
	@Output() toggle: EventEmitter<Todo> = new EventEmitter();
	@Output() delete: EventEmitter<Todo> = new EventEmitter();

	onToggle(todo: Todo) {
		this.toggle.emit(todo);
	}

	onDelete(todo: Todo) {
		this.delete.emit(todo);
	}
}
