# create git

# back end
## basic crud for todo + mongoose in back

### .env
```
MONGODB_URI = mongodb+srv://alkisax:{***}@cluster0.8ioq6.mongodb.net/todoAngular?retryWrites=true&w=majority&appName=Cluster0
MONGODB_TEST_URI = mongodb+srv://alkisax:{***}@cluster0.8ioq6.mongodb.net/todoAngular_TEST?retryWrites=true&w=majority&appName=Cluster0

BACK_END_PORT = 3001

APP_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3001
```

### server.js
```js
require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app'); 

const PORT = process.env.BACK_END_PORT || 3001

mongoose.set('strictQuery', false);
// συνδεση με την MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB');
    console.log('Routes setup complete. Starting server...');
// εδώ είναι το βασικό listen PORT μου
    app.listen(PORT, () => {
      // το εκανα σαν λινκ για να είναι clickable
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('error connecting to MongoDB:', error.message);
  });
```

### app.js
```js
const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./utils/swagger');
// θα προστεθούν πολλα τέτοια endpoints οπως προχωρά η εφαρμογη
const todoRoutes = require('./routes/todo.routes')

// αυτό ειναι κάτι που ίσως μου χρειαστεί στο deploy και δεν το καταλαβαίνω καλα. (και παρακάτω μαζί με αυτό)
const path = require('path'); // requires explanation. added for rendering front page subpages

const app = express()
app.use(cors())
app.use(express.json());

// ενας logger για να καταγράφει το backend τις κλήσεις
app.use((req, res, next) => {
  console.log("Request reached Express!");
  console.log(`Incoming request: ${req.method} ${req.path}`);
  next();
});

// θα προστεθούν πολλα τέτοια endpoints οπως προχωρά η εφαρμογη
app.use('/api/todo', todoRoutes)

// swagger test page
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// για να σερβίρει τον φακελο dist του front μετα το npm run build
app.use(express.static('dist'))

// αυτό ειναι κάτι που ίσως μου χρειαστεί στο deploy // τελικά έβγαζε προβλήματα και χρησιμοποιήθηκε το επόμενο
// app.get('/*', (req, res, next) => {
//   if (req.path.startsWith('/api')) {
//     return next(); // let the API routes handle it
//   }
//αυτο
app.get(/^\/(?!api|api-docs).*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

//   res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
// });

module.exports = app
```

### models/todo.models.js
```js
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const todoSchema = new Schema({
  username:{
    type: String
  },
  todo:{
    type: String
  }
},
{
  collection: 'todo',
  timestamps: true
})
module.exports = mongoose.model('Todo', todoSchema)
```

### daos/todo.dao.js
```js
const Todo = require('../models/todo.models');

const create = async (todoData) => {
  const todo = new Todo(todoData);
  return await todo.save();
};

const readAll = async () => {
  return await Todo.find();
};

const readById = async (todoId) => {
  return await Todo.findById(todoId)
}

const update = async (todoId, todoData) => {
  return await Todo.findByIdAndUpdate(todoId, todoData, { new: true })
}

const deleteTodoById = async (todoId) => {
  return await Todo.findByIdAndDelete(todoId)
}

module.exports = {
  create,
  readAll,
  readById,
  update,
  deleteTodoById
};
```

### controllers/todo.controller.js
```js
const Todo = require('../models/todo.models')
const todoDAO = require('../daos/todo.dao')

exports.create = async (req,res) => {
  let data = req.body

  const username = data.username
  const todo = data.todo

  try {
    const newTodo = await todoDAO.create({
      username,
      todo,
    });
    res.status(201).json(newTodo)
  } catch(error) {
    res.status(400).json({error: error.message})
  }
}

exports.findAll = async (req,res) => {
  try {
    const todos = await todoDAO.findAll();
    res.status(200).json({ status: true, data: todos });
  } catch (error) {
    res.status(500).json({ status: false, error: 'Internal server error' });
  }
}

exports.readById = async (req, res) => {
  const todoId = req.params.id
  try {
    const todo = await todoDAO.readById(todoId)
    res.status(200).json ({ status: true, data: todo})
  } catch (error)
 {
  res.status(500).json({ status: false, error: 'sever error readById'})
 }}

exports.updateById = async (req, res) => {
  const todoId = req.params.id
  const todoData = req.body
  try {
    const todo = await todoDAO.update(todoId, todoData)
    res.status(200).json ({ status: true, data: todo})
  } catch (error)
 {
  res.status(500).json({ status: false, error: 'sever error updateById'})
 }
}

exports.deleteById = async (req, res) => {
  const todoId = req.params.id
  if (!todoId){
    return res.status(400).json({
      status: false,
      error: 'Todo ID is required'
    })
  }
  
  try {
    const deleteTodo = await todoDAO.deleteTodoById(todoId) 

    if (!deleteTodo){
      return res.status(404).json({
        status: false,
        error: 'Todo not found'
      })
    } else {
      res.status(200).json({
        status: true,
        message: `Todo deleted successfully`,
      })
    }
  } catch (error) {
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}
```
### utils.swagger.js
```js
const m2s = require('mongoose-to-swagger');
const Todo = require('../models/todo.models')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      version: "1.0.0",
      title: "todo angular learning backend",
      description: "simple todo for learning angular front",
    },
    components: {
      schemas: {
        Todo: m2s(Todo)
      },
      // securitySchemes: {
      //   bearerAuth: {
      //     type: "http",
      //     scheme: "bearer",
      //     bearerFormat: "JWT"
      //   }
      // }
    },
    // security: [
    //   {
    //     bearerAuth: []
    //   }
    // ]
  },
  // 👇 This is the critical part: tell swagger-jsdoc where to find your route/controller annotations
  apis: ['./routes/*.js', './controllers/*.js'], // adjust paths if needed
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
```

### routes/todo.routes.js + swagger notes
```js
const express = require('express');
const router = express.Router()
const todoController = require('../controllers/todo.controller')

/**
 * @swagger
 * /api/todo:
 *   post:
 *     summary: Add a new todo
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: AName
 *               todo:
 *                 type: string
 *                 example: to do something
 *     responses:
 *       201:
 *         description: The todo was added
 *       400:
 *         description: Invalid input
 */
router.post('/', todoController.create)

/**
 * @swagger
 * /api/todo:
 *   get:
 *     summary: Get all todos
 *     tags: [Todo]
 *     responses:
 *       200:
 *         description: List of todos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Server error
 */
router.get ('/', todoController.findAll)

/**
 * @swagger
 * /api/todo/{id}:
 *   get:
 *     summary: Get todo by id
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo id
 *     responses:
 *       200:
 *         description: The requested todo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Server error
 */
router.get ('/:id', todoController.readById)

/**
 * @swagger
 * /api/todo/{id}:
 *   put:
 *     summary: Update todo by id
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: AChangedName
 *               todo:
 *                 type: string
 *                 example: to do something else
 *     responses:
 *       200:
 *         description: The updated todo
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Server error
 */
router.put ('/:id', todoController.updateById)


/**
 * @swagger
 * /api/todo/{id}:
 *   delete:
 *     summary: Delete todo by id
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Todo id
 *     responses:
 *       200:
 *         description: Todo deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *       404:
 *         description: Todo not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', todoController.deleteById)

module.exports = router
```
- tested with swagger and all ok

# Frontend with angular
## boilerplate
```bash
ng new simpleTodoAngular
```
#### στο tsconfig.json
```
    "baseUrl": "./",
```
#### bootstrap
```bash
npm install bootstrap
```
#### angular.json
 (προσοχη στα /)
```
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
],
```` 

```bash
npm install --save-dev prettier
```

φτιάχνω αρχείο .pretierrc
```
{
  "overrides": [{
    "files": "*.html",
    "options": {
      "parser": "angular"
    }
  }]
}
```
## create header and menu component with area for showing sub-components

#### app.routes.ts
// εδώ εχουμε τα διαφορετικά routes το single page app. αναλόγος σε ποιο url/ βρησκομαι θα έχει μια περιοχή στην οθόνη που θα μου εμφανίζει το περιεχόμενο του αντίστοιχου component. Πχ εδώ αν πάω στο /welcome θα μου εμφανίζει το WelcomeComponent
```ts
// εδώ εχουμε τα διαφορετικά routes το single page app. αναλόγος σε ποιο url/ βρησκομαι θα έχει μια περιοχή στην οθόνη που θα μου εμφανίζει το περιεχόμενο του αντίστοιχου component. Πχ εδώ αν πάω στο /welcome θα μου εμφανίζει το WelcomeComponent

import { Routes } from '@angular/router';
import {WelcomeComponent } from './components/welcome/welcome.component'

export const routes: Routes = [
  { path:'welcome', component: WelcomeComponent },
  { path: '', redirectTo:'/welcome', pathMatch:'full' }
];
```
- δημιουργεία του μενου και δημιουργεία ενώς δοκιμαστικού welcome component
```bash
ng generate component components/list-menu
ng generate component components/welcome
```

#### list-menu-component.ts
```ts
import { Component } from '@angular/core';
// αυτά γίνανε import γιατί χρησιμοποιούνται στην html του menu.
// αυτό που κάνουν είναι να κάνουνε Link σε εσωτερικές ψευδοσελίδες
// οτι μπαίνει εδώ θα πρέπει να μπεί και παρακάτω στο imports [Α]
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  // [Α] μπαίνουν και εδώ
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-menu.component.html',
  styleUrl: './list-menu.component.css'
})
export class ListMenuComponent {
  // αυτο το μενού θα εμπλουτιστεί σιγα σιγά με τις διαφορες επιλογές του μενού
  // τα text και linkName καλούνται στην html
  // το app-welcome απο το @component/selector του welcome component ts
  menu = [
    { text: 'Welcome', linkName: 'welcome' }
  ]
}
```

- η αντίστοιχη html του μενου
#### list-menu-component.html
```html
<p>list-menu works!</p>
<div class="list-group">
  <!-- για κάθε entry του μενου που ορίζετε στο ts του component -->
  @for (entry of menu; track entry) {
    <!-- φτιάξε ένα λινκ -->
    <!-- routerLink που να στέλνει το λινκ. -->
    <a
    class='list-group-item list-group-item-action text-truncate'
      [routerLink]="entry.linkName"
      [routerLinkActive] = "['active']"
    >{{entry.text}}</a>
  }
</div>
```

- επειδή ακόμα δεν μου εμφανίζετε τίποτα θα πρέπει το μενου να καταχωρηθεί στο κεντρικό app ts και html
#### app.components.html
```html
<!-- δηαλδή να μου εμφανίζει το μενου και να έχει χώρο για να εμφανίζει το περιεχόμενο του κάθε component. θα πρέπει να γίνουν import και στο ts -->
<app-list-menu></app-list-menu>
<router-outlet></router-outlet>
```

#### app.components.ts
```ts
import { Component } from '@angular/core';
// αυτό μου φτιάχνει έναν χώρο ως tag για να εμφανίζονται τα περιεχόμενα του κάθε υποcomponent σε κάθε ψευδοσελίδα του single page app. παίρνει τα routes του απο το αρχείο app.routes.ts
// οτι μπαίνει εδώ πρέπει να προστεθεί και στο @component- imports [A]
import { RouterOutlet } from '@angular/router';
import { ListMenuComponent } from './components/list-menu/list-menu.component'

@Component({
  selector: 'app-root',
  // [A]
  imports: [RouterOutlet, ListMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simpleTodoAngular';
}
```

#### app.components.html
- φτιαχνω λιγο την εμφάνηση του html με Bootstrap
```html
<header class="bg-primary text-white p-3 sticky-top">
  <div class="container">
    <h1>Simple ToDo app</h1>
    <p>learning angular</p>
  </div>
</header>

<div class="d-flex vh-100">
  <app-list-menu class="text-nowrap w-25   bg-light p-3 border-end"></app-list-menu>
  <span class="flex-grow-1 p-2 text-nowrap w-75">
    <router-outlet></router-outlet>  
  </span>
</div>
```

## create random number simple sub-component
- το ng add κανει install και τις ρυθμήσεις στα σετινγκσ
```bash
ng add @angular/material
```

```bash
ng generate component components/random
```
- αρχικά προσθέτουμε το νέου component στο routes/app/menu

#### app.routes.ts
```ts
import { RandomComponent } from './components/random/random.component'

  { path: 'random', component: RandomComponent},
```

#### list-menu.components.ts
```ts
  menu = [
    { text: 'Welcome', linkName: 'welcome' },
    { text: 'Random', linkName: 'random'}
  ]
```

- φτιαχνουμε την λογική του τυχαίου αρηθμού
#### random.components.ts
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {
  // οι μεταβλητές που χρειάζομαι. τις αρχικοποιώ για να μην έχω ΝαΝ
  userInput: number = 0
  min: number = 0
  max: number = 100
  // αυτήν θα την καλέσω στη html με {{}} γιατί είναι το αποτέλεσμά μου
  randomNum: number = 100
  temp: number | null = null

  generateRandomNum = () => {
    // αν η max μικροτερη απο min τις κάνω swap
    if (this.max < this.min) {
      this.temp = this.max
      this.max = this.min
      this.min = this.temp
    }
    this.randomNum = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  }
  /*
  Σε react αυτο θα γραφόταν (με useState) 

  const handleMinChange = (e) => {
    setMin(Number(e.target.value));
  };
  
  η παράξενη συνταξη είναι γιατί η ts θέλει type asertion. 
  By default, TypeScript thinks event.target is just a generic "EventTarget" (could be any element)
  We're telling TypeScript: "No, trust me, this is specifically an HTML input element"
  */
  onMinInput(event: Event) {
    this.min = Number((<HTMLInputElement>event.target).value);
  }

  onMaxInput(event: Event) {
    this.max = Number((<HTMLInputElement>event.target).value);
  }
}
```

#### random.component.html
```html
<div class="random">
  <h1>Random number generator</h1>

<!-- τα βάζω όλα σε ένα d-flex div -->
<!-- class="form-control" είναι bootstrap -->
<!-- (input)="onMinInput($event)" οι παρενθέσεις λένε οτι είναι event binding. το $event κουβαλαέι τα data στο componenet και τα πιάνει με το  onMinInput(event: Event) {} -->
  <div class="d-flex gap-2">
    <div class="mt-2 d-flex flex-column gap-2 w-25">
      <label for="">Min num</label>
      <input 
        type="number" 
        class="form-control" 
        (input)="onMinInput($event)"
      >
      <span class="text-bg-info p-2">Current min {{ min }}</span>
    </div>
    <div class="mt-2 d-flex flex-column gap-2 w-25">
      <label for="">Max num</label>
      <input 
        type="number" 
        class="form-control"
        (input)="onMaxInput($event)"
      >
      <span class="text-bg-info p-2">Current max {{ max }}</span>
    </div>
  </div>

  <!-- Button to generate new number -->
  <p class="text-muted">Between {{ min }} and {{ max }}</p>

  <button class="generate-btn" (click)="generateRandomNum()">
    Generate New Number
  </button>

  <h3>Generated Number: <span class="text-primary">{{ randomNum }}</span></h3>

</div>

<script>
  /*
( )	- (click)="doStuff()"	- Event binding (output)
[ ]	- [value]="data"	- Property binding (input)
[( )]	- [(ngModel)]="name"	- Two-way binding (input + output)
$	- $event	- Event object (passed to handlers)
#	- #myInput	- Template reference variable
  */
</script>
```

## showcase connect with internet api sub-component

## todo sub-component