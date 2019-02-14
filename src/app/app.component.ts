import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: String = 'Lista de Tarefas';
  public todos: Todo[] = [];
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });
    this.loadTodo();
  }

  loadTodo() {
    this.todos.push({
      title: 'Passear com o cachorro',
      done: false
    });
    this.todos.push({
      title: 'Ir ao supermercado',
      done: false
    });
  }

  addTodo() {
    // this.form.value { title : ''}
    // this.form.controls['title'] = '' value only
    if (this.form.valid) {
      const title = this.form.controls['title'].value;
      this.todos.push(new Todo(title, false));
      this.form.reset();
    }
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo) {
    console.log(todo);
    todo.done = true;
  }

}
