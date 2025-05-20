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
  todoById: Todo | null = null; // αυτο θα χρησιμοποιηθεί και στο delete / put
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

  // change todo
  // το changeForm εμφανίζετε αν πατηθεί το κομπι change μέσα στο υπομενου που εμφανίζετε αν δώσεις αναζήτηση μέσο id. 

  changeTodoById: Todo | null = null // αρχικόποιώ μια μεταβλητή για να αποθηκέυσει το παλιό todo θα χρειαστεί για να κάνω prefill την φορμα αλλαγής
  isToChange: boolean = false // θα χρησιμοποιηθεί για να κάνει toggle το changeForm

  // εχω δύο κουμπια. το ένα για να επηλέξω οτι θέλω να αλλαξω το todo δινοντας id. και το άλλο για να κάνω submit την αλλαγή μου
  toggleIsToChange = () => {
    this.isToChange = !this.isToChange
    this.onSubmitViewById() // το viewById όχι μονο χρειάζετε για να είναι σιγουρο οτι βλέπω το todo που αλλάζω αλλα μου δημιουργεί και το todoById

    if (this.isToChange) {
      const _id = this.idForm.value._id;
      if (!_id) return; 

      this.todoService.getByIdTodo(_id)
        .subscribe((data) => {
          this.changeTodoById = data.data
          
          // Prefill form
            console.log('Received for patching:', this.changeTodoById);
          // patchValue updates the form controls with the given values without affecting other controls.
          // It allows partial updates to the form — you don't have to provide values for all controls,
          // only the ones you want to change. Here, we're pre-filling the 'username' and 'todo' inputs
          // in the form with the data fetched from the backend so the user can edit them easily.
          this.changeForm.patchValue({
            username: this.changeTodoById.username,
            todo: this.changeTodoById.todo
          });
        });
    }
  }

  changeForm = new FormGroup({
    username: new FormControl('', Validators.required),
    todo: new FormControl('', Validators.required)
  })

  onSubmitChangeTodo() {
    const _id = this.idForm.value._id // το id απο το idForm
    if (!_id) return

    if (this.changeForm.invalid) { // το changeForm έιναι άλλο απο το idForm 
      return; 
    }

    const newTodo: Todo = {
      username: this.changeForm.value.username!,
      todo: this.changeForm.value.todo!,
      // _id: ''  // _id will be assigned by backend, so empty here
    };

    const confirmed = window.confirm('Are you sure you want to change this todo?');
    if (!confirmed) {
      return; 
    }

    this.todoService.putByIdTodo(_id, newTodo)
      .subscribe((response) => {
          console.log('Created todo:', response.data);
          window.alert('Todo changed successfully!');
          this.changeForm.reset(); // Clear the form after create
          this.isToChange = false // για να μου κρήψει το υπομενου
          this.refreshTodo();
        }
      );
  }

}
