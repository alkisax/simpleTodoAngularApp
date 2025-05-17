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

## create boiler plate

## create header and menu component with area for showing sub-components

## create roll a dice simple sub-component

## showcase connect with internet api sub-component

## todo sub-component