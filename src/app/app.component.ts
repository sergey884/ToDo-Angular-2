import { Component } from '@angular/core';

import { Todo } from './shared/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ToDo App';
}
