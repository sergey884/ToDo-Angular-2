import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/data.service';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoService } from './shared/todo.service';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot( InMemoryDataService )
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
