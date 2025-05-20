import { Component, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { 
  AbstractControl, // Base class for all form controls – useful when working generically with any form control
  FormControl,     // Represents a single form input (like an input box)
  FormGroup,       // Represents a group of form controls (like a whole form)
  ReactiveFormsModule, // Required module for using reactive forms in Angular
  Validators       // Built-in validation functions (like required, minLength, email, etc.)
} from '@angular/forms';
import { TodoService } from 'src/app/shared/services/todo.service';
import { Todo } from '../../shared/interfaces/todo'
import { CommonModule } from '@angular/common'; // για να μπορέσω να χρησιμοποιήσω το *ngIf γιατι στην φορμα δεν μπορω @if


@Component({
  selector: 'app-todo',
  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatCardModule,
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoService = inject(TodoService)

  // get all
  todoData: Todo | null = null

  ngOnInit(): void {
    this.refreshTodo()
  }

  refreshTodo () {
    this.todoService.getAllTodo()
      .subscribe((data) => {
        console.log(data);
        // το data.data και όχι data είναι γιατι στο service είναι:
        // getAllTodo () {return this.http.get<{status: boolean, data: Todo}>(`${API_URL}`)}
        // δηλ τo data έχει μέσα του {status, data}
        this.todoData = data.data       
      })
  }

  // get by id
  todoById: Todo | null = null;

  idForm = new FormGroup({
    _id: new FormControl('', Validators.required)
  })

  onSubmitViewById() {
    const _id = this.idForm.value._id;
    if (!_id) return; // Με υποχρέωσε η ts να το προσθέσω

    this.todoService.getByIdTodo(_id)
      .subscribe((data) => {
        this.todoById = data.data
      });
    this.refreshTodo()
  }

  //delete by id
  deleteById: Todo | null = null
   onSubmintDeleteById() {
    const _id = this.idForm.value._id
    if (!_id) return

    const confirmed = window.confirm('Are you sure you want to delete this todo?');
    if (!confirmed) {
      return; 
    }

    this.todoService.deleteByIdTodo(_id)
      .subscribe((data) => {
        console.log("deleted", data)        
      })
    this.refreshTodo()
   }

   // create todo

  createForm = new FormGroup({
    username: new FormControl('', Validators.required),
    todo: new FormControl('', Validators.required)
  })

  onSubmitCreateTodo() {
    if (this.createForm.invalid) {
      return; 
    }

    const newTodo: Todo = {
      username: this.createForm.value.username!,
      todo: this.createForm.value.todo!,
      _id: ''  // _id will be assigned by backend, so empty here
    };

    this.todoService.createTodo(newTodo)
      .subscribe((response) => {
          console.log('Created todo:', response.data);
          window.alert('Todo created successfully!');
          this.createForm.reset(); // Clear the form after create
          this.refreshTodo();
        }
      );
  }

}
