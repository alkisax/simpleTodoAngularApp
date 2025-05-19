import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../interfaces/todo'
import { Router } from '@angular/router';

// σχολια στο weather.service.ts

// τα routes τα βλέπω απο τον σερβερ στο backend
const API_URL = `${environment.apiURL}/api/todo`

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  http: HttpClient = inject(HttpClient);

  createTodo (todo:Todo) {
    return this.http.post<{status: boolean, data: Todo}>(`${API_URL}`, todo)
  }

  getAllTodo () {
    return this.http.get<{status: boolean, data: Todo}>(`${API_URL}`)
  }

  getByIdTodo (_id: string) {
    return this.http.get<{status: boolean, data: Todo}>(`${API_URL}/${_id}`)
  }

  putByIdTodo (todo:Todo) {
    return this.http.put<{status: boolean, data: Todo}>(`${API_URL}/${todo._id}`, todo)  //ισως να έχει προβλημα το todo._id
  }

  deleteByIdTodo (_id: string) {
    return this.http.delete<{status: boolean, data: Todo}>(`${API_URL}/${_id}`)
  }
  
}

/*
const express = require('express');
const router = express.Router()
const todoController = require('../controllers/todo.controller')

router.post('/', todoController.create)
router.get ('/', todoController.findAll)
router.get ('/:id', todoController.readById)
router.put ('/:id', todoController.updateById)
router.delete('/:id', todoController.deleteById)

module.exports = router
*/
