# Angular Learning Project - Todo App with Weather & Random Generator

A comprehensive full-stack learning project built with **Angular 19 (frontend)** and **Node.js/Express (backend)** that demonstrates modern web development techniques. The application combines multiple features to showcase different aspects of development including API integration, database operations, and interactive UI components.

## 🔗 Project Links
- [Live Demo](https://simpletodoangularapp.onrender.com/)
- [Full Documentation](https://github.com/alkisax/simpleTodoAngularApp/blob/main/README.md)
- [GitHub Repository](https://github.com/alkisax/simpleTodoAngularApp)
- [Step-by-Step Development Guide](https://github.com/alkisax/simpleTodoAngularApp/blob/main/instractionsTodoAngular.md)
- [swagger api-docs](https://simpletodoangularapp.onrender.com/api-docs/)

## 🚀 Key Features
### 1. Welcome Page
- Simple landing page with an image
- Introduction to the application
### 2. Random Number Generator
- Generates random numbers between custom min/max values
- Automatic range correction (swaps min/max if inverted)
### 3. Weather API Integration
- Fetches current weather data from OpenWeatherMap API
- Displays weather information in a Material card
- Defaults to Athens, Greece
### 4. Full CRUD Todo Application
- **Create**: Add new todos with username and task
- **Read**: View all todos or search by ID
- **Update**: Modify existing todos
- **Delete**: Remove todos with confirmation
- Connected to a Node.js/Express/MongoDB backend

##  💻 Technology Stack
### Frontend (Angular)
- **Angular 19** - Core framework
- **Angular Material** - UI components
- **Reactive Forms** - Form handling
- **New Control Flow** (`@if`, `@for`) - Modern template syntax
- **HTTP Client** - API communication
### Backend (Node.js/Express)
- **Express.js** - Web framework
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Swagger/OpenAPI** - API documentation
- **dotenv** - Environment variables
### Database
- **MongoDB** - NoSQL database
### APIs
- **OpenWeatherMap API** - Weather data

## 📚 Learning Outcomes
This project was created to learn and demonstrate:
- Angular component architecture
- Reactive forms and validation
- HTTP client and API integration
- State management without external libraries
- Modern Angular features (new control flow)
- Full-stack application development
- REST API design with Node.js/Express
- MongoDB database integration
- API documentation with Swagger

## Installation & Setup
### Backend
1. Navigate to `/backend`
2. Create `.env` file with your MongoDB URI and API keys
3. Run: `npm install`
### Frontend
1. Navigate to /frontend
2. Run:
```bash
npm install
ng serve
```
3. Open http://localhost:4200 in your browser

## Preview

### Welcome Page  
![Welcome](https://github.com/alkisax/simpleTodoAngularApp/blob/main/screenshots/welcome.png)

### Random Number Generator  
![Random Number](https://github.com/alkisax/simpleTodoAngularApp/blob/main/screenshots/random.png)

### Weather Page  
![Weather](https://github.com/alkisax/simpleTodoAngularApp/blob/main/screenshots/weather.png)

### Todo App - List View  
![Todo List](https://github.com/alkisax/simpleTodoAngularApp/blob/main/screenshots/todo1.png)

### Todo App - Edit View  
![Todo Edit](https://github.com/alkisax/simpleTodoAngularApp/blob/main/screenshots/todo2.png)