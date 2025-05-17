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