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