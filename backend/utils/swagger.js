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