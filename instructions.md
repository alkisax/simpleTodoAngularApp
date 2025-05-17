<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [Οδηγίες δημιουργίας Combined Login Stripe Nodemailer App](#-combined-login-stripe-nodemailer-app)
- [αρχικοποίηση του back  και του Front](#-back-front)
      + [back](#back)
         - [package.json](#packagejson)
      + [Front](#front)
         - [package.json](#packagejson-1)
         - [.env](#env)
   * [βασικο boiler plate για back](#-boiler-plate-back)
         - [server.js](#serverjs)
         - [app.js](#appjs)
   * [βασικό boilerplate για φροντ](#-boilerplate-)
         - [main.jsx](#mainjsx)
         - [App.jsx](#appjsx)
- [Δημιουργία back logger](#-back-logger)
         - [logger/logger.js](#loggerloggerjs)
- [Δημιουργεία swagger documentation](#-swagger-documentation)
         - [swagger.js](#swaggerjs)
         - [app.js](#appjs-1)
- [Δημιουργια admin](#-admin)
   * [Back](#back-1)
         - [admin.models.js](#adminmodelsjs)
         - [admin.dao.js](#admindaojs)
         - [admin.controller.js](#admincontrollerjs)
         - [admin.routes.js](#adminroutesjs)
         - [swagger για admin routes](#swagger-admin-routes)
         - [app.js](#appjs-2)
   * [jest testing for admin](#jest-testing-for-admin)
         - [package.json](#packagejson-2)
         - [__test__/admin.test.js](#testadmintestjs)
- [δημιουργία admin login](#-admin-login)
         - [auth.service.js](#authservicejs)
         - [auth.controller.js](#authcontrollerjs)
         - [middleware/verification.middleware.js](#middlewareverificationmiddlewarejs)
      + [auth.routes.js](#authroutesjs)
         - [swagger για auth routes](#swagger-auth-routes)
         - [app.js](#appjs-3)
         - [με ποστμαν](#-)
         - [__test__/auth.test](#testauthtest)
- [front login](#front-login)
         - [App.jsx](#appjsx-1)
         - [ProtectedRoute.jsx](#protectedroutejsx)
         - [Appbar.jsx](#appbarjsx)
         - [Home.jsx /](#homejsx-)
         - [LoginForm.jsx /login](#loginformjsx-login)
   * [Είναι ακόμα προβληματικό. To log in γινετε μεσο google αλλα](#-to-log-in-google-)
         - [GoogleSucces.jsx](#googlesuccesjsx)
- [Participant Backend](#participant-backend)
         - [participant.models.js](#participantmodelsjs)
         - [participant.dao.js](#participantdaojs)
         - [participant.controller.js](#participantcontrollerjs)
         - [participant.routes.js](#participantroutesjs)
         - [swagger documentation for paritcipant routes](#swagger-documentation-for-paritcipant-routes)
         - [app.js](#appjs-4)
- [transaction Backend](#transaction-backend)
         - [transaction.models.js](#transactionmodelsjs)
         - [transaction.dao.js](#transactiondaojs)
         - [transactionController.js](#transactioncontrollerjs)
         - [transaction.routes.js](#transactionroutesjs)
         - [transaction swagger documentation comments](#transaction-swagger-documentation-comments)
         - [app.js](#appjs-5)
- [Admin pannel Front ens](#admin-pannel-front-ens)
         - [AdminPanel.jsx](#adminpaneljsx)
         - [Participants.jsx](#participantsjsx)
         - [App.jsx](#appjsx-2)
         - [UserDetail.jsx](#userdetailjsx)
         - [NewParticipantForm.jsx](#newparticipantformjsx)
         - [Transactions.jsx](#transactionsjsx)
- [nodemailer](#nodemailer)
   * [back end διαχείρηση του mailer](#back-end-mailer)
         - [email.routes.js](#emailroutesjs)
         - [email.routes.js](#emailroutesjs-1)
         - [swagger documentation for email routes](#swagger-documentation-for-email-routes)
         - [app.js](#appjs-6)
- [Stripe CheckOut](#stripe-checkout)
   * [back end διαχείρηση του Stripe](#back-end-stripe)
         - [services/striper.service.js](#servicesstriperservicejs)
         - [stripe.controller.js](#stripecontrollerjs)
         - [stripe.routes.js](#striperoutesjs)
         - [swagger documentation for stripe routes](#swagger-documentation-for-stripe-routes)
         - [app.js](#appjs-7)
         - [__test__/stripe.test.js](#teststripetestjs)
   * [front end διχείρηση του Stripe](#front-end-stripe)
         - [ParticipantInfoForm.jsx](#participantinfoformjsx)
         - [Checkout.jsx](#checkoutjsx)
         - [Home.jsx](#homejsx)
         - [App.jsx](#appjsx-3)
- [App.jsx -> Appbar επάνω δεξια](#appjsx-appbar-)
- [**BIASED TAROT**](#biased-tarot)
- [Biased Tarot backend](#biased-tarot-backend)
         - [.env](#env-1)
         - [app.js](#appjs-8)
         - [query.models.js](#querymodelsjs)
      + [tarot.service.js](#tarotservicejs)
         - [gpt.service.js](#gptservicejs)
         - [tarot.controller.js](#tarotcontrollerjs)
         - [tarot.routes.js](#tarotroutesjs)
         - [swager docs for tarot routes](#swager-docs-for-tarot-routes)
         - [__test___/tarot.test.js](#__test___tarottestjs)
- [Biased Tarot Frontend](#biased-tarot-frontend)
         - [App.jsx](#appjsx-4)
         - [Home.jsx](#homejsx-1)
         - [TarotHome.jsx](#tarothomejsx)
         - [Language.jsx](#languagejsx)
         - [Question.jsx](#questionjsx)
         - [CardImages.jsx](#cardimagesjsx)
         - [Settings.jsx](#settingsjsx)
         - [InnerSettings.jsx](#innersettingsjsx)
         - [Deck1.jsx](#deck1jsx)
- [runs on https://revistedtarotbiasapp.onrender.com](#runs-on-httpsrevistedtarotbiasapponrendercom)
   * [*correction* dont save "what do i need to know today"](#correction-dont-save-what-do-i-need-to-know-today)
         - [tarot.controller.js](#tarotcontrollerjs-1)
- [add a user sign up / sign in για να δείξω ξεκάθαρα μια CRUD λειτουργεία](#add-a-user-sign-up-sign-in-crud-)
- [backend users](#backend-users)
   * [δημιουργία αρχείων για users](#-users)
         - [users.model.js](#usersmodeljs)
         - [user.dao.js](#userdaojs)
         - [user.controller.js](#usercontrollerjs)
         - [user.routes (με swagger)](#userroutes-swagger)
   * [θα φτιάξω ένα δικό του ανεξάρτητο userAuth αντιγράφοντας το auth για να μην επιρεασω την λειτουργεία αυτού που ήδη λειτουργει. ](#-userauth-auth-)
         - [populateUser.middleware.js](#populateusermiddlewarejs)
         - [userAuth.service.js](#userauthservicejs)
         - [user.auth.controller.js](#userauthcontrollerjs)
         - [userAuth. routes (με  swagger)](#userauth-routes-swagger)
   * [αλλαγές στο queries ωστε να έχει importand και να επικοινωνεί με το user](#-queries-importand-user)
         - [query.models.js](#querymodelsjs-1)
         - [query.dao.js](#querydaojs)
         - [query.controller.js](#querycontrollerjs)
         - [query.routes.js](#queryroutesjs)
- [back end corrections](#back-end-corrections)
         - [chagne to middleware, user dao and tarot.controller δυσκολο προβλημα](#chagne-to-middleware-user-dao-and-tarotcontroller-)
- [front end users](#front-end-users)
         - [App.jsx](#appjsx-5)
         - [AppBar.jsx](#appbarjsx-1)
         - [UserLoginForm.jsx](#userloginformjsx)
         - [UserSignup.jsx](#usersignupjsx)
         - [Queries.jsx](#queriesjsx)
         - [AdminPanel.jsx ++](#adminpaneljsx-)
         - [UserList.jsx](#userlistjsx)
         - [UserDetails.jsx](#userdetailsjsx)
- [instructions](#instructions)
         - [App.jsx](#appjsx-6)
         - [AppBar.jsx](#appbarjsx-2)
         - [Instructions.jsx](#instructionsjsx)

<!-- TOC end -->

- [Οδηγίες δημιουργίας Combined Login Stripe Nodemailer App](#--------------------combined-login-stripe-nodemailer-app)
- [αρχικοποίηση του back  και του Front](#-----------------back----------front)
    + [back](#back)
      - [package.json](#packagejson)
    + [Front](#front)
      - [package.json](#packagejson-1)
      - [.env](#env)
  * [βασικο boiler plate για back](#-------boiler-plate-----back)
      - [server.js](#serverjs)
      - [app.js](#appjs)
  * [βασικό boilerplate για φροντ](#-------boilerplate----------)
      - [main.jsx](#mainjsx)
      - [App.jsx](#appjsx)
- [Δημιουργία back logger](#-----------back-logger)
      - [logger/logger.js](#logger-loggerjs)
- [Δημιουργεία swagger documentation](#------------swagger-documentation)
      - [swagger.js](#swaggerjs)
      - [app.js](#appjs-1)
- [Δημιουργια admin](#-----------admin)
  * [Back](#back)
      - [admin.models.js](#adminmodelsjs)
      - [admin.dao.js](#admindaojs)
      - [admin.controller.js](#admincontrollerjs)
      - [admin.routes.js](#adminroutesjs)
      - [swagger για admin routes](#swagger-----admin-routes)
      - [app.js](#appjs-2)
  * [jest testing for admin](#jest-testing-for-admin)
      - [package.json](#packagejson-2)
      - [__test__/admin.test.js](#--test---admintestjs)
- [δημιουργία admin login](#-----------admin-login)
  * [*Το google login έχει προβληματα. Το βάζω εδω αλλα αργότερα θα αλαχθει* https://console.cloud.google.com/apis/credentials](#----google-login-------------------------------------------------------https---consolecloudgooglecom-apis-credentials)
      - [auth.service.js](#authservicejs)
      - [auth.controller.js](#authcontrollerjs)
      - [middleware/verification.middleware.js](#middleware-verificationmiddlewarejs)
    + [auth.routes.js](#authroutesjs)
      - [swagger για auth routes](#swagger-----auth-routes)
      - [app.js](#appjs-3)
      - [με ποστμαν](#----------)
      - [__test__/auth.test](#--test---authtest)
- [front login](#front-login)
      - [App.jsx](#appjsx-1)
      - [ProtectedRoute.jsx](#protectedroutejsx)
      - [Appbar.jsx](#appbarjsx)
      - [Home.jsx /](#homejsx--)
      - [LoginForm.jsx /login](#loginformjsx--login)
- [Participant Backend](#participant-backend)
      - [participant.models.js](#participantmodelsjs)
      - [participant.dao.js](#participantdaojs)
      - [participant.controller.js](#participantcontrollerjs)
      - [participant.routes.js](#participantroutesjs)
      - [swagger documentation for paritcipant routes](#swagger-documentation-for-paritcipant-routes)
      - [app.js](#appjs-4)
- [transaction Backend](#transaction-backend)
      - [transaction.models.js](#transactionmodelsjs)
      - [transaction.dao.js](#transactiondaojs)
      - [transactionController.js](#transactioncontrollerjs)
      - [transaction.routes.js](#transactionroutesjs)
      - [transaction swagger documentation comments](#transaction-swagger-documentation-comments)
      - [app.js](#appjs-5)
- [Admin pannel Front ens](#admin-pannel-front-ens)
      - [AdminPanel.jsx](#adminpaneljsx)
      - [App.jsx](#appjsx-2)
      - [UserDetail.jsx](#userdetailjsx)
      - [NewParticipantForm.jsx](#newparticipantformjsx)
      - [Transactions.jsx](#transactionsjsx)
- [nodemailer](#nodemailer)
  * [back end διαχείρηση του mailer](#back-end----------------mailer)
      - [email.routes.js](#emailroutesjs)
      - [email.routes.js](#emailroutesjs-1)
      - [swagger documentation for email routes](#swagger-documentation-for-email-routes)
      - [app.js](#appjs-6)
- [Stripe CheckOut](#stripe-checkout)
  * [back end διαχείρηση του Stripe](#back-end----------------stripe)
      - [services/striper.service.js](#services-striperservicejs)
      - [stripe.controller.js](#stripecontrollerjs)
      - [stripe.routes.js](#striperoutesjs)
      - [swagger documentation for stripe routes](#swagger-documentation-for-stripe-routes)
      - [app.js](#appjs-7)
      - [__test__/stripe.test.js](#--test---stripetestjs)
  * [front end διχείρηση του Stripe](#front-end---------------stripe)
      - [ParticipantInfoForm.jsx](#participantinfoformjsx)
      - [Checkout.jsx](#checkoutjsx)
      - [Home.jsx](#homejsx)
      - [App.jsx](#appjsx-3)
- [προβλημα Google login](#---------google-login)
- [mail jest test](#mail-jest-test)

<!-- TOC --><a name="-combined-login-stripe-nodemailer-app"></a>
# Οδηγίες δημιουργίας Combined Login Stripe Nodemailer App

<!-- TOC --><a name="-back-front"></a>
# αρχικοποίηση του back  και του Front

<!-- TOC --><a name="back"></a>
### back

```bash
npm install express
npm install mongoose
npm install dotenv
npm install bcrypt
npm install jsonwebtoken
npm install swagger-ui-express
npm install mongoose-to-swagger
npm install swagger-jsdoc
npm install winston
npm install winston-daily-rotate-file
npm install winston-mongodb
npm install google-auth-library
npm install axios
npm install cors
npm install morgan
npm install nodemailer
npm install stripe
npm install --save-dev nodemon
npm install --save-dev supertest
npm install --save-dev cross-env
npm install --save-dev jest
npm install --save-dev @babel/preset-env
npm install --save-dev @babel/preset-react
npm install --save-dev eslint-plugin-jest
```

<!-- TOC --><a name="packagejson"></a>
#### package.json
```js
{
  "name": "combinedstripeloginapp",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "test": "cross-env NODE_ENV=test jest --coverage --testTimeout=50000 --runInBand",
    "dev": "node --watch server.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "axios": "^1.8.4",
    "bcrypt": "^5.1.1",
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "google-auth-library": "^9.15.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.13.2",
    "mongoose-to-swagger": "^1.5.1",
    "morgan": "^1.10.0",
    "nodemailer": "^6.10.1",
    "prop-types": "^15.8.1",
    "stripe": "^18.0.0",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1",
    "winston": "^3.17.0",
    "winston-daily-rotate-file": "^5.0.0",
    "winston-mongodb": "^6.0.0"
  },
  "devDependencies": {
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-react": "^7.26.3",
    "cross-env": "^7.0.3",
    "deep-freeze": "^0.0.1",
    "eslint-plugin-jest": "^28.11.0",
    "jest": "^29.7.0",
    "nodemon": "^3.1.10",
    "supertest": "^7.1.0"
  }
}
```

<!-- TOC --><a name="front"></a>
### Front
```bash
npm create vite@latest frontend -- --template react
npm install
npm install @stripe/stripe-js
npm install axios
npm install bootstrap
npm install jwt-decode
npm install react
npm install react-bootstrap
npm install react-dom
npm install react-router-dom
npm install --save-dev @eslint/js
npm install --save-dev @types/react
npm install --save-dev @types/react-dom
npm install --save-dev @vitejs/plugin-react
npm install --save-dev eslint
npm install --save-dev eslint-plugin-react-hooks
npm install --save-dev eslint-plugin-react-refresh
npm install --save-dev globals
npm install --save-dev vite
```
<!-- TOC --><a name="packagejson-1"></a>
#### package.json
```js
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@stripe/stripe-js": "^7.2.0",
    "axios": "^1.8.4",
    "bootstrap": "^5.3.5",
    "jwt-decode": "^4.0.0",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.9",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.5.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.22.0",
    "@types/react": "^19.0.10",
    "@types/react-dom": "^19.0.4",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.22.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.19",
    "globals": "^16.0.0",
    "vite": "^6.3.1"
  }
}
```

<!-- TOC --><a name="env"></a>
#### .env
**Στo deploy ολα τα URLs αλλάξανε**
```
MONGODB_URI = mongodb+srv://alkisax:{***}@cluster0.8ioq6.mongodb.net/combined?retryWrites=true&w=majority&appName=Cluster0
MONGODB_TEST_URI = mongodb+srv://alkisax:{***}@cluster0.8ioq6.mongodb.net/combined_TEST?retryWrites=true&w=majority&appName=Cluster0

BACK_END_PORT = 3001

SECRET = ***
JWT_SECRET=***

GOOGLE_CLIENT_ID=***
GOOGLE_CLIENT_SECRET=***
REDIRECT_URI=http://localhost:3001/api/login/google/callback

EMAIL_USER=alkisax@zohomail.eu
EMAIL_PASS_USER=***
EMAIL_PASS=***

APP_URL=http://localhost:3001
FRONTEND_URL=http://localhost:5173
BACKEND_URL=http://localhost:3001

STRIPE_SECRET_KEY=***
```

<!-- TOC --><a name="-boiler-plate-back"></a>
## βασικο boiler plate για back
<!-- TOC --><a name="serverjs"></a>
#### server.js
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

<!-- TOC --><a name="appjs"></a>
#### app.js
```js
// require('dotenv').config()
const express = require('express')
const cors = require('cors')
// θα προστεθούν πολλα τέτοια endpoints οπως προχωρά η εφαρμογη
const adminRoutes = require('./routes/admin.routes')

// αυτό ειναι κάτι που ίσως μου χρειαστεί στο deploy και δεν το καταλαβαίνω καλα. (και παρακάτω μαζί με αυτό)
// const path = require('path'); // requires explanation. added for rendering front page subpages

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
app.use('/api/admin', adminRoutes)

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

<!-- TOC --><a name="-boilerplate-"></a>
## βασικό boilerplate για φροντ
<!-- TOC --><a name="mainjsx"></a>
#### main.jsx
```jsx
// το αφαίρεσα γιατί μου έκανε διπλές εγραφές
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// για να μπορώ να χρησιμοποιώ το router για να στέλνω σε διαφορετικές σελλιδες φτιαγμένες απο το front
import { BrowserRouter as Router } from 'react-router-dom' // bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx' // η βασική μου εφαρμογή

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Router>
      <App />
    </Router>
  // </StrictMode>,
)
```
<!-- TOC --><a name="appjsx"></a>
#### App.jsx
```jsx
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate
} from 'react-router-dom'
import { Container } from 'react-bootstrap'

const url = 'http://localhost:3001/api'

const App = () => {
  const [message, setMessage] = useState('')

  const navigate = useNavigate()
  
  return (
    <div className="bg-dark text-light  d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
      {/* Routes here handle sub-pages like /admin */}
      <Routes>
        <Route path="/" element={
          <>
            <Home 
              message={message}
              setMessage={setMessage}
              url={url}
            />
          </>
        } /> 
      </Routes>
    </div>
  )
}
export default App
```
<!-- TOC --><a name="-back-logger"></a>
# Δημιουργία back logger
<!-- TOC --><a name="loggerloggerjs"></a>
#### logger/logger.js
```js
const { createLogger, format, transports } = require('winston');
require('winston-mongodb');

const logger = createLogger({
  format: format.combine(
    format.timestamp(),
    format.simple()
  ),
  transports: [
    new transports.Console(), // show logs in terminal

    // θα μπορούσα να επιλέξω να σωζει και σε αρχεί ή σε Mongo αλλα μιας και είμαι σε dev το αφήνω εκτών
    // new transports.File({      // save to file
    //   filename: 'logs/all.log'
    // }),

    // new transports.MongoDB({   // save to MongoDB
    //   db: process.env.MONGODB_URI || 'mongodb://localhost:27017/logsdb',
    //   collection: 'logs',
    //   level: 'info',  // logs info and above (warn, error)
    // })
  ]
});

module.exports = logger;
```
<!-- TOC --><a name="-swagger-documentation"></a>
# Δημιουργεία swagger documentation
<!-- TOC --><a name="swaggerjs"></a>
#### swagger.js
```js
const m2s = require('mongoose-to-swagger');
const Admin = require('./models/admins.models');
const Participant = require('./models/participant.models')
const Transaction = require('./models/transaction.models')
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      version: "1.0.0",
      title: "Stripe and Auth API",
      description: "A boilerplate for login and stripe checkout",
    },
    components: {
      schemas: {
        Admin: m2s(Admin),
        Participant: m2s(Participant),
        Transaction: m2s(Transaction),
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  // 👇 This is the critical part: tell swagger-jsdoc where to find your route/controller annotations
  apis: ['./routes/*.js', './controllers/*.js'], // adjust paths if needed
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
```

<!-- TOC --><a name="appjs-1"></a>
#### app.js
```js
const swaggerSpec = require('./swagger');
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

<!-- TOC --><a name="-admin"></a>
# Δημιουργια admin
<!-- TOC --><a name="back-1"></a>
## Back
<!-- TOC --><a name="adminmodelsjs"></a>
#### admin.models.js
έχει
- username - required
- name
- roles
- email
- hashedPassword - required

```js
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const adminSchema = new Schema({
  username:{
    type: String,
    required: [true, 'username is required'],
    unique:true
  },
  name:{
    type: String,
    required: false
  },
  roles:{
    type: [String],
    default: ['user']
  },
  email:{
    type: String,
    required: false,
    unique: true
  },
// προσοχή αποθηκεύω hased password και όχι password
  hashedPassword:{
    type: String,
    required: [true, 'password is required'],
  },
},
{
  collection: 'admins',
  timestamps: true
})
module.exports = mongoose.model('Admin', adminSchema)
```
<!-- TOC --><a name="admindaojs"></a>
#### admin.dao.js
```js
const Admin = require('../models/admins.models');

const findAllAdmins = async () => {
  return await Admin.find();
};

const findAdminByUsername = async (username) => {
  return await Admin.findOne({ username });
};

const findAdminByEmail = async (email) => {
  return await Admin.findOne({ email });
};

const createAdmin = async (adminData) => {
  const admin = new Admin(adminData);
  return await admin.save();
};

const deleteAdminById = async (adminId) => {
  return await Admin.findByIdAndDelete(adminId)
}

module.exports = {
  findAllAdmins,
  findAdminByUsername,
  findAdminByEmail,
  createAdmin,
  deleteAdminById
};
```
<!-- TOC --><a name="admincontrollerjs"></a>
#### admin.controller.js
```js
const bcrypt = require('bcrypt') // για να φτιάξω το hashed pass
const logger = require('../utils/logger')
const Admin = require('../models/admins.models')
const adminDAO = require('../daos/admin.dao')

exports.findAll = async (req,res) => {
  try {

    // add later when auth
    // if (!req.headers.authorization) {
    // logger.warn('Unauthorized access attempt to /admins (no token)');
    //   return res.status(401).json({ status: false, error: 'No token provided' });
    // }

    const admins = await adminDAO.findAllAdmins();
    logger.info('Fetched all admins');
    res.status(200).json({ status: true, data: admins });
  } catch (error) {
    logger.error(`Error fetching admins: ${error.message}`);
    res.status(500).json({ status: false, error: 'Internal server error' });
  }
}

exports.create = async (req,res) => {
  let data = req.body

  const username = data.username
  const name = data.name
  const password = data.password
  const email = data.email
  const roles = data.roles

  const SaltOrRounds = 10
  const hashedPassword = await bcrypt.hash(password, SaltOrRounds)

  try {
    const newAdmin = await adminDAO.createAdmin({
      username,
      name,
      email,
      roles,
      hashedPassword
    });

    logger.info(`Created new admin: ${username}`);
    res.status(201).json(newAdmin)
  } catch(error) {
    logger.error(`Error creating admin: ${error.message}`);
    res.status(400).json({error: error.message})
  }
}

exports.deleteById = async (req, res) => {
  const adminId = req.params.id
  if (!adminId){
    return res.status(400).json({
      status: false,
      error: 'Admin ID is required OR not found'
    })
  }
  
  try {
    const deleteAdmin = await adminDAO.deleteAdminById(adminId) 

    if (!deleteAdmin){
      logger.warn('Delete admin called without ID');
      return res.status(404).json({
        status: false,
        error: 'Error deleting admin: not found'
      })
    } else {
      logger.info(`Admin ${deleteAdmin.username} deleted successfully`);
      res.status(200).json({
        status: true,
        message: `Admin ${deleteAdmin.username} deleted successfully`,
      })
    }
  } catch (error) {
    logger.error(`Error deleting admin: ${error.message}`);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}
```
<!-- TOC --><a name="adminroutesjs"></a>
#### admin.routes.js
```js
const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin.controller')
const { verifyToken, checkRole } = require('../middlewares/verification.middleware');


router.get ('/', adminController.findAll)
router.delete('/:id', adminController.deleteById)
router.post('/', adminController.create) // αυτό είναι βασικό και απο εδώ μπορώ να δημιουργισω έναν αντμιν χωρις να μου ζητάει κάποιο authentication
// αυτά θα αλλάξουν αργότερα που θα αποκτήσω και auth
// router.delete('/:id', verifyToken, checkRole('admin'), adminController.deleteById)
// router.get ('/', verifyToken, checkRole('admin'), adminController.findAll)

module.exports = router
```
<!-- TOC --><a name="swagger-admin-routes"></a>
#### swagger για admin routes
```js
/**
 * @swagger
 * /api/admin:
 *   get:
 *     summary: Get all admins
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of admins
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
 *                     $ref: '#/components/schemas/Admin'
 *       401:
 *         description: Unauthorized - No token provided
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: No token provided
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
router.get ('/', verifyToken, checkRole('admin'), adminController.findAll)
// router.get ('/', adminController.findAll)

/**
 * @swagger
 * /api/admin:
 *   post:
 *     summary: Create a new admin
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, name, password, email, roles]
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin123
 *               name:
 *                 type: string
 *                 example: Admin User
 *               password:
 *                 type: string
 *                 example: MySecurePassword1!
 *               email:
 *                 type: string
 *                 format: email
 *                 example: admin@example.com
 *               roles:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["admin"]
 *     responses:
 *       201:
 *         description: Admin created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       400:
 *         description: Bad request - Invalid or missing input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Username already exists
 */
router.post('/', adminController.create)

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     summary: Delete admin by ID
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the admin to delete
 *     responses:
 *       200:
 *         description: Admin deleted successfully
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
 *                   example: Admin admin123 deleted successfully
 *       400:
 *         description: Missing or invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Admin ID is required OR not found
 *       404:
 *         description: Admin not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Error deleting admin: not found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
router.delete('/:id', verifyToken, checkRole('admin'), adminController.deleteById)
```

<!-- TOC --><a name="appjs-2"></a>
#### app.js
```js
const adminRoutes = require('./routes/admin.routes')

app.use('/api/admin', adminRoutes)
```
<!-- TOC --><a name="jest-testing-for-admin"></a>
## jest testing for admin
<!-- TOC --><a name="packagejson-2"></a>
#### package.json
**το script στο test είναι συμαντικο γιατί αλλιώς δεν τρέχουν δυο μαζί test αρχεία**
```json
  "scripts": {
    "test": "cross-env NODE_ENV=test jest --coverage --testTimeout=50000 --runInBand",
    "dev": "node --watch server.js"
  },
```
<!-- TOC --><a name="testadmintestjs"></a>
#### __test__/admin.test.js
```js
const mongoose = require("mongoose");
const request = require("supertest");
const bcrypt = require("bcrypt");
const app = require("../app");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Admin = require("../models/admins.models");
const adminDAO = require("../daos/admin.dao");

// Add this mock at the top of your test file to ensure it doesn't interact with the actual Stripe service during tests.
jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({
    // Mock the methods you need, e.g., charge, paymentIntents, etc.
    charges: {
      create: jest.fn().mockResolvedValue({ success: true })
    }
  }));
});

const TEST_ADMIN = {
  username: "adminuser",
  name: "Admin User",
  email: "adminuser@example.com",
  password: "adminpassword",
  roles: ["admin"]
};

let adminToken;
let adminId;

beforeAll(async () => {
  const saltrounds = 10;
  const hashedPassword = await bcrypt.hash(TEST_ADMIN.password, saltrounds);

  await mongoose.connect(process.env.MONGODB_TEST_URI);
  console.log("Connected to MongoDB for testing");

  await Admin.deleteMany({});

  const newAdmin = await Admin.create({
    username: TEST_ADMIN.username,
    name: TEST_ADMIN.name,
    email: TEST_ADMIN.email,
    hashedPassword,
    roles: TEST_ADMIN.roles
  });

  // Simulate admin login to get token
  const res = await request(app)
    .post("/api/login")
    .send({
      username: TEST_ADMIN.username,
      password: TEST_ADMIN.password
    });
  
  adminToken = res.body.data.token;
  adminId = newAdmin._id;
  console.log("Admin token:", adminToken);
});

afterAll(async () => {
  await Admin.deleteMany({});
  await mongoose.connection.close();
});

describe('GET /api/admins', () => {
  it('should return 200 and list of admins when authorized and admin role', async () => {
    const res = await request(app)
      .get('/api/admin')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.status).toBe(200);
    expect(res.body.status).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it('should return 401 when no token is provided', async () => {
    const res = await request(app)
      .get('/api/admin');

    expect(res.status).toBe(401);
    expect(res.body.status).toBe(false);
  });

  it('should return 403 for non-admin role', async () => {
    const nonAdminToken = 'some-fake-token-for-non-admin';
    const res = await request(app)
      .get('/api/admin')
      .set('Authorization', `Bearer ${nonAdminToken}`);

    expect(res.status).toBe(401);
    expect(res.body.status).toBe(false);
  });
});

describe('POST /api/admins', () => {
  it('should create a new admin and return 201', async () => {
    const newAdmin = {
      username: 'newadmin',
      name: 'New Admin',
      email: 'newadmin@example.com',
      password: 'newadminpassword',
      roles: ['admin']
    };

    const res = await request(app)
      .post('/api/admin')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(newAdmin);

    expect(res.status).toBe(201);
    expect(res.body.username).toBe(newAdmin.username);
    expect(res.body.name).toBe(newAdmin.name);
    expect(res.body.email).toBe(newAdmin.email);
    expect(res.body.roles).toEqual(newAdmin.roles);
  });

  it('should return 500 when fields are missing', async () => {
    const newAdmin = {
      username: 'newadmin'
      // Missing required fields like name, password, etc.
    };

    const res = await request(app)
      .post('/api/admin')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(newAdmin);

    expect(res.status).toBe(500); //errror coming from mongo
  });

  it('should return 400 when username already exists', async () => {
    const existingAdmin = {
      username: 'existingadmin',
      name: 'Existing Admin',
      email: 'existingadmin@example.com',
      password: 'existingpassword',
      roles: ['admin']
    };

    // First, create the admin
    await request(app)
      .post('/api/admin')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(existingAdmin);

    // Try to create the same admin again
    const res = await request(app)
      .post('/api/admin')
      .set('Authorization', `Bearer ${adminToken}`)
      .send(existingAdmin);

    expect(res.status).toBe(400);
  });
});

describe('DELETE /api/admin/:id', () => {
  it('should delete the admin and return 200', async () => {
    const res = await request(app)
      .delete(`/api/admin/${adminId}`)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.status).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.message).toBe(`Admin ${TEST_ADMIN.username} deleted successfully`);
  });

  it('should return 404 when no admin id is provided', async () => {
    const res = await request(app)
      .delete('/api/admin/')
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.status).toBe(404);
  });

  it('should return 404 when admin id is not found', async () => {
    const wrongId = '60d9e3f5b4c2b2d6b8a232c9'; // Invalid ID format
    const res = await request(app)
      .delete(`/api/admins/${wrongId}`)
      .set('Authorization', `Bearer ${adminToken}`);

    expect(res.status).toBe(404);
  });
});
```

*Τωρα που εφτιαξα τον αντμιν μου πρέπει να δημιουργήσω ένα Login για να μπορεί να συνδεθει*

<!-- TOC --><a name="-admin-login"></a>
# δημιουργία admin login
*EDIT: το προβλημα ήταν στο οτι το url και redirect URI μετα την αλλαγή πορτ, έπρεπε να δηλωθούν και στο google console. Το google login έχει προβληματα. Το βάζω εδω αλλα αργότερα θα αλαχθει* https://console.cloud.google.com/apis/credentials
<!-- TOC --><a name="authservicejs"></a>
#### auth.service.js
```js
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { OAuth2Client } = require('google-auth-library')

// δημιουγια τοκεν sevice
generateAccessToken = (user) => {
  // μέσα στο τοκεν βρίσκονται αποθηκευμένες στο string του οι διάφορες πληροφορίες του payload
  const payload = {
    username: user.username,
    email: user.email,
    roles: user.roles,
    id: user._id
  }

  // χρειάζομαι ένα secret δικό μου που το αποθηκεύω στο .env
  const secret = process.env.SECRET
  // μέσα στο options μπορώ να βάλω πότε λίγει
  const options = {
    expiresIn: '1h'
  }
  // με .sign γίνετε η δημιουργία
  const token = jwt.sign(payload, secret, options)
  return token
}

const verifyPassword = async (password, hashedPassword) => {
  // ΠΡΟΣΟΧΗ αυτό είναι bcrypt και οχι JWT που χρησιμοποιώ κατα κύριο λογο και αυτό είναι για εσωτερική χρήση. Mε .compare και δίνοντας το δικό μου pass και το pass απο το input γινετε η επιβεβαίωση
  return await bcrypt.compare(password, hashedPassword)
}

// επιβεβαίωση τοκεν
const verifyAccessToken = (token) => {
  const secret = process.env.SECRET
  try {
    // JWT με .verify επιβεβαιώνει το τοκεν
    const payload = jwt.verify(token, secret)
    return { 
      verified: true, data: payload
    }
  } catch (error) {
    return { 
      verified: false, data: error.message
    }
  }
}

// μου γυρνάει το τοκεν ως αλφαρηθμιτικο
const getTokenFrom = (req) => {
  // το παίρνει απο τους header του request, θα ξεκινάει με bearer
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    // γυρνάω το τοκεν χωρίς το bearer
    const token = authorization.replace('Bearer ', '')
    return token    
  }
  return null
}

const googleAuth = async (code) => {
  // αυτά τα παίρνω απο το https://console.cloud.google.com/apis/credentials
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  // τα παιρνάω στη βιβλιοθήκη το google
  const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

  try {
    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code)
    // console.log("Step 1", tokens)
    oauth2Client.setCredentials(tokens)

    const ticket = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: CLIENT_ID
    });

    // console.log("Step 2")
    const userInfo = await ticket.getPayload();
    return {admin: userInfo, tokens}
  } catch (error) {
    console.log("Error in google authentication", error);
    return { error: "Failed to authenticate with google"}
  }
}

module.exports = {
  generateAccessToken,
  verifyPassword,
  verifyAccessToken,
  getTokenFrom,
  googleAuth
}
```
<!-- TOC --><a name="authcontrollerjs"></a>
#### auth.controller.js
```js
// site με πληροφοριες για το πως να φτιαχτει
// https://github.com/mkarampatsis/coding-factory7-nodejs/blob/main/usersApp/controllers/auth.controller.js
// https://fullstackopen.com/en/part4/token_authentication
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');
// καλώ πράγματα και απο το auth και απο τον admin
const Admin = require('../models/admins.models')
const authService = require('../services/auth.service')
const adminDAO = require('../daos/admin.dao')

const FRONTEND_URL = process.env.FRONTEND_URL
exports.login = async (req,res) => {
  try {
    // μου έχει έρΘει (απο το postman) κάτι σαν object {} με username και password
    const username = req.body.username
    const password = req.body.password

    if (!username) {
      logger.warn("Login attempt missing username");
      return res.status(400).json({
        status: false,
        message: "Username is required"
      });
    }
    
    if (!password) {
      logger.warn("Login attempt missing password");
      return res.status(400).json({
        status: false,
        message: "Password is required"
      });
    }

    // Step 1: Find the admin by username
    const admin = await adminDAO.findAdminByUsername(req.body.username);

    if(!admin){
      logger.warn(`Failed login attempt - user not found: ${username}`);
      return res.status(401).json({
        status: false,
        message: 'Invalid username or password or admin not found'
      })
    }

    // Step 2: Check the password
    const isMatch = await authService.verifyPassword (password, admin.hashedPassword)

    if(!isMatch){
      logger.warn(`Failed login attempt - incorrect password for user: ${username}`);
      return res.status(401).json({
        status: false,
        message: 'Invalid username or password'
      })
    }

    // Step 3: Generate the token
    const token = authService.generateAccessToken(admin)
    logger.info(`Admin ${admin.username} logged in successfully`);

    // Step 4: Return the token and user info
    res.status(200).json({
      status: true,
      data: {
        token: token,
        admin: {
          username: admin.username,
          email: admin.email,
          roles: admin.roles,
          id: admin._id
        }
      }
    })

  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    res.status(400).json({
      status: false,
      data: error.message
    })
  }
}

exports.googleLogin = async(req, res) => {
  // αυτόν τον code μου τον επιστρέφει το google μετά το login
  const code = req.query.code
  if (!code) {
    logger.warn('Google login failed: missing auth code');
    res.status(400).json({status: false, data: "auth code is missing"})
  } 

  // Μέσο στου σερβισ κάνω το google login
  const result = await authService.googleAuth(code);
    logger.info('Google Auth Result', { result });

  // απο τα αποτελέσματ ατου login βάζω σε δύο μεταβλητές το admin και tokens
  const { admin, tokens } = result;

  if (!admin || !admin.email) {
    logger.warn('Google login failed: no email returned');
    return res.status(401).json({ status: false, data: "Google login failed" });
  }

  // 🔐 Create token for your app (JWT etc.)
  // 🛑 Only use existing user
  const dbUser = await Admin.findOne(
    { email: admin.email }
  );

  // συμαντικό: εδω κάνουμε redirect στο front αν το login είναι μέν επιτυχημένο αλλα το μέηλ δεν είναι στα mail των admin
  if (!dbUser) {
    logger.warn(`Google login failed: user with email ${admin.email} not found in DB`);
    return res.redirect(`${FRONTEND_URL}/login?error=not_registered`).json({ status: false, data: "User not registered" });
  }

  const payload = { id: dbUser._id, roles: dbUser.roles };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

  // return res.redirect(`http://localhost:5173/google-success?token=${token}&email=${dbUser.email}`);
  const frontendUrl = process.env.FRONTEND_URL
  logger.info(`Redirecting to: ${frontendUrl}/google-success`);
  
  return res.redirect(`${frontendUrl}/google-success?token=${token}&email=${dbUser.email}`);
}
```
<!-- TOC --><a name="middlewareverificationmiddlewarejs"></a>
#### middleware/verification.middleware.js
```js

const authService = require('../services/auth.service');

/**
 * Middleware to verify JWT token.
 * Attaches decoded user data to `req.user` if valid.
 */
const verifyToken = (req, res, next) => { // το next είναι που το κάνει middleware
  const token = authService.getTokenFrom(req);
  const verificationResult = authService.verifyAccessToken(token);

  if (!verificationResult.verified) {
    console.log(`Unauthorized access attempt with token: ${token}`);
    return res.status(401).json({
      status: false,
      error: verificationResult.data
    });
  }

  req.user = verificationResult.data;
  next();
};

/**
 * Middleware to check if user has required role.
 * Call after verifyToken middleware.
 */
const checkRole = (requiredRole) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !user.roles.includes(requiredRole)) {
      console.log(`Forbidden access by user: ${user?.username || 'unknown'}`);
      return res.status(403).json({
        status: false,
        error: 'Forbidden'
      });
    }

    next();
  };
};

module.exports = {
  verifyToken,
  checkRole
};
```
<!-- TOC --><a name="authroutesjs"></a>
### auth.routes.js
```js
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

router.post('/', authController.login)
router.get('/google/callback', authController.googleLogin)

module.exports = router
```
<!-- TOC --><a name="swagger-auth-routes"></a>
#### swagger για auth routes
```js
/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login with username and password
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin123
 *               password:
 *                 type: string
 *                 example: MySecurePassword1!
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                     admin:
 *                       type: object
 *                       properties:
 *                         username:
 *                           type: string
 *                           example: admin123
 *                         email:
 *                           type: string
 *                           format: email
 *                           example: admin@example.com
 *                         roles:
 *                           type: array
 *                           items:
 *                             type: string
 *                           example: ["admin"]
 *                         id:
 *                           type: string
 *                           example: 609e12672f1b2c001f2b1234
 *       400:
 *         description: Missing credentials or other error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Username is required
 *       401:
 *         description: Invalid username or password
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Invalid username or password
 */
router.post('/', authController.login)

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth login callback
 *     tags: [Auth]
 *     description: Handles the OAuth callback from Google. Redirects to frontend with token on success, or with an error on failure.
 *     parameters:
 *       - in: query
 *         name: code
 *         required: true
 *         schema:
 *           type: string
 *         description: The authorization code returned from Google
 *     responses:
 *       302:
 *         description: Redirect to frontend with token and email on success
 *         headers:
 *           Location:
 *             description: Redirect URL including token and email query params
 *             schema:
 *               type: string
 *       400:
 *         description: Missing authorization code from Google
 *       401:
 *         description: Email not found in database (user not registered)
 */
router.get('/google/callback', authController.googleLogin)
```

*Εχω ένα ετοιμο φτιαγμένο λινκ για να δοκιμαζω το google auth χωρις να χρειάζομαι το front end*
```url
https://accounts.google.com/o/oauth2/auth?client_id={apo_to_google}&redirect_uri={apo_to_google}&response_type={apo_to_auth.service}&scope=email%20profile&access_type=offline

// αυτό είναι του combined app
https://accounts.google.com/o/oauth2/auth?client_id=37391548646-a2tj5o8cnvula4l29p8lodkmvu44sirh.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/login/google/callback&response_type=code&scope=email%20profile&access_type=offline
```

<!-- TOC --><a name="appjs-3"></a>
#### app.js
```js
const loginRoutes = require('./routes/auth.routes')

app.use('/api/login', loginRoutes)
```

<!-- TOC --><a name="-"></a>
#### με ποστμαν
- post στο http://localhost:3001/api/login
- με raw json
```
{
    "username":"alkisax",
    "password":"123"
}
```
- παιρνω πισω κάτι σαν
```html
{
    "status": true,
    "data": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFsa2lzYXgiLCJlbWFpbCI6ImFsa2lzYXhAZ21haWwuY29tIiwicm9sZXMiOlsiYWRtaW4iXSwiaWQiOiI2ODA5MjEwZWE3NDgxNTkwZTk3NTk4NjYiLCJpYXQiOjE3NDYyNjIzODYsImV4cCI6MTc0NjI2NTk4Nn0.AwJbBUDxPCGuDQhnfo41vAblA2fhv3RJ-CwMpgD759c",
        "admin": {
            "username": "alkisax",
            "email": "alkisax@gmail.com",
            "roles": [
                "admin"
            ],
            "id": "6809210ea7481590e9759866"
        }
    }
}
```

<!-- TOC --><a name="testauthtest"></a>
#### __test__/auth.test
```js
const mongoose = require("mongoose");
const request = require("supertest");
const bcrypt = require("bcrypt");
require('dotenv').config();
const app = require("../app");

const Admin = require("../models/admins.models");

// Add this mock at the top of your test file to ensure it doesn't interact with the actual Stripe service during tests.
jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({
    // Mock the methods you need, e.g., charge, paymentIntents, etc.
    charges: {
      create: jest.fn().mockResolvedValue({ success: true })
    }
  }));
});


const TEST_ADMIN_LOGIN = {
  username: "adminuser",
  name: "Admin User",
  email: "admin@example.com",
  password: "securepassword",
  roles: ["admin"]
};

beforeEach(async () => {
  await mongoose.connect(process.env.MONGODB_TEST_URI);
  await Admin.deleteMany({});

  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(TEST_ADMIN_LOGIN.password, saltRounds);

  await Admin.create({
    username: TEST_ADMIN_LOGIN.username,
    name: TEST_ADMIN_LOGIN.name,
    email: TEST_ADMIN_LOGIN.email,
    hashedPassword: hashedPassword,
    roles: TEST_ADMIN_LOGIN.roles
  });
});

afterAll(async () => {
  await Admin.deleteMany({});
  await mongoose.disconnect();
});

describe("POST /api/login", () => {
  it("should return token and admin data for valid credentials", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({
        username: TEST_ADMIN_LOGIN.username,
        password: TEST_ADMIN_LOGIN.password
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe(true);
    expect(res.body.data.token).toBeDefined();
    expect(res.body.data.admin).toMatchObject({
      username: TEST_ADMIN_LOGIN.username,
      email: TEST_ADMIN_LOGIN.email,
      roles: TEST_ADMIN_LOGIN.roles
    });
  });

  it("should fail with incorrect password", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({
        username: TEST_ADMIN_LOGIN.username,
        password: "wrongpassword"
      });

    expect(res.statusCode).toBe(401);
    expect(res.body.status).toBe(false);
    expect(res.body.message).toBe("Invalid username or password");
  });

  it("should fail with non-existent username", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({
        username: "ghostuser",
        password: "anyPassword"
      });

    expect(res.statusCode).toBe(401);
    expect(res.body.status).toBe(false);
    expect(res.body.message).toBe("Invalid username or password or admin not found");
  });

  it("should fail if username is missing", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({
        password: TEST_ADMIN_LOGIN.password
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.status).toBe(false);
    expect(res.body.message).toBe("Username is required");
  });

  it("should fail if password is missing", async () => {
    const res = await request(app)
      .post("/api/login")
      .send({
        username: TEST_ADMIN_LOGIN.username
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.status).toBe(false);
    expect(res.body.message).toBe("Password is required");
  });
});
```
<!-- TOC --><a name="front-login"></a>
# front login
<!-- TOC --><a name="appjsx-1"></a>
#### App.jsx
```jsx
const App = () => {
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userIsAdmin, setUserIsAdmin] = useState(false)
  const [users, setUsers] = useState([])
  const [admin, setAdmin] = useState(null)

  const navigate = useNavigate()
  
  //
  useEffect(() => {
    // παίρνω απο το lockalstorage το token και το roles για να δω αν έχει κάνει login και αν είναι admin
    const token = localStorage.getItem("token")
    const roles = JSON.parse(localStorage.getItem("roles"))
    const adminFromStorage = JSON.parse(localStorage.getItem("admin"))
    if (token && roles && roles.includes('admin') && adminFromStorage) {
      const userFromStorage = { token, roles }
      setAdmin(userFromStorage)
      setUserIsAdmin(true) 
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log("Submitting login...")

    try {
      const response = await axios.post(`${url}/login`, {
        "username": username,
        "password": password
      })
      console.log("Login successful", response.data)

      const { token, admin } = response.data.data
      setUser(admin)

      // αποθηκεύω στο lockalstorage για να παραμένει loged in μετα το refresh
      localStorage.setItem("token", token)
      localStorage.setItem("roles", JSON.stringify(admin.roles))

      setAdmin({ token, roles: admin.roles })
      localStorage.setItem("admin", JSON.stringify(admin));

      // η isAdmin είναι boolean και την χρησιμοποιώ με && στα διάφορα render που είναι να τα βλέπει μόνο ο admin
      const isAdmin = admin.roles.includes("admin")
      setUserIsAdmin(isAdmin)
      console.log("Is admin?", isAdmin)

    } catch (error) {
      console.log(error)     
    }
    
    // αυτό μπορούμε να το χρησιμοποιήσουμε γιατί έχουμε  const navigate = useNavigate() και μας οδηγεί στο home
    navigate("/")
  }

  const handleLogout = async () => {
    // καθαρίζουμε το localStorage και το State
    localStorage.removeItem("token")
    localStorage.removeItem("roles");
    localStorage.removeItem("admin");
    setAdmin(null)
    setUserIsAdmin(false)
    console.log("Logged out successfully")
    navigate("/")
  }

// το login route είναι για να με πάει στην φορμα του Login
// το admin route είναι για να με πάει στο login panel
// το Protected route  βεβαιώνει οτι δεν μπορουν να το δουν μη-admin ακομα και αν το γράψουν στο Url
  return (
    // το μενου παρακάτω 
      άλλο 
    <Appbar 
      admin={admin}
      handleLogout={handleLogout}
    />

    <Routes>
        <Route path="/" element={
          <>
            <Home 
              message={message}
              setMessage={setMessage}
              url={url}
            />
          </>
        } />

        <Route path="/login" element={
          <>
            <LoginForm 
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              handleLogin={handleLogin}
              url={url}
            />
          </>
        } />

        <Route path="/admin" element={
          <>
            // το πως γίνετε Protected route ακολουθεί αμέσος επόμενο
            <ProtectedRoute admin={admin} requiredRole="admin"></ProtectedRoute>
            <AdminPanel
              url={url}
              // handleDeleteParticipant={handleDeleteParticipant}
              // participants={participants}
              // setParticipants={setParticipants}
              // αυτά μόλλον είναι περιτα
              users={users}
              setUsers={setUsers}
            />
          </>
        } />  
    </Routes>
  )
}
export default App
```

<!-- TOC --><a name="protectedroutejsx"></a>
#### ProtectedRoute.jsx
```jsx
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ admin , children, requiredRole }) => {

  if (admin === null) {
    return <div>Loading...</div>; 
  }

  if (!admin) {
    console.log("protected failed");    
    return <Navigate to="/" />;
  }

  if (requiredRole && !admin?.roles?.includes(requiredRole)) {
    console.log("protected passed"); 
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;
```

<!-- TOC --><a name="appbarjsx"></a>
#### Appbar.jsx
```jsx
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link, Routes, Route } from 'react-router-dom';

const Appbar = ({ admin, handleLogout }) => {

  const padding = {
    paddingRight: 5,
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          // έχει μέσα του διάφορα λινκ.
          <Nav.Link as={Link} to="/" style={padding}>
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/buymeacoffee" style={padding}>
            Buy me a coffee
          </Nav.Link>

          // turnary. αν αντμιν δειξε αν οχι μη δείξεις
          {admin ? (
            <div className="d-flex flex-column align-items-start ml-auto" style={{ padding }}>
              <em style={{ paddingRight: 10 }}>{admin.token ? 'Admin logged in' : 'Logged in'}</em>
              <Nav.Link as={Link} to="/admin" style={padding}>
                Admin Pannel
              </Nav.Link>
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Nav.Link as={Link} to="/login" style={padding}>
              Admin Login
            </Nav.Link>
          )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
export default Appbar
```

<!-- TOC --><a name="homejsx-"></a>
#### Home.jsx /
```jsx
import { useEffect, useRef } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Home = ({ message, setMessage, url }) => {
  // // επειδή εδώ ξαναγυρνάμε και στο success ή fail του Stripe Checkout με url parms, εδώ ειναι η λογική που το διαχειρίζετε αυτό. Tο αφήνω εδώ αλλα θα το προσθέσω ξανα στην ώρα του
  // // επρεπε να γίνει γιατι καλούσε το success 2 φορες δημιουργώντας 2 transactions
  // // το useRef είναι σαν το state αλλα δεν προκαλει refresh
  // const hasCalledSuccessRef = useRef(false);

  // // παίρνει τα url parms
  // const [searchParams] = useSearchParams()
  // useEffect(() => {
  //   const canceled = searchParams.get('canceled'); 
  //   const success = searchParams.get('success')
  //   // added to manage to call stripe.controller.js handlesucces from frontend
  //   const sessionId = searchParams.get('session_id');
  //   console.log("sessionId", sessionId);
    

  //   if (success === 'true' && sessionId && !hasCalledSuccessRef.current){
  //     // επρεπε να φτιαξω μια νεα function γιατι το axios δεν δουλευε αλλιώς
  //     const fetchSuccess = async () => {
  //       try {
  //         // θα μας δημιουργήσει το transaction
  //         const result = await axios.get(`${url}/stripe/success?session_id=${sessionId}`)
  //         console.log("Success response:", result.data);
  //         // για να εμποδίσει επανάληψη της κλήσης
  //         hasCalledSuccessRef.current = true;
  //       } catch (error) {
  //         console.error ("Error handling success:", error)
  //       }
  //     }
  //     fetchSuccess()
  //     // το message του success δεν εχει timeout
  //     setMessage(`Payment successful! thank you! :)
  //                 you will soon receive an email with the details`)
  //   }

  //   if (canceled === 'true') {
  //     setMessage('Payment canceled! :(');
  //     setTimeout(() => {
  //       setMessage('');
  //     }, 7000); 
  //   }

  // }, [searchParams, setMessage, url]) // τρέχει οποτε αλλάξει κάποιο απο αυτά

  return (
    <>
      // {message && (
      //   <div className={`alert ${message.includes('canceled') ? 'alert-danger' : 'alert-success'} pb-3`} role="alert">
      //     {message}
      //   </div>
      // )}

      <h1>Donate APP</h1>
      <p>stripe + login app</p>
      <p className="text-center text-secondary small">to create an admin has to be done through backend with postman.
        post http://localhost:3000/api/admin
        {`{
          "username": "newadmin",
          "name": "New Admin",
          "email": "newadmin@example.com",
          "password": "password123",
          "roles": ["admin"] 
        }`}
        </p>
      {/* <Checkout /> */}
    </>
  )
}

export default Home
```

<!-- TOC --><a name="loginformjsx-login"></a>
#### LoginForm.jsx /login
```jsx

const LoginForm = ({ username, password, setUsername, setPassword, handleLogin, url }) =>{

  // βάζω προκατασκευασμένο url
  const googleUrl = `https://accounts.google.com/o/oauth2/auth?client_id=37391548646-a2tj5o8cnvula4l29p8lodkmvu44sirh.apps.googleusercontent.com&redirect_uri=${url}/login/google/callback&response_type=code&scope=email%20profile&access_type=offline`;

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input type="text"
          id="username"
          value={username}
          name="username"
          onChange={({target}) => setUsername(target.value)}
          autoComplete="username"
          />
        </div>
        <div>
          password
          <input type="text"
          id="password"
          value={password}
          name="password"
          onChange={({target}) => setPassword(target.value)}
          autoComplete="password"
          />
        </div>
        <button id="loginBtn" type="submit">login</button>
      </form>

      <a href={googleUrl}>
        <button id="GoogleLoginBtn" type="button">Login with Google</button>
      </a>
    </>
  )
}
export default LoginForm
```
<!-- TOC --><a name="-to-log-in-google-"></a>
## Είναι ακόμα προβληματικό. To log in γινετε μεσο google αλλα
- αντι να απορίψει αν είναι admin δημιουργεί έναν καινούργιο
- - λύθηκε: το πρόβλημα ήταν οτι το back έκανε find one and update, αντί για find one
- αν είναι admin δεν του επιτρέπει να πάει στον admin panel
- - Λύθηκε: το πρόβλημα ήταν η ασυμφωνια των δεδομένων του google με αυτά στο mongo db. Κράτάει μόνο το μέηλ κ του βάζει ρόλο admin.
<!-- TOC --><a name="googlesuccesjsx"></a>
#### GoogleSucces.jsx
```jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const GoogleSuccess = ({ setAdmin, setIsAdmin}) => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const email = params.get('email');

    if (!token) {
      console.log("login failed");
      return navigate('/login');
    }

    if (token) {
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);

      // Decode token and extract roles
      const decoded = jwtDecode(token);
      console.log('Decoded JWT:', decoded);
      const adminData = {
        email,
        id: decoded.id,
        roles: ['admin'], // Set roles as admin since only admins can log in
      };
  
      localStorage.setItem('admin', JSON.stringify(adminData));
    
      setAdmin(true);
      setIsAdmin(adminData);

      // Redirect to dashboard or homepage
      navigate('/');
    } else {
      console.log("login failed");      
      navigate('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Logging you in via Google...</div>;
};

export default GoogleSuccess;
```

- AdminPanel.jsx /admin
- **πριν δουμε το AdminPanel** θα επιστρέψουμε στο back για να δημιουργήσουμε τον participant (model, dao, controller, routes, test)
<!-- TOC --><a name="participant-backend"></a>
# Participant Backend
<!-- TOC --><a name="participantmodelsjs"></a>
#### participant.models.js
- name
- surname
- email
- transactions (συνδεδεμένο με transactions που θα φτιαχτεί αμέσος μετά)
```js
const mongoose = require("mongoose")
const transactions = require('./transaction.models')

const Schema = mongoose.Schema
const participantSchema = new Schema({
  name:{
    type: String,
    required: false
  },
  surname:{
    type: String,
    required: false
  },
  email:{
    type: String,
    required: [true, 'email is required'],
    unique: true
  },
  transactions: [{
    type: mongoose.Schema.Types.ObjectId, // Each item here is an ObjectId pointing to a Transaction document
    ref: 'Transaction' // This tells Mongoose *which* collection/model to link (the 'Transaction' model)
  }],
},
{
  collection: 'participants',
  timestamps: true
})
module.exports = mongoose.model('Participant', participantSchema)
```

<!-- TOC --><a name="participantdaojs"></a>
#### participant.dao.js
```js
const Participant = require('../models/participant.models');

const findAllParticipants = async () => {
  return await Participant.find().populate('transactions');
};

const findParticipantByEmail = async (email) => {
  return await Participant.findOne({ email }).populate('transactions');
};

const createParticipant = async (participantData) => {
  const participant = new Participant(participantData);
  return await participant.save();
};

const deleteParticipantById = async (participantId) => {
  return await Participant.findByIdAndDelete(participantId);
};

const addTransactionToParticipant = async (participantId, transactionId) => {
  return await Participant.findByIdAndUpdate(
    participantId,
    { $push: { transactions: transactionId } },
    { new: true }
  );
};

module.exports = {
  findAllParticipants,
  findParticipantByEmail,
  createParticipant,
  deleteParticipantById,
  addTransactionToParticipant
};
```

<!-- TOC --><a name="participantcontrollerjs"></a>
#### participant.controller.js
```js
const bcrypt = require("bcrypt")
const logger = require('../utils/logger')
const Participant = require('../models/participant.models')
const participantDao = require('../daos/participant.dao')

exports.findAll = async (req,res) => {
  try {
    // add later when auth
    if (!req.headers.authorization) {
      return res.status(401).json({ status: false, error: 'No token provided' });
    }

    const participants = await participantDao.findAllParticipants()
    logger.info("Fetched all participants");
    res.status(200).json({
      status: true,
      data: participants
    })

  } catch (error) {
    logger.error(`findAll error: ${error.message}`)
    console.error(error)
    res.status(500).json({
      status: false,
      error: 'find all paricipants error'
    })
  }
}

exports.create = async (req,res) => {
  let data = req.body

  const name = data.name
  const surname = data.surname
  const email = data.email
  const transactions = data.transactions

  try {

    const newParticipant = await participantDao.createParticipant({
      name,
      surname,
      email,
      transactions
    });

    logger.info(`Created new participant: ${email}`);
    res.status(201).json(newParticipant)
  } catch(error) {
    logger.error(`Error creating participant: ${error.message}`);
    res.status(400).json({error: error.message})
  }
}

exports.deleteById = async (req, res) => {
  const participantId = req.params.id
  if (!participantId){
    logger.warn("Delete attempt without ID");
    return res.status(400).json({
      status: false,
      error: 'participant ID is required OR not found'
    })
  }
  
  try {
    const deleteParticipant = await participantDao.deleteParticipantById(participantId) 

    if (!deleteParticipant){
      logger.warn(`Delete failed: participant ${participantId} not found`);
      return res.status(404).json({
        status: false,
        error: 'Error deleting participant: not found'
      })
    } else {
      logger.info(`Deleted participant ${deleteParticipant.username}`);
      res.status(200).json({
        status: true,
        message: `participant ${deleteParticipant.username} deleted successfully`,
      })
    }
  } catch (error) {
    logger.error(`Delete error: ${error.message}`);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}
```

<!-- TOC --><a name="participantroutesjs"></a>
#### participant.routes.js
```js
const express = require('express')
const router = express.Router()
const participantController = require('../controllers/participant.controller')
const { verifyToken, checkRole } = require('../middlewares/verification.middleware');

router.get ('/', verifyToken, checkRole('admin'), participantController.findAll)
router.post('/', participantController.create)
router.delete('/:id', verifyToken, checkRole('admin'), participantController.deleteById)

module.exports = router
```
<!-- TOC --><a name="swagger-documentation-for-paritcipant-routes"></a>
#### swagger documentation for paritcipant routes
```js
/**
 * @swagger
 * tags:
 *   name: Participants
 *   description: API for managing participants
 */

/**
 * @swagger
 * /api/participant:
 *   get:
 *     summary: Get all participants (admin only)
 *     tags: [Participants]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of all participants
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Participant'
 *       401:
 *         description: Unauthorized - token missing or invalid
 *       500:
 *         description: Server error fetching participants
 */
router.get ('/', verifyToken, checkRole('admin'), participantController.findAll)

/**
 * @swagger
 * /api/participant:
 *   post:
 *     summary: Create a new participant
 *     tags: [Participants]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - surname
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *               surname:
 *                 type: string
 *               email:
 *                 type: string@whatever.com
 *               transactions:
 *                 type: array
 *                 items:
 *                   type: 507f1f77bcf86cd799439011
 *     responses:
 *       201:
 *         description: Participant created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 surname:
 *                   type: string
 *                 email:
 *                   type: string
 *                 transactions:
 *                   type: array
 *                   items:
 *                     type: string
 *       400:
 *         description: Invalid input or request body
 */

router.post('/', participantController.create)

/**
 * @swagger
 * /api/participant/{id}:
 *   delete:
 *     summary: Delete a participant by ID
 *     tags: [Participants]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the participant to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Participant deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *       404:
 *         description: Participant not found
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server error
 */
router.delete('/:id', verifyToken, checkRole('admin'), participantController.deleteById)
```
<!-- TOC --><a name="appjs-4"></a>
#### app.js
```js
const participantRoutes = require('./routes/participant.routes')

app.use('/api/participant', participantRoutes)
```

<!-- TOC --><a name="transaction-backend"></a>
# transaction Backend
<!-- TOC --><a name="transactionmodelsjs"></a>
#### transaction.models.js
```js
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const transactionSchema = new Schema({
  amount:{
    type: Number,
    required: [true, 'amount is required'],
  },
  processed:{
    type: Boolean,
    default: false
  },
  participant: {
    type: mongoose.Schema.Types.ObjectId, // This stores a reference (ID) to a Participant document
    ref: 'Participant', // This tells Mongoose to link this field to the 'Participant' model
    required: true
  }
},
{
  collection: 'Transactions',
  timestamps: true
})
module.exports = mongoose.model('Transaction', transactionSchema)
```
<!-- TOC --><a name="transactiondaojs"></a>
#### transaction.dao.js
```js
const Transaction = require('../models/transaction.models');
const Participant = require('../models/participant.models')

// Find all transactions
const findAllTransactions = async () => {
  return await Transaction.find().populate('participant');
};

// Find transaction by ID
const findTransactionById = async (transactionId) => {
  return await Transaction.findById(transactionId).populate('participant');
};

// Create a new transaction
const createTransaction = async (transactionData) => {
  const transaction = new Transaction(transactionData);
  return await transaction.save();
};

// Delete a transaction by ID
const deleteTransactionById = async (transactionId) => {
  return await Transaction.findByIdAndDelete(transactionId);
};

// Update a transaction (for example, changing the amount)
const updateTransactionById = async (transactionId, updatedData) => {
  return await Transaction.findByIdAndUpdate(
    transactionId,
    updatedData,
    { new: true } // return the updated document
  );
};

const findTransactionsByProcessed = async (isProcessed) => {
  return await Transaction.find({ processed: isProcessed }).populate('participant');
};

const addTransactionToParticipant = async (participantId, transactionId) => {
  return await Participant.findByIdAndUpdate(
    participantId,
    { $push: { transactions: transactionId } },
    { new: true }
  ); //"Find the participant and push this new transactionId into their transactions array."
};

const findBySessionId = async (sessionId) => {
  return await Transaction.findOne({ sessionId });
};

module.exports = {
  findAllTransactions,
  findTransactionById,
  createTransaction,
  deleteTransactionById,
  updateTransactionById,
  findTransactionsByProcessed,
  findBySessionId
};
```
<!-- TOC --><a name="transactioncontrollerjs"></a>
#### transactionController.js
```js
const bcrypt = require('bcrypt')
const logger = require('../utils/logger')
const Transaction = require('../models/transaction.models')
const transactionDAO = require('../daos/transaction.dao')
const participantDAO = require('../daos/participant.dao')
const axios = require('axios')
// const sendThnxEmail = require('../controllers/email.controller') // !!!

BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000'

exports.findAll = async (req,res) => {
  try {

    // add later when auth
    if (!req.headers.authorization) {
      logger.warn('Unauthorized access attempt to findAll');
      return res.status(401).json({ status: false, error: 'No token provided' });
    }

    const transactions = await transactionDAO.findAllTransactions();
    logger.info('Fetched all transactions', transactions.length);
    res.status(200).json({ status: true, data: transactions });
  } catch (error) {
    console.error(error);
    logger.error('Error in findAll', error.message);
    res.status(500).json({ status: false, error: 'Internal server error' });
  }
}

exports.findUnprocessed = async (req,res) => {
  
  try {
    // add later when auth
    if (!req.headers.authorization) {
      logger.warn('Unauthorized access attempt to findUnprocessed');
      return res.status(401).json({ status: false, error: 'No token provided' });
    }

    const unprocessed = await transactionDAO.findTransactionsByProcessed(false)
    logger.info('Fetched unprocessed transactions', unprocessed.length);
    res.status(200).json({
      status: true,
      data: unprocessed
    })

  } catch (error) {
    logger.error('Error in findUnprocessed', error.message);
    res.status(500).json(error)
  }
}

exports.create = async (req,res) => {
  let data = req.body
  const amount = data.amount
  const processed = data.processed
  const participant = data.participant

  try {
    const newTransaction = await transactionDAO.createTransaction({
      amount,
      processed,
      participant
    });

    logger.info('Created transaction', { amount, participant });
    await participantDAO.addTransactionToParticipant(participant, newTransaction._id);

    res.status(201).json(newTransaction)
  } catch(error) {
    logger.error(`Error creating transaction: ${error.message}`);
    res.status(400).json({error: error.message})
  }
}

// αυτή είναι σημαντική γιατί στέλνει αυτόματα το email
exports.toggleProcessed = async (req,res) => {
  const transactionId = req.params.id
  if (!transactionId){
    logger.warn('Missing transaction ID in toggleProcessed');
    return res.status(400).json({
      status: false,
      error: 'transaction ID is required OR not found'
    })
  }

  try {
    const transaction = await transactionDAO.findTransactionById(transactionId);

    if (!transaction) {
      logger.warn('Transaction not found with ID', transactionId);
      return res.status(404).json({
        status: false,
        error: 'Transaction not found',
      });
    }

    const updatedData = {
      processed: !transaction.processed
    }

    const updatedTransaction = await transactionDAO.updateTransactionById(transactionId, updatedData)

    // εδώ στέλνουμε το email
    await axios.post(`${BACKEND_URL}/api/email/${transactionId}`)
    logger.info('Toggled processed status for transaction', transactionId, updatedData.processed);
    res.status(200).json({ status: true, data: updatedTransaction})
  } catch (error) {
    logger.error('Error toggling transaction processed status: %s', error.message);
    res.status(500).json({
      status:false,
      error: error.message
    })
  }
}

exports.deleteById = async (req, res) => {
  const transactionId = req.params.id
  if (!transactionId){
    logger.warn('Missing transaction ID in deleteById');
    return res.status(400).json({
      status: false,
      error: 'transaction ID is required OR not found'
    })
  }
  
  try {
    const deleteTransaction = await transactionDAO.deleteTransactionById(transactionId) 

    if (!deleteTransaction){
      logger.warn('Transaction not found for deletion with ID: ', transactionId);
      return res.status(404).json({
        status: false,
        error: 'Error deleting transaction: not found'
      })
    } else {
      logger.info('Deleted transaction with ID: ', transactionId);
      res.status(200).json({
        status: true,
        message: `transaction deleted successfully`,
      })
    }
  } catch (error) {
    logger.error('Error deleting transaction: ', error.message);
    res.status(500).json({
      status: false,
      error: error.message
    })
  }
}
```
<!-- TOC --><a name="transactionroutesjs"></a>
#### transaction.routes.js
```js
const express = require('express')
const router = express.Router()
const transactionController = require('../controllers/transactionController')
const { verifyToken, checkRole } = require('../middlewares/verification.middleware')

// GET all transactions (admin only)
router.get('/', verifyToken, checkRole('admin'), transactionController.findAll)

// GET unprocessed transactions (admin only)
router.get('/unprocessed', verifyToken, checkRole('admin'), transactionController.findUnprocessed)

// POST create a new transaction (no auth yet)
router.post('/', transactionController.create);

// DELETE a transaction by ID (admin only)
router.delete('/:id', verifyToken, checkRole('admin'), transactionController.deleteById)

router.put('/toggle/:id', verifyToken, checkRole('admin'), transactionController.toggleProcessed)

module.exports = router;
```
<!-- TOC --><a name="transaction-swagger-documentation-comments"></a>
#### transaction swagger documentation comments
```js
/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: Transaction management routes
 */

/**
 * @swagger
 * /api/transactions:
 *   get:
 *     summary: Get all transactions (admin only)
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of transactions
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', verifyToken, checkRole('admin'), transactionController.findAll)

/**
 * @swagger
 * /api/transactions/unprocessed:
 *   get:
 *     summary: Get unprocessed transactions (admin only)
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of unprocessed transactions
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/unprocessed', verifyToken, checkRole('admin'), transactionController.findUnprocessed)

/**
 * @swagger
 * /api/transactions:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - participant
 *             properties:
 *               amount:
 *                 type: number
 *               processed:
 *                 type: boolean
 *               participant:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *       400:
 *         description: Invalid input
 */
router.post('/', transactionController.create)

/**
 * @swagger
 * /api/transactions/{id}:
 *   delete:
 *     summary: Delete a transaction by ID (admin only)
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Transaction ID
 *     responses:
 *       200:
 *         description: Transaction deleted
 *       404:
 *         description: Transaction not found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.delete('/:id', verifyToken, checkRole('admin'), transactionController.deleteById)

/**
 * @swagger
 * /api/transactions/toggle/{id}:
 *   put:
 *     summary: Toggle the processed status of a transaction (admin only)
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Transaction ID
 *     responses:
 *       200:
 *         description: Transaction updated
 *       404:
 *         description: Transaction not found
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.put('/toggle/:id', verifyToken, checkRole('admin'), transactionController.toggleProcessed)
```
<!-- TOC --><a name="appjs-5"></a>
#### app.js
```js
const transactionRoutes = require('./routes/transaction.routes')

app.use('/api/transaction', transactionRoutes)
```
<!-- TOC --><a name="admin-pannel-front-ens"></a>
# Admin pannel Front ens
<!-- TOC --><a name="adminpaneljsx"></a>
#### AdminPanel.jsx
```jsx
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect  } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import Participants from './Participants'
import Transactions from './Transactions'

const AdminPanel = ({url, handleDeleteParticipant, participants, setParticipants}) => {
  const [loading, setLoading] = useState(true)
  const [showParticipants, setShowParticipants] = useState(false);

// έχει δυο χωριστα components που εμφανίζονται στο AdminPanel. Ένα που δείχνει όλους τους καταθέτες (και κακός είναι ενσωματωμένο εδώ, θα έπρεπε να είχε δικό του *EDITED* αλλαχθηκε και πήγε σε χωριστό αρχείο), και ένα που δείχνει πληροφορίες για τις καταθέσεις και κουμπί αν έχει επεξεργαστεί η συναλλαγή ή οχι

//αυτό κάνει ένα get τους participants
  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const token = localStorage.getItem("token"); 
        
        const response = await axios.get(`${url}/participant`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setParticipants(response.data.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); 
      }
    };

    fetchParticipants();
  }, [url]);

  return (
    <div>
      <h2>Admin Panel</h2>
      <p>Only admins can see this.</p>

      <Transactions url={url} />

      <button onClick={() => setShowParticipants(!showParticipants)} className="btn btn-primary">
        {showParticipants && 'Hide Participants'}
        {!showParticipants && 'Show Participants'}
      </button>

      <Participants
        loading={loading}
        participants={participants}
        handleDeleteParticipant={handleDeleteParticipant}
        setParticipants={setParticipants}
        url={url}
        showParticipants={showParticipants}
      />

    </div>
  )
}

export default AdminPanel
```

<!-- TOC --><a name="participantsjsx"></a>
#### Participants.jsx
```jsx
import { useState  } from "react"
import { Link } from "react-router-dom"
import NewParticipantForm from './NewParticipantForm'

const Participants = ({ loading, participants, handleDeleteParticipant, showParticipants, setParticipants, url}) => {

  const [viewForm, setViewForm] = useState(false)


  return (
    <>
      {showParticipants && (
        <>
          {loading && <p>Loading...</p>}
          
          {!loading && participants.length === 0 && <p>No participants found</p>}
  
          <ul>
            {!loading && participants.length !== 0 &&
              participants.map((participant) => (
                <li key={participant._id || `${participant.name}-${participant.email}`}>
                  {/* // αν κάνεις κλικ σε έναν καταθέτη σε οδηγη σε δικιά του σελίδα 
                  // στο App.jsx έχει:
                  // <Route path="/users" element={<AdminPanel handleDeleteUser={handleDeleteParticipant} url={url} />} />
                  // <Route path="/users/:id" element={<UserDetail />} /> */}
                  <Link to={`/participant/${participant._id}`}>
                    {participant.email}
                  </Link>
                  - {participant.name} - {participant.email} - {participant.surname}
                  <button id={`${participant.email}Btn`} onClick={() => handleDeleteParticipant(participant._id)}>Delete</button>
                </li>
              ))
            }
          </ul>

// κάνει toggle την φορμα για δημιουργεία νεόυ πελάτη 
          <button id="createParticipantBtn" onClick={() => setViewForm(!viewForm)}>
            create participant form
          </button>
  
          {viewForm && 
            <NewParticipantForm 
              users={participants} 
              setUsers={setParticipants} 
              url={url} 
            />}
        </>
      )}
    </>
  )
}

export default Participants
```

<!-- TOC --><a name="appjsx-2"></a>
#### App.jsx
```jsx
      <Routes>
        <Route path="/participant" element={<AdminPanel handleDeleteUser={handleDeleteParticipant} url={url} />} />
        <Route path="/participant/:id" element={<UserDetail />} />
      </Routes>
```

<!-- TOC --><a name="userdetailjsx"></a>
#### UserDetail.jsx
- δείχνει μόνο το id του participant
```jsx
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();  // Access the id from the route parameter
  
  return (
    <div>
      <h4>User Detail for ID: {id}</h4>
      {/* Fetch and display user details here */}
    </div>
  );
};

export default UserDetail;
```

<!-- TOC --><a name="newparticipantformjsx"></a>
#### NewParticipantForm.jsx
```jsx
/* eslint-disable no-unused-vars */
import {useState} from 'react'
import axios from 'axios'

const NewParticipantForm = ({ url, participants, setParticipants }) =>{
  const [surname, setSurname] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmitParticipant = async (event) => {
    event.preventDefault()
    
    try {
      const newParticipant = {
        "name": name,
        "surname": surname,
        "email": email
      }

      const response = await axios.post(`${url}/participant`, newParticipant)

      console.log('✅ participant created:', response.data)
      alert('Participant created successfully!')

      // Clear the form if needed
      setSurname('')
      setName('')
      setEmail('')

// αυτη η μορφή ανανέωσης του state είναι σωστή γιατή μου κάνει refresh την σελίδα
      setParticipants(current => [...current, response.data]); // Take the current state (users) and add the new user (response.data) to the end of the array
    } catch (error) {
      console.error('Error creating participant:', error)
    }
  }


  return (
    <>
      <form onSubmit={handleSubmitParticipant}>
        <div>
          name
          <input type="text"
          id='createName'
          value={name}
          name="username"
          onChange={({target}) => setName(target.value)}
          autoComplete="Name"
          />
        </div>
        <div>
          Surname
          <input type="text"
          id='createSurname'
          value={surname}
          name="surname"
          onChange={({target}) => setSurname(target.value)}
          autoComplete="Surname"
          />
        </div>
        <div>
          email
          <input type="email"
          id='createEmail'
          value={email}
          name="email"
          onChange={({target}) => setEmail(target.value)}
          autoComplete="email"
          />
        </div>
        <button id='submitCreateBtn' type="submit">submit</button>
      </form>
    </>
  )
}
export default NewParticipantForm
```

<!-- TOC --><a name="transactionsjsx"></a>
#### Transactions.jsx
- αυτό είναι ένα συμαντικό component. Μου δείχνει τι τραπεζικές συναλαγές έχουν γίνει και αν αυτές έχουν επεξεργαστεί. Με ένα κουμπι κάνω toggle την επεξεργασία τους. Στο backend η επεξεργασία του transaction αυτομάτος κάνει trigger την αποστολή email με nodemailer 

```jsx
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'


const Transactions =  ({ url }) => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

// μου επιστρέφει τη λίστα με τισ συναλλαγές για να τα προβάλει
  const fetchTransactions = async () => {
    try {
      const token = localStorage.getItem("token")
      const response = await axios.get(`${url}/transaction`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setTransactions(response.data.data)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching transactions:", error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [url])

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

// κάνει toggle το αν έχει επεξεργαστεί η συναλλαγή. Κάνει trigger το thnx email
  const markProcessed = async (transactionId) => {
    try {
      const token = localStorage.getItem("token")
      console.log("token: ", token);
      
      const response = await axios.put(`${url}/transaction/toggle/${transactionId}`,
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      const isProcessed = response.data.data.processed
      console.log("transaction is processed?",isProcessed);
      
      setTransactions(response.data.data)
      fetchTransactions()
    } catch (error) {
      console.error("Error fetching transactions:", error)
    }
  }


  return (
    <>
      {loading && <p>Loading...</p>}
      
      {!loading && transactions.length === 0 && <p>No transactions found</p>}

      <Button variant="info" onClick={toggleShowAll} className="mb-3">
        {showAll ? "Show only unprocessed" : "Show all"}
      </Button>

      {!loading && Array.isArray(transactions) && transactions.length !== 0 && (
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="d-none d-sm-table-cell">Name</th>
                <th className="d-none d-sm-table-cell">Surname</th>
                <th className="d-none d-sm-table-cell">Amount (€)</th>
                <th>Email</th>
                <th>Status</th>
                <th className="d-none d-sm-table-cell">Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions
              // με φιλτερ γινεται το show all
                .filter(t => showAll || !t.processed) 
                .map((transaction) => {
                  const participant = transaction.participant
                  return (
                    <tr key={transaction._id}>
                      <td className="d-none d-sm-table-cell">{participant?.name || 'No Name'}</td>
                      <td className="d-none d-sm-table-cell">{participant?.surname || 'No Surname'}</td>
                      <td className="d-none d-sm-table-cell">€{transaction.amount}</td>
                      <td>{participant?.email || 'No Email'}</td>
                      <td>{transaction.processed ? 'Processed' : 'Unprocessed'}</td>
                      <td className="d-none d-sm-table-cell">{new Date(transaction.createdAt).toLocaleString()}</td>
                      <td>
                        <Button
                          variant={transaction.processed ? 'warning' : 'success'}
                          onClick={() => markProcessed(transaction._id)}
                        >
                          {transaction.processed ? 'Mark Unprocessed' : 'Send email & Mark Processed'}
                        </Button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </div>
      )}
    </>
  )
}

export default Transactions
```

<!-- TOC --><a name="nodemailer"></a>
# nodemailer
<!-- TOC --><a name="back-end-mailer"></a>
## back end διαχείρηση του mailer
<!-- TOC --><a name="emailroutesjs"></a>
#### email.routes.js
```js
const nodemailer = require("nodemailer");
const transactionDAO = require('../daos/transaction.dao')

exports.sendThnxEmail = async (req,res) => {
  try {
    logger.info('reached sednThnxEmail') 
    // παίρνω το transactionId απο τα params που μου έστειλε το φροντ και με αυτό βρήσκω όλες τις υπόλοιπες πληροφορίες    
    const transactionId = req.params.transactionId
    const transaction = await transactionDAO.findTransactionById(transactionId)
    const email = transaction.participant.email
    const name = transaction.participant.name

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Your Donation",
      text: `Dear ${name},\n\nThank you for your generous donation! We greatly appreciate your support.\n\nBest regards,\nThe Team`,
    };

    const emailRecipt = await transporter.sendMail(mailOptions);
    logger.info('email sent', emailRecipt)
    res.status(200).json({ status: true, data: emailRecipt });
  } catch (error) {
    logger.error('error sending thnx email', error)
    res.status(500).json({ status: false, error: 'Thnx email Internal server error' });
  }
}
```

<!-- TOC --><a name="emailroutesjs-1"></a>
#### email.routes.js
```js
const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

router.post('/:transactionId', emailController.sendThnxEmail);

module.exports = router;
```

<!-- TOC --><a name="swagger-documentation-for-email-routes"></a>
#### swagger documentation for email routes
```js
/**
 * @swagger
 * /api/email/{transactionId}:
 *   post:
 *     summary: Send thank-you email for a donation
 *     tags:
 *       - Emails
 *     parameters:
 *       - in: path
 *         name: transactionId
 *         required: true
 *         description: ID of the transaction used to retrieve participant info
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Thank-you email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   description: Nodemailer response info
 *       500:
 *         description: Server error while sending the email
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 error:
 *                   type: string
 */
router.post('/:transactionId', emailController.sendThnxEmail);
```

<!-- TOC --><a name="appjs-6"></a>
#### app.js
```js
const emailRoutes = require('./routes/email.routes')

app.use('/api/email', emailRoutes)
```

<!-- TOC --><a name="stripe-checkout"></a>
# Stripe CheckOut
<!-- TOC --><a name="back-end-stripe"></a>
## back end διαχείρηση του Stripe

<!-- TOC --><a name="servicesstriperservicejs"></a>
#### services/striper.service.js
```js
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const express = require('express');

const QUANTITY = 1; // just number not string

// παίρνει απο το φροντ το price_id και της πληροφορίες του πελάτη για να τις περάσει ως μεταντατα. Αργοτερα κατάλαβα οτι τα μεταντατα χάνονται, αλλα το αφήνω εδώ γιατι μπορεί να φανει χρήσιμο
const createCheckoutSession = async (price_id, participantInfo = {}) => {
  const BACKEND_URL = process.env.YOUR_DOMAIN || 'http://localhost:3000';
  const FRONTEND_URL = process.env.FRONTEND_URL || 'http://http://localhost:5173'

  // added to get the participant info from front to be able to create a new transaction
  const metadata = {
    name: participantInfo.name || '',
    surname: participantInfo.surname || '',
    email: participantInfo.email
  }
  console.log('Creating checkout session with metadata:', metadata);

  return await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: price_id,
        quantity: QUANTITY,
      },
    ],
    mode: 'payment',

    // success_url: `${BACKEND_URL}/success?success=true&session_id={CHECKOUT_SESSION_ID}`,
    success_url: `${FRONTEND_URL}/success?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${FRONTEND_URL}/cancel?canceled=true`,
    metadata: metadata

  });
};

const retrieveSession = async (sessionId) => {
  return await stripe.checkout.sessions.retrieve(sessionId);
};

module.exports = {
  createCheckoutSession,
  retrieveSession
};
```

<!-- TOC --><a name="stripecontrollerjs"></a>
#### stripe.controller.js
```js
const stripeService = require('../services/stripe.service');
const transactionDAO = require('../daos/transaction.dao');
const participantDAO = require('../daos/participant.dao');

const createCheckoutSession = async (req, res) => {
  const price_id = req.params.price_id;
  // added to catch participant url params
  const participantInfo = req.body.participantInfo;


  try {
    // added participantInfo to catch participant url params
    const session = await stripeService.createCheckoutSession(price_id, participantInfo);
    res.json(session);
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).json({ error: error.message });
  }
};
// επειδή το τεστ γινόνταν με κανονικα λεφτα κράτησα μερικα url επιστροφής. αν τα βάλεις στον browser θα συμπεριφερθει σαν επιτυχεία συναλαγής δημιουργόντας transaction και ανανεώνοντας τον participant.
// test url http://localhost:5173//api/stripe/success?success=true&session_id=cs_live_a1mkTS6fqvKZOmhtC9av3fmJoVGLpTae5WARcA3vclGPqs1CgNUzRxm5iu
// test url http://localhost:5173/success?success=true&session_id=cs_live_a1n8TEyTBIrIsdg1taD0a2TjB5QaiCWTWSlGF6sslVeqXSnQgykb9yHDyp
// test url http://localhost:5173/success?success=true&session_id=cs_live_a16HqUdBc0VjlzlhfxfzMCDML6jYuvKoSXYusUdEwcTOO3RKCuperj2RB7
const handleSuccess = async (req, res) => {
  try {
    // συλλέγω διάφορα δεδομένα του χρήστη απο το url του success
    const sessionId = req.query.session_id;
    if (!sessionId) {
      return res.status(400).send('Missing session ID.');
    }

    //prevent dublicate transactions
    const existingTransaction = await transactionDAO.findBySessionId(sessionId);
    if (existingTransaction) {
      return res.status(200).send("Transaction already recorded.");
    }

    // δεν είμαι σιγουρος τι κανει. αλλα μάλλον κάνει await το response
    const session = await stripeService.retrieveSession(sessionId);

    const name = session.metadata.name
    const surname = session.metadata.surname
    const email  = session.metadata.email 

    if (!email) {
      return res.status(400).send('Missing session ID.');
    }

    // κάνω τα ευρώ σέντς
    const amountTotal = session.amount_total / 100; // Stripe returns cents

    console.log(`Payment success for: ${email}, amount: ${amountTotal}`);

    // ψαχνω τον participant απο το ημαιλ του για να τον ανανεώσω αν υπάρχει ή ν α τον δημιουργήσω
    let participant = await participantDAO.findParticipantByEmail(email);

    if (participant) {
      console.log(`Participant ${participant.email} found`);      
    }

    if (!participant) {
      console.log('Participant not found, creating new one...');
      // δημιουργία νεου participant
      participant = await participantDAO.createParticipant({ email: email, name: name, surname: surname });
    }

    // δημιουργία transaction
    const newTransaction = await transactionDAO.createTransaction({
      amount: amountTotal,
      processed: false,
      participant: participant._id
    });
    console.log("new transaction>>>", newTransaction);

    // push the new transaction’s _id into the participant’s transactions array
    await participantDAO.addTransactionToParticipant(
      participant._id,
      newTransaction._id
    );
    console.log(`Added transaction ${newTransaction._id} to participant ${participant._id}`);
    

    return res.send('Success! Your donation was recorded. Thank you!');
  } catch (error) {
    console.error('Error processing success route:', error.message);
    return res.status(500).send('Something went wrong.');
  }
};

const handleCancel = (req, res) => {
  return res.send('Payment canceled! :(');
};

module.exports = {
  createCheckoutSession,
  handleSuccess,
  handleCancel
};
```

<!-- TOC --><a name="striperoutesjs"></a>
#### stripe.routes.js
```js
const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripe.controller');

router.post('/checkout/:price_id', stripeController.createCheckoutSession);
router.get('/success', stripeController.handleSuccess);
router.get('/cancel', stripeController.handleCancel);

module.exports = router;
```

<!-- TOC --><a name="swagger-documentation-for-stripe-routes"></a>
#### swagger documentation for stripe routes
```js
/**
 * @swagger
 * /api/stripe/checkout/{price_id}:
 *   post:
 *     summary: Create a Stripe Checkout session
 *     tags: [Stripe]
 *     parameters:
 *       - in: path
 *         name: price_id
 *         required: true
 *         schema:
 *           type: string
 *         description: Stripe price ID for the product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               participantInfo:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   surname:
 *                     type: string
 *                   email:
 *                     type: string
 *                     format: email
 *     responses:
 *       200:
 *         description: Checkout session created
 *       500:
 *         description: Server error
 */
router.post('/checkout/:price_id', stripeController.createCheckoutSession);

/**
 * @swagger
 * /api/stripe/success:
 *   get:
 *     summary: Handle success callback from Stripe
 *     tags: [Stripe]
 *     parameters:
 *       - in: query
 *         name: session_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The Stripe session ID
 *     responses:
 *       200:
 *         description: Transaction recorded or already exists
 *       400:
 *         description: Missing session ID
 *       500:
 *         description: Error processing transaction
 */
router.get('/success', stripeController.handleSuccess);

/**
 * @swagger
 * /api/stripe/cancel:
 *   get:
 *     summary: Handle canceled payment from Stripe
 *     tags: [Stripe]
 *     responses:
 *       200:
 *         description: Payment canceled
 */
router.get('/cancel', stripeController.handleCancel);
```

<!-- TOC --><a name="appjs-7"></a>
#### app.js
```js
const stripeRoutes = require('./routes/stripe.routes')

app.use('/api/stripe', stripeRoutes)
```

<!-- TOC --><a name="teststripetestjs"></a>
#### __test__/stripe.test.js
```js

// 1) Mock the Stripe library so it never talks to the real Stripe API:
jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => ({
    checkout: {
      sessions: {
        // Default: succeed with this fake session
        create: jest.fn().mockResolvedValue({
          id: 'mock_session_id',
          url: 'https://mock-stripe-url.com/checkout'
        })
      }
    }
  }));
});

const request = require('supertest');
const app = require('../app');

describe('Stripe Controller', () => {
  describe('POST /api/stripe/checkout/:price_id', () => {

    it('should create a checkout session and return it', async () => {
      const response = await request(app)
        .post('/api/stripe/checkout/mock_price_id')
        .send({
          participantInfo: {
            name: 'John',
            surname: 'Doe',
            email: 'john@example.com'
          }
        });

      expect(response.status).toBe(200);
      // We only check that our mock data comes back:
      expect(response.body).toHaveProperty('id', 'mock_session_id');
      expect(response.body).toHaveProperty(
        'url',
        'https://mock-stripe-url.com/checkout'
      );
    });
  });
});
```

<!-- TOC --><a name="front-end-stripe"></a>
## front end διχείρηση του Stripe
- Οταν πατηθεί το κουμπί buy me a coffe στο menu, πριν πάμε στο checkout συλλεγουμε πληροφορίες του participant μέσο μιας φορμας που στο submit μας κατευθήνει στο chekout
<!-- TOC --><a name="participantinfoformjsx"></a>
####  ParticipantInfoForm.jsx
```jsx
// Οταν πατηθεί το κουμπί buy me a coffe στο menu, πριν πάμε στο checkout συλλεγουμε πληροφορίες του participant μέσο μιας φορμας που στο submit μας κατευθήνει στο chekout
// στέλνει ολες τις πληροφορίες του participant ως parms στο checkout και απο εκεί στο backend. Αργοτερα κατάλαβα οτι αυτό είναι περιτό αλλα το αφησα εδω γιατί μπορεί να χρειαστεί

import { Table, Form, Button } from 'react-bootstrap'
import Checkout from '../components/Checkout'
import {
  BrowserRouter as Router,
  useNavigate
} from 'react-router-dom'

const ParticipantInfoForm = ({ setNewParticipant }) => {

  const navigate = useNavigate()

  const handleSubmitParticipant = async (event) => {
    const name = event.target.name.value
    const surname = event.target.surname.value
    const email = event.target.email.value

    if (!email) {
      alert('please enter your email')
    }

    setNewParticipant({
      name: name,
      surname: surname,
      email: email
    })

    // Create a query string from the newParticipant object
    const params = new URLSearchParams({
      name: name,
      surname: surname,
      email: email,
    }).toString()

    navigate(`/checkout?${params}`)
  }

  return (
    <>
      <div>
        <h2>Participant info</h2>
        <Form onSubmit={handleSubmitParticipant}>
          <Form.Group>
            <Form.Label>name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="First Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>surname:</Form.Label>
            <Form.Control
              type="text"
              name="surname"
              placeholder="Last Name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="email"
              required 
            />
          </Form.Group>
          <Button className='mt-3' variant="primary" type="submit">
            procced to checkout
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ParticipantInfoForm
```

<!-- TOC --><a name="checkoutjsx"></a>
#### Checkout.jsx
```jsx
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios' 

import oneCoin from '../assets/handsMoneyCrop.jpg'
import twoCoins from '../assets/two coins.jpg'
import threeCoins from '../assets/three_coins.svg.png'

// added to stripe boilerplate to extract new participant info from url
import { useSearchParams } from 'react-router-dom'

const PUBLIC_STRIPE_KEY = 'pk_live_51REuM3EsaPshQGwVZxSzQyBw2SJj4CnnSxuf6yWokbg5dRVAM0WpDFrIHnlF0sqQgykl4WVxCw5gA6bhDHWeyrFE00muoS3dkU'
const BACKEND_URL = 'http://localhost:3001';
const PRICE_ID_050 = 'price_1RGPe4EsaPshQGwV6vXbMrhE'
const PRICE_ID_051 = 'price_1RGkyMEsaPshQGwV7rsnw60y'
const PRICE_ID_052 = 'price_1RGlWzEsaPshQGwVGwpZ9TSb'

const stripePromise = loadStripe(`${PUBLIC_STRIPE_KEY}`)

const Checkout = () => {
  // added to stripe boilerplate to extract new participant info from url
  const [searchParams] = useSearchParams()

  const handleCheckout = async (price_id) => {
    const participantInfo = { 
      name: searchParams.get('name'),
      surname: searchParams.get('surname'),  
      email: searchParams.get('email'),
    };
    console.log("participant info>>>", participantInfo);
    console.log(">>> button clicked, price_id =", price_id)

    try {
      // added participant info to be sent to back via url params
      const response = await axios.post(`${BACKEND_URL}/api/stripe/checkout/${price_id}`, { participantInfo })

      const { id } = response.data
  
      const stripe = await stripePromise
      await stripe.redirectToCheckout({ sessionId: id })
    } catch (error) {
      console.log(error)
    }
  }

    // const handleCheckout = async (price_id) => {
    //   try {
    //     const response = await axios.post(`${BACKEND_URL}/api/stripe/checkout/${price_id}`)
    //     const { id } = response.data
    
    //     const stripe = await stripePromise
    //     await stripe.redirectToCheckout({ sessionId: id })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

  return (
    <div className="container mt-5" style={{ backgroundColor: '#242424', color: 'white' }}>
      <h1 className="mb-4 text-center">Support this demo</h1>

      <div className="row justify-content-center">
        {/* Card 1 */}
        <div className="col-12 col-sm-4 mb-4">
          <div className="card border border-white p-3 h-100">
            <img src={oneCoin} className="card-img-top" alt="Donate 0.50€" />
            <div className="card-body text-center">
              <h5 className="card-title">Donate 0.50€</h5>
              <p className="card-text">A small but mighty donation 🙏</p>
              <button className="btn btn-primary" onClick={() => handleCheckout(PRICE_ID_050)}>Donate 0.50€</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-sm-4 mb-4">
          <div className="card border border-white p-3 h-100">
            <img src={twoCoins} className="card-img-top" alt="Donate 0.51€" />
            <div className="card-body text-center">
              <h5 className="card-title">Donate 0.51€</h5>
              <p className="card-text">Slightly more generous 😄</p>
              <button className="btn btn-success" onClick={() => handleCheckout(PRICE_ID_051)}>Donate 0.51€</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-sm-4 mb-4">
          <div className="card border border-white p-3 h-100">
            <img src={threeCoins} className="card-img-top" alt="Donate 0.52€" />
            <div className="card-body text-center">
              <h5 className="card-title">Donate 0.52€</h5>
              <p className="card-text">Wow, you're a hero! 💪</p>
              <button className="btn btn-warning" onClick={() => handleCheckout(PRICE_ID_052)}>Donate 0.52€</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
```

<!-- TOC --><a name="homejsx"></a>
#### Home.jsx
- στο home πρέπει να γινουν αλλαγές γιατί διαχειρίζετε τα url της επιστροφής απο cancel και success
```jsx
const Home = ({ message, setMessage, url }) => {
  // επρεπε να γίνει γιατι καλούσε το success 2 φορες δημιουργώντας 2 transactions
  const hasCalledSuccessRef = useRef(false);

  const [searchParams] = useSearchParams()
  useEffect(() => {
    const canceled = searchParams.get('canceled'); 
    const success = searchParams.get('success')
    // added to manage to call stripe.controller.js handlesucces from frontend
    const sessionId = searchParams.get('session_id');
    console.log("sessionId", sessionId);
    

    if (success === 'true' && sessionId && !hasCalledSuccessRef.current){
      // επρεπε να φτιαξω μια νεα function γιατι το axios δεν δουλευε αλλιώς
      const fetchSuccess = async () => {
        try {
          const result = await axios.get(`${url}/stripe/success?session_id=${sessionId}`)
          console.log("Success response:", result.data);
          // για να εμποδίσει επανάληψη της κλήσης
          hasCalledSuccessRef.current = true;
        } catch (error) {
          console.error ("Error handling success:", error)
        }
      }
      fetchSuccess()
      setMessage(`Payment successful! thank you! :)
                  you will soon receive an email with the details`)
    }

    if (canceled === 'true') {
      setMessage('Payment canceled! :(');
      setTimeout(() => {
        setMessage('');
      }, 7000); 
    }

  }, [searchParams, setMessage, url])

  return (
  )
}
```

- και να φτιάξω τα routes στο αρχικό App
<!-- TOC --><a name="appjsx-3"></a>
#### App.jsx
```jsx
      <Routes>
        <Route path="/cancel" element={
          <>
            <Home 
              message={message}
              setMessage={setMessage}
              url={url}
            />
          </>
        } />

        <Route path="/success" element={
          <>
            <Home 
              message={message}
              setMessage={setMessage}
              url={url}
            />
          </>
        } /> 

        <Route path='/buymeacoffee' element={
          // <Checkout />
          <Participantinfoform 
            // newParticipant={newParticipant}
            setNewParticipant={setNewParticipant}
          />
        } />

        <Route path='/checkout' element={
          <Checkout 
            // newParticipant={newParticipant}
          />
        } />
      </Routes>
```

<!-- TOC --><a name="appjsx-appbar-"></a>
# App.jsx -> Appbar επάνω δεξια
```jsx
<div className="bg-dark text-light d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh', position: 'relative' }}>

    <div className="position-absolute top-0 end-0 p-2 z-3">
      <Appbar 
        admin={admin}
        handleLogout={handleLogout}
      />
    </div>
</div>
```
---
<!-- TOC --><a name="biased-tarot"></a>
# **BIASED TAROT**
<!-- TOC --><a name="biased-tarot-backend"></a>
# Biased Tarot backend
<!-- TOC --><a name="env-1"></a>
#### .env
```
OPENAI_API_KEY=sk***
```

<!-- TOC --><a name="appjs-8"></a>
#### app.js
```js
const tarotRoutes = require('./routes/tarot.routes');

app.use('/api/tarot', tarotRoutes);
```

<!-- TOC --><a name="querymodelsjs"></a>
#### query.models.js
```js
const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  message: String,
  bias: String,
},
{
  collection: 'queries',
  timestamps: true
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
```

<!-- TOC --><a name="tarotservicejs"></a>
### tarot.service.js
```js
// tarot.service.js

// αυτό το σέβις έχει την τράπουλα, την κλήρωση, την μετατροπή των τραβηγμένων σε λεκτικά και την επιλογή της γλώσσας του prompt
// θα χρειαστώ και τα δυο getTarotReading και gpt_prompt στον controller για να τα στείλω στο getGPTResponse

const majorArcana = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Hierophant",
  "The Lovers",
  "The Chariot",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "Justice",
  "The Hanged Man",
  "Death",
  "Temperance",
  "The Devil",
  "The Tower",
  "The Star",
  "The Moon",
  "The Sun",
  "Judgement",
  "The World"
];
const wands = [
  "Ace of Wands",
  "Two of Wands",
  "Three of Wands",
  "Four of Wands",
  "Five of Wands",
  "Six of Wands",
  "Seven of Wands",
  "Eight of Wands",
  "Nine of Wands",
  "Ten of Wands",
  "Page of Wands",
  "Knight of Wands",
  "Queen of Wands",
  "King of Wands"
];
const cups = [
  "Ace of Cups",
  "Two of Cups",
  "Three of Cups",
  "Four of Cups",
  "Five of Cups",
  "Six of Cups",
  "Seven of Cups",
  "Eight of Cups",
  "Nine of Cups",
  "Ten of Cups",
  "Page of Cups",
  "Knight of Cups",
  "Queen of Cups",
  "King of Cups"
];
const swords = [
  "Ace of Swords",
  "Two of Swords",
  "Three of Swords",
  "Four of Swords",
  "Five of Swords",
  "Six of Swords",
  "Seven of Swords",
  "Eight of Swords",
  "Nine of Swords",
  "Ten of Swords",
  "Page of Swords",
  "Knight of Swords",
  "Queen of Swords",
  "King of Swords"
];
const pentacles = [
  "Ace of Pentacles",
  "Two of Pentacles",
  "Three of Pentacles",
  "Four of Pentacles",
  "Five of Pentacles",
  "Six of Pentacles",
  "Seven of Pentacles",
  "Eight of Pentacles",
  "Nine of Pentacles",
  "Ten of Pentacles",
  "Page of Pentacles",
  "Knight of Pentacles",
  "Queen of Pentacles",
  "King of Pentacles"
];

// κατασκευάζω ένα arr με όλες τις κάρτες ταρώ - ως λεκτικά ονοματα πχ "Ace of Swords", "The Hierophant",
const tarotDeck = [
  ...majorArcana,
  ...cups,
  ...pentacles,
  ...swords,
  ...wands,
];

// τραβάω έναν τυχαίο αριθμό απο το 0-77 (78 κάρτες) 
const random = () => {
  return Math.floor(Math.random() * 78); // 78 to include 77 in the range
};

// καλέι την random για να τραβήξει τρείς διαφορετικές κάρτες (αρηθμιτικά)
const draw = () => {
  const first = random();
  let second = random();
  while (second === first) {
    second = random();
  }

  let third = random();
  while (third === first || third === second) {
    third = random();
  }
  return {
    first: first,
    second: second,
    third: third
  };
};


const drawnCards = () => {
  // καλεί την draw για να διαλέξει 3 νούμερα απο το 0-77
  const drawnCards = draw();

  // χρησιμοποιεί τα νούμερα ως index για να βρεί τις κάρτες απο το [] tarotDeck και τις βάζει σε ένα array
  const selectedCards = [
    tarotDeck[drawnCards.first],
    tarotDeck[drawnCards.second],
    tarotDeck[drawnCards.third]
  ];

  return {
    selectedCards
  };
};

const gpt_prompt = (lang) => {
  if (!lang) {
    lang = 'en' //default to english
  }

  //φτιάχτο το λεκτικό που θα στείλω στο gpt
  const tarot_prompt = lang === 'en' 
    ? "You are a Tarot interpreter. Provide a detailed interpretation of the following Tarot cards in direct response to the question asked."
    : "Είσαι ερμηνευτής Ταρώ. Παρέχετε μια λεπτομερή ερμηνεία των παρακάτω καρτών Ταρώ σε άμεση απάντηση στην ερώτηση που τέθηκε.";

  return tarot_prompt
}

module.exports = { 
  drawnCards,
  gpt_prompt
};
```

<!-- TOC --><a name="gptservicejs"></a>
#### gpt.service.js
```js
// gpt.service.js
const axios = require('axios');

// αυτο το service παίρνει την ερώτηση του χρήστη, τισ κάρρτες που έχουν τραβηχτεί και το bias και μου επιστρέφει την απάντηση του gpt
// έχει ότι έχει να κάνει με το gpt api

const getGPTResponse = async (gpt_prompt, userQuestion, drawnCards, bias, apiKey) => {

  // φτιάχνω το πλήρες gpt prompt με την ερωτησή μου, τις κάρτες, και το bias
  const fullPrompt = `${gpt_prompt} 
  Question: ${userQuestion} 
  Drawn Cards: ${drawnCards.join(', ')} 
  Bias: ${bias || 'None'}`;

  // αυτό είναι το url του gpt api
  const url = 'https://api.openai.com/v1/chat/completions';

  // κάνω την κλήση μου με μοντέλο 3.5 (θέλει το api key)
  // η όλλη function μου επιστρέφει μεσο του response.data.choices[0].message.content την απάντηση του gpt
  
  try {
    const response = await axios.post(url, {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: fullPrompt }],
    }, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    throw new Error(`Error fetching GPT response: ${error.message}`);
  }
 
  // return axios.post(url, {
  //   model: 'gpt-3.5-turbo',
  //   messages: [{ role: 'user', content: fullPrompt }],
  // }, {
  //   headers: {
  //     'Authorization': `Bearer ${apiKey}`,
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then(response => response.data.choices[0].message.content)
  //   .catch(error => {
  //     throw new Error(`Error fetching GPT response: ${error.message}`);
  //   });
};

module.exports = { getGPTResponse };
```

<!-- TOC --><a name="tarotcontrollerjs"></a>
#### tarot.controller.js
```js
// tarot.controller.js

// κάνω import τα σεβισις μου και το μοντέλο μου
const { drawnCards } = require('../services/tarot.service');
const { gpt_prompt } = require('../services/tarot.service')
const { getGPTResponse } = require('../services/gpt.service');
const Query = require('../models/query.models');

exports.getTarotReading = async (req, res) => {

  const apiKey = process.env.OPENAI_API_KEY

  // παίρνει απο το front γγλώσσ / bias / ερώτηση
  const lang = req.body.lang || req.query.lang
  const bias = req.body.bias || req.query.bias
  let userQuestion = req.body.userQuestion || req.query.userQuestion // δεν θημάμαι αν το front μου το στέλνει ως ulr params ή ως Body. Αλλ έτσι είναι πιο γενικό

  // αν δεν έχει ερώτηση τότε μια γενική ερώτηση
  if (!userQuestion) {
    userQuestion = "What do I need to know today?"
  }

  try {
    const cards = drawnCards().selectedCards // τραβάει 3 χαρτιά ως λεκτικό // το .selectedCards χρειάζετε γιατι το dranCards επιστρέφει ένα αντικείμενο με το κλειδί selectedCards
    const prompt = gpt_prompt(lang) // καλέι το γενικό Prompt στη σωστή γλώσσα
    const gptResponse = await getGPTResponse(prompt, userQuestion, cards, bias, apiKey) // επικοινωνεί με το api

    // μου αποθηκεύει την ερώτηση
    const query = new Query({
      message: userQuestion,
      bias: bias
    });
    await query.save();

    res.status(200).json({
      drawnCards: cards,
      gptResponse,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
```

<!-- TOC --><a name="tarotroutesjs"></a>
#### tarot.routes.js
```js
// tarot.routes.js

const express = require('express');
const tarotController = require('../controllers/tarot.controller');

const router = express.Router();

router.post('/tarot-reading', tarotController.getTarotReading);

module.exports = router;
```

<!-- TOC --><a name="swager-docs-for-tarot-routes"></a>
#### swager docs for tarot routes
```js
/**
 * @swagger
 * /api/tarot/tarot-reading:
 *   post:
 *     summary: Get a Tarot reading and GPT interpretation.
 *     description: Returns 3 drawn tarot cards and a GPT-based interpretation based on user's question, language, and bias.
 *     tags:
 *       - Tarot
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userQuestion:
 *                 type: string
 *                 example: "What should I focus on in my career?"
 *               bias:
 *                 type: string
 *                 example: "optimistic"
 *               lang:
 *                 type: string
 *                 example: "en"
 *     responses:
 *       200:
 *         description: Success - Tarot reading and GPT interpretation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 drawnCards:
 *                   type: object
 *                   properties:
 *                     drawnCards:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example: ["The Lovers", "Three of Cups", "The Tower"]
 *                 gptResponse:
 *                   type: string
 *                   example: "The cards suggest a powerful emotional connection..."
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: Internal server error
 */
router.post('/tarot-reading', tarotController.getTarotReading);
```

<!-- TOC --><a name="__test___tarottestjs"></a>
#### __test___/tarot.test.js
```js
const request = require('supertest');
const mongoose = require('mongoose');
const Query = require('../models/query.models');
require('dotenv').config();
const app = require('../app');

// Mock GPT service
jest.mock('../services/gpt.service', () => ({
  getGPTResponse: jest.fn(),
}));

const { getGPTResponse } = require('../services/gpt.service');

// Prevent saving queries to DB
jest.mock('../models/query.models', () => {
  const actualModel = jest.requireActual('../models/query.models');
  actualModel.prototype.save = jest.fn().mockResolvedValue();
  return actualModel;
});

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_TEST_URI);
});

afterAll(async () => {
  await Query.deleteMany({});
  await mongoose.disconnect();
});

describe("Tarot API", () => {
  it("should return 3 tarot cards and a mocked GPT interpretation without saving to DB", async () => {
    getGPTResponse.mockResolvedValue("This is a mocked GPT interpretation.");

    const res = await request(app)
      .post("/api/tarot/tarot-reading")
      .send({
        userQuestion: "What should I focus on in my career?",
        bias: "optimistic",
        lang: "en",
      });

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.drawnCards)).toBe(true);
    expect(res.body.drawnCards.length).toBe(3);
    expect(res.body.gptResponse).toBe("This is a mocked GPT interpretation.");
  });
});
```

<!-- TOC --><a name="biased-tarot-frontend"></a>
# Biased Tarot Frontend

<!-- TOC --><a name="appjsx-4"></a>
#### App.jsx
```jsx
        <Route path='/deck1' element={
            <Deck1 />
        } />
```

<!-- TOC --><a name="homejsx-1"></a>
#### Home.jsx
```jsx
      <TarotHome />
```

<!-- TOC --><a name="tarothomejsx"></a>
#### TarotHome.jsx
```jsx
import { useState, useEffect } from "react";
import CardImages from "./CardImages";
import axios from "axios";
import Question from "./Question";
import Settings from "./Settings"
import Language from "./Language"

import {
  BrowserRouter as Router,
  Routes, Route, Link, useNavigate
} from 'react-router-dom'

import banner from '../assets/banner.png';

const TarotHome = () => {
  const [ gptResponse, setGptResponse ] = useState("");
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");
  const [ selectedCards, setSelectedCards ] = useState([]);
  const [ drawnCards, setDrawnCards ] = useState([]);
  const [ newQuestion, setNewQuestion ] = useState('')
  const [ question, setQuestion ] = useState('')
  const [ bias, setBias ] = useState('');
  const [ lang, setLang ] = useState('en')

  const tarotUrl = "http://localhost:3001/api/tarot/tarot-reading"

  const navigate = useNavigate()

  useEffect(() => {
    const fetchTarotReading = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`${tarotUrl}`, {
          userQuestion: question,
          bias: bias,
          lang: lang,
        });
  
        setDrawnCards(response.data.drawnCards);
        setSelectedCards(response.data.selectedCards);
        console.log("from initial useffect selected cards", selectedCards);
        setGptResponse(response.data.gptResponse);
        setError(""); // Clear previous errors
      } catch (error) {
        console.error("Error fetching response:", error);
        setError("Failed to fetch Tarot reading.");
      } finally {
        setLoading(false);
      }
    };
  
    fetchTarotReading();
  }, [question, bias, lang]);

  useEffect(() => {
    if (drawnCards.length > 0) {
      // This effect will run whenever `drawnCards` is updated
      console.log("drawnCards", drawnCards);
      console.log("selectedCards", selectedCards);
    }
  }, [drawnCards, selectedCards]);

  // Function to map card indices to image paths
  // const mapCardToImage = (cardIndex) => {
  //   return `/deck1/${cardIndex}.jpg`; // Path to the image using the card index
  // };
  const mapCardToImage = (cardName) => {
    const cardNameToIndex = {
      "The Fool": 0,
      "The Magician": 1,
      "The High Priestess": 2,
      "The Empress": 3,
      "The Emperor": 4,
      "The Hierophant": 5,
      "The Lovers": 6,
      "The Chariot": 7,
      "Strength": 8,
      "The Hermit": 9,
      "Wheel of Fortune": 10,
      "Justice": 11,
      "The Hanged Man": 12,
      "Death": 13,
      "Temperance": 14,
      "The Devil": 15,
      "The Tower": 16,
      "The Star": 17,
      "The Moon": 18,
      "The Sun": 19,
      "Judgement": 20,
      "The World": 21,
      "Ace of Cups": 22,
      "Two of Cups": 23,
      "Three of Cups": 24,
      "Four of Cups": 25,
      "Five of Cups": 26,
      "Six of Cups": 27,
      "Seven of Cups": 28,
      "Eight of Cups": 29,
      "Nine of Cups": 30,
      "Ten of Cups": 31,
      "Page of Cups": 32,
      "Knight of Cups": 33,
      "Queen of Cups": 34,
      "King of Cups": 35,
      "Ace of Pentacles": 36,
      "Two of Pentacles": 37,
      "Three of Pentacles": 38,
      "Four of Pentacles": 39,
      "Five of Pentacles": 40,
      "Six of Pentacles": 41,
      "Seven of Pentacles": 42,
      "Eight of Pentacles": 43,
      "Nine of Pentacles": 44,
      "Ten of Pentacles": 45,
      "Page of Pentacles": 46,
      "Knight of Pentacles": 47,
      "Queen of Pentacles": 48,
      "King of Pentacles": 49,
      "Ace of Swords": 50,
      "Two of Swords": 51,
      "Three of Swords": 52,
      "Four of Swords": 53,
      "Five of Swords": 54,
      "Six of Swords": 55,
      "Seven of Swords": 56,
      "Eight of Swords": 57,
      "Nine of Swords": 58,
      "Ten of Swords": 59,
      "Page of Swords": 60,
      "Knight of Swords": 61,
      "Queen of Swords": 62,
      "King of Swords": 63,
      "Ace of Wands": 64,
      "Two of Wands": 65,
      "Three of Wands": 66,
      "Four of Wands": 67,
      "Five of Wands": 68,
      "Six of Wands": 69,
      "Seven of Wands": 70,
      "Eight of Wands": 71,
      "Nine of Wands": 72,
      "Ten of Wands": 73,
      "Page of Wands": 74,
      "Knight of Wands": 75,
      "Queen of Wands": 76,
      "King of Wands": 77,
    };
  
    const index = cardNameToIndex[cardName];
    return index !== undefined
      ? `/deck1/${index}.jpg`
      : '/deck1/default.jpg'; // fallback image
  };
  

  const parseResponse = () => {
    const cleanResponse = gptResponse.replace(/<\/?pre>/g, ""); // Remove <pre> and </pre> tags
    return cleanResponse.split("\n").map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  const reschafle = () => {
    window.location.reload();
  };

  const handleQuestionChange = (event) => {
    // console.log(event.target.value)
    setNewQuestion(event.target.value)
  }

  const handleShowDeck = () => {
    navigate('/deck1')
  }

  const addquestion = (event) => {
    event.preventDefault()
    setLoading(true)
    setQuestion(newQuestion)
    setNewQuestion('')
  }

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-dark text-white">

      <div className="container d-flex flex-column justify-content-center align-items-center py-4">

        // τις εικόνες πρέεπει να τις κάνεις ιμπορτ
        <img src={banner} alt="banner" className="img-fluid w-50" />

        <p className="w-50">“When I am furious about something, I sometimes beat the ground or a tree with my walking stick. But I certainly do not believe that the ground is to blame or that my beating can help anything... And all rites are of this kind.”
        ― Ludwig Wittgenstein, Remarks on Frazer's Golden Bough</p>

        <div>
            <Language lang={lang} setLang={setLang} />
        </div>


        <div className="d-flex justify-content-center row">
          <div className="text-center mb-4 col-4 d-flex align-items-stretch">
            <Link to="/deck1">
              <button onClick={handleShowDeck} className="btn btn-light">Show Deck</button>
            </Link>
          </div>
          <div className="col-1"></div>
          <div className="text-center mb-4 col-4 d-flex align-items-stretch">
            <button onClick={reschafle} className="btn btn-light ml-3">Reshuffle</button>
          </div>
        </div>

        <div className="viewDeck {}" id="viewDeck" >
        </div>

        <div className="viewQuestion" id="viewQuestion" >
          <Question newQuestion={newQuestion} handleQuestionChange={handleQuestionChange} addquestion={addquestion} />
    
        <div>
          <h1 className="mb-4">Tarot Reading</h1>
          {loading ? (
            <p>Loading...</p> // Display loading message only while waiting for response
          ) : error ? (
            <p style={{ color: "red" }}>{error}</p> // Display error message
          ) : question ? ( 
            // Only show results if a question has been submitted
            <div>
              <CardImages drawnCards={drawnCards} mapCardToImage={mapCardToImage} />
              <div>{parseResponse()}</div>
            </div>
          ) : (
            <br />
          )} {/* Show nothing if no question has been submitted */}
        </div>

        </div>

        <div>
          <Settings setBias={setBias} />

          {bias && (
            <p>Selected Bias: {bias}</p>
          )}

        </div>

      </div>
    </div>
  );
}

export default TarotHome
```

<!-- TOC --><a name="languagejsx"></a>
#### Language.jsx
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";

const Language = ({ lang, setLang }) => {
  const [ selectedLang, setSelectedLang ] = useState(lang)

  const handleLangChange = (event) => {
    const value = event.target.value;
    setSelectedLang(value); 
    if (value === 'gr') {
      setLang('gr');
    } else {
      setLang('el');
    } 
  };

  return (
    <div className="mb-3 d-flex justify-content-lg-start">
      <div className="form-check form-check-inline" >
        <input
          type="radio"
          id="en"
          name="lang"
          value="en"
          onChange={handleLangChange}
          checked={selectedLang === 'en'}
        />
        <label htmlFor="en" className="form-check-label"><img src="/images/small_Flag_of_Liberia.png" style={{ height: '1em', marginRight: '8px' }} />english </label>
      </div>

      <div className="form-check form-check-inline" >
        <input
          type="radio"
          id="gr"
          name="lang"
          value="gr"
          onChange={handleLangChange}
          checked={selectedLang === 'gr'}
        />
        <label htmlFor="gr" className="form-check-label"><img src="/images/small_Cretan_State.png" style={{ height: '1em', marginRight: '8px' }} />greek</label>
      </div> 
    </div>
  )
}
export default Language
```

<!-- TOC --><a name="questionjsx"></a>
#### Question.jsx
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
const Question = ({ newQuestion, handleQuestionChange, addquestion }) => {
  return (
    <div className="mb-4">
      <h4 className="mb-3">Ask a Question:</h4>
      <form onSubmit={addquestion} className="d-flex align-items-center">
        <input
          type="text"
          value={newQuestion}
          onChange={handleQuestionChange}
          className="form-control me-2" // Adds padding and some margin
          placeholder="Type your question here"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Question;
```

<!-- TOC --><a name="cardimagesjsx"></a>
#### CardImages.jsx
```jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const TarotCard = ({ position, cardName, mapCardToImage }) => (
  <div className="col-3 text-center">
    <h5>{position} Card</h5>
    <img
      src={mapCardToImage(cardName)}  // Pass the card name to mapCardToImage
      alt={`Card ${position}`}
      className="img-fluid rounded"
    />
    <p>{cardName}</p> {/* Optional: show card name below */}
  </div>
);

const CardImages = ({ drawnCards, mapCardToImage }) => {
  if (!drawnCards || drawnCards.length < 3) {
    return <p>Error: Not enough cards drawn.</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Drawn Tarot Cards</h2>
      <div className="row justify-content-center">
        <TarotCard position="First" cardName={drawnCards[0]} mapCardToImage={mapCardToImage} />
        <TarotCard position="Second" cardName={drawnCards[1]} mapCardToImage={mapCardToImage} />
        <TarotCard position="Third" cardName={drawnCards[2]} mapCardToImage={mapCardToImage} />
      </div>
    </div>
  );
};

export default CardImages;
```

<!-- TOC --><a name="settingsjsx"></a>
#### Settings.jsx
```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import InnerSettings from "./InnerSettings";
import { useState } from "react";

const Settings = ({ setBias }) => {
  const password = 'settings'
  const [ newPasword, setNewPassword] = useState('')
  const [ isPassed, setIsPassed ] = useState(false)

  const handlePassChange = (event) => {
    console.log(event.target.value)
    setNewPassword(event.target.value)
  }
  const checkPass = (event) => {
    event.preventDefault()
    if (newPasword === password) {
      setIsPassed(true)
    }
    setNewPassword('')
  }

  return(
    <div>
      {isPassed ? (
        <div>
          <InnerSettings setBias={setBias} />
        </div>
      ) : (
        <div className="mb-3">
          <h4 className="mb-2" style={{ fontSize: '0.7rem' }}>Password for settings:</h4>
          <form onSubmit={checkPass} className="d-flex align-items-center">
            <input
              type="text"
              value={newPasword}
              onChange={handlePassChange}
              className="form-control me-1 p-1" // More reduced padding and margin
              placeholder="Enter settings password"
              style={{ fontSize: '0.65rem' }} // Smaller input text
            />
            <button type="submit" className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>Submit</button> 
          </form>
        </div>
      )}

    </div>
  )
}

export default Settings
```

<!-- TOC --><a name="innersettingsjsx"></a>
#### InnerSettings.jsx
```jsx
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const InnerSettings = ({ setBias }) => {
  const [newBias, setNewBias] = useState('the answer will include the topic');
  const [selectedBias, setSelectedBias] = useState('');

  const handleBiasChange = (event) => {
    const value = event.target.value;
    setSelectedBias(value); // Track selected radio button

    if (value === 'good') {
      setBias('the answer will give ONLY good and optimistic results');
    } else if (value === 'bad') {
      setBias('the answer will give ONLY bad and pessimistic results');
    } else if (value === 'custom') {
      setBias(''); // Reset bias when custom is selected
    } else if (value === 'neutral') {
      setBias('')
    }
  };

  const handleCustomBiasChange = (event) => {
    setNewBias(event.target.value);
  };

  const handleSubmitCustomBias = (event) => {
    event.preventDefault();
    // Submit the custom bias with the prefix only once
    setBias(`the answer will include the topic: ${newBias.replace(/^the answer will include the topic\s*/, '')}`);
  };

  return (
    <div>
      <h3>Settings</h3>
      <div>
        <h4>Set Bias</h4>
        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="good"
            name="bias"
            value="good"
            className="form-check-input"
            onChange={handleBiasChange}
            checked={selectedBias === 'good'}
          />
          <label htmlFor="good" className="form-check-label">G</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="bad"
            name="bias"
            value="bad"
            className="form-check-input"
            onChange={handleBiasChange}
            checked={selectedBias === 'bad'}
          />
          <label htmlFor="bad" className="form-check-label">B</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="neutral"
            name="bias"
            value="neutral"
            className="form-check-input"
            onChange={handleBiasChange}
            checked={selectedBias === 'neutral'}
          />
          <label htmlFor="neutral" className="form-check-label">Neutral</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            type="radio"
            id="custom"
            name="bias"
            value="custom"
            className="form-check-input"
            onChange={handleBiasChange}
            checked={selectedBias === 'custom'}
          />
          <label htmlFor="custom" className="form-check-label">Custom</label>
        </div>

        {/* Only show the custom input when the "custom" option is selected */}
        {selectedBias === 'custom' && (
          <div>
            <textarea
              type="text"
              value={newBias}
              onChange={handleCustomBiasChange}
              className="form-control mt-2"
              placeholder="Type custom bias"
              rows={3}
            />
            <button
              onClick={handleSubmitCustomBias}
              className="btn btn-primary mt-2"
            >
              Submit Custom Bias
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InnerSettings;
```

<!-- TOC --><a name="deck1jsx"></a>
#### Deck1.jsx
```jsx
import { Link } from 'react-router-dom';

// Function to map card index to image path
const mapCardToImage = (cardIndex) => {
  return `/deck1/${cardIndex}.jpg`; // Path to the image using the card index
};

const Deck1btn = () => {
  return (
    <div>
      <h1>Deck1 Page</h1>
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </div>
  );
};

const Deck1 = () => {
  const imageCount = 78; // Update this to the number of images you have in the /deck1 folder

  // Generate an array with card indices from 0 to imageCount-1
  const cardIndexes = Array.from({ length: imageCount }, (_, index) => index);

  return (
    <div>
      <h1>This is the Deck1 Page</h1>
      <Deck1btn />
      
      <div className="image-gallery">
        {cardIndexes.map((index) => (
          <img
            key={index}
            src={mapCardToImage(index)}
            alt={`Card ${index}`}
            style={{ width: '100px', margin: '5px' }} // You can adjust the styling
          />
        ))}
      </div>
    </div>
  );
};

export default Deck1;
```

<!-- TOC --><a name="runs-on-httpsrevistedtarotbiasapponrendercom"></a>
# runs on https://revistedtarotbiasapp.onrender.com

<!-- TOC --><a name="correction-dont-save-what-do-i-need-to-know-today"></a>
## *correction* dont save "what do i need to know today"
<!-- TOC --><a name="tarotcontrollerjs-1"></a>
#### tarot.controller.js
```js
catch (error) {
    console.error("Failed to save query:", error);
  }
```

<!-- TOC --><a name="add-a-user-sign-up-sign-in-crud-"></a>
# add a user sign up / sign in για να δείξω ξεκάθαρα μια CRUD λειτουργεία

<!-- TOC --><a name="backend-users"></a>
# backend users

- swagger models add
```js
    components: {
      schemas: {
        Admin: m2s(Admin),
        Participant: m2s(Participant),
        Transaction: m2s(Transaction),
        User: m2s(User),
        Query: m2s(Query)
      },
    }
```
<!-- TOC --><a name="-users"></a>
## δημιουργία αρχείων για users
<!-- TOC --><a name="usersmodeljs"></a>
#### users.model.js
```js
const mongoose = require("mongoose")

const Schema = mongoose.Schema
const userSchema = new Schema({
  username:{
    type: String,
    required: [true, 'username is required'],
  },
  hashedPassword:{
    type: String,
    required: [true, 'password is required'],
  },
  roles:{
    type: [String],
    default: ['user'],
    immutable: true
  },
  query: [{
    type: mongoose.Schema.Types.ObjectId, // Each item here is an ObjectId pointing to a Query document
    ref: 'Query' // This tells Mongoose *which* collection/model to link (the 'Queries' model)
  }],
},
{
  collection: 'users',
  timestamps: true
})
module.exports = mongoose.model('User', userSchema)
```

<!-- TOC --><a name="userdaojs"></a>
#### user.dao.js
```js
const User = require('../models/user.models');
const Query = require('../models/query.models'); // βάζω και του query γιατι πρέπει να κανω Push το νεο query στον user

// Create a new user
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Get user by ID
const getUserById = async (userId) => {
  return await User.findById(userId).populate('query'); // populate queries if needed
};

// Find user by username
const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};

// Update user by ID
const updateUser = async (userId, updateData) => {
  return await User.findByIdAndUpdate(userId, updateData, { new: true });
};

// Delete user by ID
const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

// Add a query to a user
const addQueryToUser = async (userId, queryData) => {
  const newQuery = new Query(queryData);
  await newQuery.save();

  await User.findByIdAndUpdate(
    userId,
    { $push: { query: newQuery._id } }, // Push the query ID into the user's query array
    { new: true }
  );

  return newQuery; // Optionally return the newly created query
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  findUserByUsername,
  deleteUser,
  addQueryToUser
};
```

<!-- TOC --><a name="usercontrollerjs"></a>
#### user.controller.js
```js
const bcrypt = require('bcrypt')
const userDAO = require('../daos/user.dao');

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    
    const SaltOrRounds = 10
    const hashedPassword = await bcrypt.hash(userData.password, SaltOrRounds)
    const userToSave = {
      ...userData,
      hashedPassword,
    };

    const newUser = await userDAO.createUser(userToSave);
    res.status(201).json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (error) {
    console.error('Create User Error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userDAO.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Get User Error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Update user by ID
exports.updateUser = async (req, res) => {
  const { userId } = req.params;
  const updateData = req.body;

  try {
    if (updateData.password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(updateData.password, saltRounds);
      updateData.hashedPassword = hashedPassword;
      delete updateData.password; // Remove plain password
    }

    const updatedUser = await userDAO.updateUser(userId, updateData);
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Update User Error:', error);
    res.status(500).json({ error: error.message });
  }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const deletedUser = await userDAO.deleteUser(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete User Error:', error);
    res.status(500).json({ error: error.message });
  }
};
```
<!-- TOC --><a name="userroutes-swagger"></a>
#### user.routes (με swagger)
```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               roles:
 *                 type: array
 *                 items:
 *                   type: string
 *                 default: ["user"]
 *                 readOnly: true
 *     responses:
 *       201:
 *         description: User created successfully
 *       500:
 *         description: Server error
 */
router.post('/', userController.createUser);

/**
 * @swagger
 * /api/user/{userId}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User data
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get('/:userId', userController.getUserById);

/**
 * @swagger
 * /api/user/{userId}:
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       404:
 *         description: Not found
 *       500:
 *         description: Server error
 */
router.put('/:userId', userController.updateUser);

/**
 * @swagger
 * /api/user/{userId}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.delete('/:userId', userController.deleteUser);

module.exports = router;
```

<!-- TOC --><a name="-userauth-auth-"></a>
## θα φτιάξω ένα δικό του ανεξάρτητο userAuth αντιγράφοντας το auth για να μην επιρεασω την λειτουργεία αυτού που ήδη λειτουργει. 

- Προσοχή εδώ το auth πρέπει να στέλνει ολα τα στοιχεία
<!-- TOC --><a name="populateusermiddlewarejs"></a>
#### populateUser.middleware.js
```js
const User = require('../models/user.models');

const populateUser = async (req, res, next) => {
  try {
    const userId = req.user?.id

    if (!userId) {
      return res.status(400).json({ error: 'User ID missing from token' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    req.user.full = user; // attach full user document
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = populateUser;
```


<!-- TOC --><a name="userauthservicejs"></a>
#### userAuth.service.js
```js
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { OAuth2Client } = require('google-auth-library')

generateAccessToken = (user) => {
  const payload = {
    username: user.username,
    email: user.email,
    roles: user.roles,
    id: user._id
  }

  const secret = process.env.SECRET
  const options = {
    expiresIn: '1h'
  }
  const token = jwt.sign(payload, secret, options)
  return token
}

const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword)
}

const verifyAccessToken = (token) => {
  const secret = process.env.SECRET
  try {
    const payload = jwt.verify(token, secret)
    return { 
      verified: true, data: payload
    }
  } catch (error) {
    return { 
      verified: false, data: error.message
    }
  }
}

const getTokenFrom = (req) => {
  const authorization = req.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    const token = authorization.replace('Bearer ', '')
    // console.log(token)
    return token    
  }
  return null
}


module.exports = {
  generateAccessToken,
  verifyPassword,
  verifyAccessToken,
  getTokenFrom,
}
```

<!-- TOC --><a name="userauthcontrollerjs"></a>
#### user.auth.controller.js
```js
// https://github.com/mkarampatsis/coding-factory7-nodejs/blob/main/usersApp/controllers/auth.controller.js
// https://fullstackopen.com/en/part4/token_authentication
const bcrypt = require ('bcrypt')
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');
const User = require('../models/user.models')
const authService = require('../services/auth.service')
const userDAO = require('../daos/user.dao')

const FRONTEND_URL = process.env.FRONTEND_URL
exports.login = async (req,res) => {
  try {

    const username = req.body.username
    const password = req.body.password

    if (!username) {
      logger.warn("Login attempt missing username");
      return res.status(400).json({
        status: false,
        message: "Username is required"
      });
    }
    
    if (!password) {
      logger.warn("Login attempt missing password");
      return res.status(400).json({
        status: false,
        message: "Password is required"
      });
    }

    // Step 1: Find the user by username
    const user = await userDAO.findUserByUsername(req.body.username);

    if(!user){
      logger.warn(`Failed login attempt - user not found: ${username}`);
      return res.status(401).json({
        status: false,
        message: 'Invalid username or password or user not found'
      })
    }

    // Step 2: Check the password
    const isMatch = await authService.verifyPassword (password, user.hashedPassword)

    if(!isMatch){
      logger.warn(`Failed login attempt - incorrect password for user: ${username}`);
      return res.status(401).json({
        status: false,
        message: 'Invalid username or password'
      })
    }

    // Step 3: Generate the token
    const token = authService.generateAccessToken(user)
    logger.info(`User ${user.username} logged in successfully`);

    // Step 4: Return the token and user info
    res.status(200).json({
      status: true,
      data: {
        token: token,
        admin: {
          username: user.username,
          email: user.email,
          roles: user.roles,
          id: user._id
        }
      }
    })

  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    res.status(400).json({
      status: false,
      data: error.message
    })
  }
}
```

<!-- TOC --><a name="userauth-routes-swagger"></a>
#### userAuth. routes (με  swagger)
```js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/userAuth.controller'); // Rename your controller file to match if needed

/**
 * @swagger
 * tags:
 *   name: User Authentication
 *   description: User login and authentication
 */

/**
 * @swagger
 * /api/userAuth/login:
 *   post:
 *     summary: User login
 *     tags: [User Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [username, password]
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Missing input
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', authController.login);

// Optional: If you later add register, refresh token, logout, etc.
// router.post('/register', authController.register);
// router.post('/refresh-token', authController.refreshToken);

module.exports = router;
```

<!-- TOC --><a name="-queries-importand-user"></a>
## αλλαγές στο queries ωστε να έχει importand και να επικοινωνεί με το user

<!-- TOC --><a name="querymodelsjs-1"></a>
#### query.models.js
```js
// query.model.js

const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  question: String,
  bias: String,
  response: {
    type: String
  },
  important:{
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, // This stores a reference (ID) to a user document
    ref: 'User', // This tells Mongoose to link this field to the 'User' model
    required: true
  }
},
{
  collection: 'queries',
  timestamps: true
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
```

<!-- TOC --><a name="querydaojs"></a>
#### query.dao.js
```js
// dao/query.dao.js

const Query = require('../models/query.models');

const createQuery = async ({ question, bias, response, userId }) => {
  const query = new Query({
    question,
    bias,
    response,
    user: userId
  });
  return await query.save();
};

const getAllQueriesByUser = async (userId) => {
  return await Query.find({}).sort({ createdAt: -1 });
};

const toggleImportant = async (queryId) => {
  const query = await Query.findById(queryId);
  if (!query) {
    throw new Error('Query not found');
  }
  query.important = !query.important;
  return await query.save();
};

const deleteQuery = async (queryId) => {
  return await Query.findByIdAndDelete(queryId);
};

module.exports = {
  createQuery,
  getAllQueriesByUser,
  toggleImportant,
  deleteQuery
};
```

<!-- TOC --><a name="querycontrollerjs"></a>
#### query.controller.js
```js
// query.controller.js

const queryDAO = require('../daos/query.dao')
const userDAO = require('../daos/user.dao')

// Create a new query
exports.createQuery = async (req, res) => {
  const { question, bias, response } = req.body;
  // const userId = req.user._id; // να προσέξω στο front πως στέλνει το Id
  const userId = req.user.full._id;

  try {
    // Πρώτα το δημιουργώ στα queries
    const newQuery = await queryDAO.createQuery({
      question,
      bias,
      response,
      userId
    });

    // και μετά το προσθέτο στον user
    await userDAO.addQueryToUser(userId, newQuery);

    res.status(201).json({
      message: 'Query created successfully',
      query: newQuery
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Get all queries by user ID
exports.getAllQueriesByUser = async (req, res) => {
  const { userId } = req.params; // εδώ το στέλνει ως params? γιατι διαφορετικα

  try {
    const queries = await queryDAO.getAllQueriesByUser(userId);
    res.status(200).json(queries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// Toggle the "important" status of a query
exports.toggleImportant = async (req, res) => {
  const { queryId } = req.params; // να έρθει το queryId στα params

  try {
    const updatedQuery = await queryDAO.toggleImportant(queryId);
    res.status(200).json({ message: 'Query updated successfully', updatedQuery });
  } catch (error) {
    console.error(error);
    if (error.message === 'Query not found') {
      res.status(404).json({ error: 'Query not found' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a query by ID
exports.deleteQuery = async (req, res) => {
  const { queryId } = req.params; // να έρθει το queryId στα params

  try {
    await queryDAO.deleteQuery(queryId);
    res.status(200).json({ message: 'Query deleted successfully' });
  } catch (error) {
    console.error(error);
    if (error.message === 'Query not found') {
      res.status(404).json({ error: 'Query not found' });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};
```

<!-- TOC --><a name="queryroutesjs"></a>
#### query.routes.js
```js
// query.routes.js

const express = require('express');
const router = express.Router();
const queryController = require('../controllers/query.controller')
const { verifyToken } = require('../middlewares/verification.middleware');
const populateUser = require('../middlewares/populateUser.middleware');

/**
 * @swagger
 * /api/query:
 *   post:
 *     summary: Submit a query
 *     tags: [Queries]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required: [question, bias, response]
 *             properties:
 *               question:
 *                 type: string
 *               bias:
 *                 type: string
 *               response:
 *                 type: string
 *               important:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Query created
 *       500:
 *         description: Server error
 */
router.post('/', verifyToken, populateUser, queryController.createQuery); 

/**
 * @swagger
 * /api/query/{userId}:
 *   get:
 *     summary: Get queries by user ID
 *     tags: [Queries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of queries
 *       500:
 *         description: Server error
 */
router.get('/:userId', verifyToken, populateUser, queryController.getAllQueriesByUser);

/**
 * @swagger
 * /api/query/{queryId}/important:
 *   patch:
 *     summary: Toggle important status of a query
 *     tags: [Queries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: queryId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Query updated
 *       404:
 *         description: Query not found
 *       500:
 *         description: Server error
 */
router.patch('/:queryId/important', verifyToken, populateUser, queryController.toggleImportant);

/**
 * @swagger
 * /api/query/{queryId}:
 *   delete:
 *     summary: Delete a query by ID
 *     description: Deletes a query by its ID.
 *     tags: [Queries]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: queryId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the query to delete.
 *     responses:
 *       200:
 *         description: Query deleted successfully
 *       404:
 *         description: Query not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:queryId', verifyToken, populateUser, queryController.deleteQuery);

module.exports = router;
```

---
<!-- TOC --><a name="back-end-corrections"></a>
# back end corrections

<!-- TOC --><a name="chagne-to-middleware-user-dao-and-tarotcontroller-"></a>
#### chagne to middleware, user dao and tarot.controller δυσκολο προβλημα
```js
const optionalVerifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];

    try {
      const verificationResult = authService.verifyAccessToken(token);
      
      if (verificationResult.verified) {
        req.user = verificationResult.data;
      } else {
        console.warn("Optional token verification failed");
      }
    } catch (error) {
      console.warn("Optional token failed to verify:", error.message);
      // Continue without attaching user
    }
  }
  next();
};
```
- user.dao
```js
// Add a query to a user
const addQueryToUser = async (userId, queryId) => {
  console.log(`Adding query ${queryId} to user ${userId} (from addQueryToUser user.dao)`);
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    { $push: { query: queryId } }, // Push the query ID into the user's query array
    { new: true }
  );
  console.log('Updated user query array:', updatedUser.query);
  return updatedUser;
};
```

- tarot.controller ( το πρόβλημα ήταν οτι ενώ εσωζε κατευθείαν το query επειδή το έκανε μέσο του dao δεν το έσωζε στον χρήστη. kalesa kai to δαο του χρήστη)
```js
    if (userQuestion !== "What do I need to know today?" && userId) {
      // το πρόβλημα με όλα αυτά ήταν οτι έσωσζε κατευθείαν το query χωρίς να καλέσει κάπως τα εντποιντ του query με αποτέλσεμσ να μην σωζετε στον χρήστη
      const savedQuery = await queryDAO.createQuery({
        question: userQuestion, 
        bias: bias,
        response: gptResponseLastParagraph,
        userId: userId
      });
      console.log("query added to queries");
      await userDAO.addQueryToUser(userId, savedQuery._id)
    } 
```

- user dao
```js
const getAllUsers = async () => {
  return await User.find({}).populate('query'); // optionally populate related queries
};
```
- user controller
```js
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userDAO.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Get All Users Error:', error);
    res.status(500).json({ error: error.message });
  }
};
```

- routes
```js
/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Server error
 */
router.get('/', verifyToken, userController.getAllUsers);
```

-  αλλαγες στον populateUser.middleware.js
```js
const User = require('../models/user.models');

const populateUser = async (req, res, next) => {
  try {
    // αυτή η αλλαγή γίνετε για να επιτρέψει στον admin να έχει προσβαση στα queries του user
    // const userId = req.user?.id
   // if I'm an admin and the route has :userId, load *that* user
   const isAdmin = req.user?.roles?.includes('admin');
   const userId   = isAdmin && req.params.userId
                  ? req.params.userId
                  : req.user?.id;

    if (!userId) {
      return res.status(400).json({ error: 'User ID missing from token' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    req.user.full = user; // attach full user document
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = populateUser;
```


<!-- TOC --><a name="front-end-users"></a>
# front end users
<!-- TOC --><a name="appjsx-5"></a>
#### App.jsx
```jsx
  useEffect(() => {
    const token = localStorage.getItem("token")
    const roles = JSON.parse(localStorage.getItem("roles"))
    const adminFromStorage = JSON.parse(localStorage.getItem("admin"))
    // added
    const userFromStorage = JSON.parse(localStorage.getItem("user"));
    if (token && roles) {
      if (adminFromStorage && roles.includes("admin")) {
        setAdmin({ token, roles });
        setUserIsAdmin(true);
      } else if (userFromStorage) {
        setUser(userFromStorage);
        setUserIsAdmin(roles.includes("admin"));
      }
    }
  }, [])

  const handleUserLogin = async (event) => {
    event.preventDefault()
    console.log("Submitting login...")

    try {
      const response = await axios.post(`${url}/userAuth/login`, {
        "username": username,
        "password": password
      })
      console.log("Login successful", response.data)
      const { token, user } = response.data.data
      setUser(user)
      localStorage.setItem("token", token)
      localStorage.setItem("roles", JSON.stringify(user.roles))
      localStorage.setItem("user", JSON.stringify(user))

      const isAdmin = user.roles.includes("admin")
      setUserIsAdmin(isAdmin)
      console.log("Is admin?", isAdmin)

    } catch (error) {
      console.log(error)     
    }
    navigate("/")
  }

  const handleLogout = async () => {
    localStorage.removeItem("token")
    localStorage.removeItem("roles");
    localStorage.removeItem("admin");
    localStorage.removeItem("user")
    setAdmin(null)
    setUserIsAdmin(false)
    setUser(null)
    console.log("Logged out successfully")
    navigate("/")
  }

  const handleDeleteUser = async (userId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this user?")
    if (!isConfirmed) {
      console.log("User deletion cancelled");
      return; // Exit the function if the user cancels
    }
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(`${url}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("User deleted", response.data);
      alert('User deleted successfully!')

      setUsers(users.filter(user => user._id !== userId)); // αυτο προστεθηκε γιατι δεν πρεπει να κανεις ανανεωση της σελιδας σε single page app

    } catch (error) {
      console.error("Failed to delete user", error.response?.data || error.message);
    }
  }

  //[...]
          <Route path="/userlogin" element={
          <>
            <UserLoginForm 
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              handleUserLogin={handleUserLogin}
              url={url}
            />
          </>
        } />

          <Route path="/signup" element={
          <UserSignup 
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            url={url}
            setUsers={setUsers}
          />
        }>
        </Route>

        <Route path="/queries" element={
          <Queries
            user={user}
            url={url}
          />
        }>
        </Route>

        <Route path="/participant/:id" element={<ParticipantDetail />} />

        <Route path="/user/:id" element={<UserDetails url={url} />} />

```

<!-- TOC --><a name="appbarjsx-1"></a>
#### AppBar.jsx
```jsx
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

          <Nav.Link as={Link} to="/" style={padding}>
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/buymeacoffee" style={padding}>
            Buy me a coffee
          </Nav.Link>

          {admin ? (
            <div className="d-flex flex-column align-items-start ml-auto" style={{ padding }}>
              <em style={{ paddingRight: 10 }}>{admin.token ? 'Admin logged in' : 'Logged in'}</em>
              <Nav.Link as={Link} to="/admin" style={padding}>
                Admin Pannel
              </Nav.Link>
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <Nav.Link as={Link} to="/login" style={padding}>
              Admin Login
            </Nav.Link>
          )}

          {user ? (
            <div className="d-flex flex-column align-items-start ml-auto" style={{ padding }}>
              <em style={{ paddingRight: 10 }}>{user.token ? 'User logged in' : 'Logged in'}</em>
              <Nav.Link as={Link} to="/queries" style={padding}>
                User queries
              </Nav.Link>
              <Button variant="outline-light" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <>
            <Nav.Link as={Link} to="/userLogin" style={padding}>
              User Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signUp" style={padding}>
              Sign up
            </Nav.Link>
            </>
          )}

          </Nav>
        </Navbar.Collapse>
      </Navbar>
```

<!-- TOC --><a name="userloginformjsx"></a>
#### UserLoginForm.jsx
```jsx

const LoginForm = ({ username, password, setUsername, setPassword, handleUserLogin, url }) =>{

  // const googleUrl = 'https://accounts.google.com/o/oauth2/auth?client_id=37391548646-a2tj5o8cnvula4l29p8lodkmvu44sirh.apps.googleusercontent.com&redirect_uri=http://localhost:3000/api/login/google/callback&response_type=code&scope=email%20profile&access_type=offline'
  const googleUrl = `https://accounts.google.com/o/oauth2/auth?client_id=37391548646-a2tj5o8cnvula4l29p8lodkmvu44sirh.apps.googleusercontent.com&redirect_uri=${url}/login/google/callback&response_type=code&scope=email%20profile&access_type=offline`;

  return (
    <>
      <form onSubmit={handleUserLogin}>
        <div>
          username
          <input type="text"
          id="username"
          value={username}
          name="username"
          onChange={({target}) => setUsername(target.value)}
          autoComplete="username"
          />
        </div>
        <div>
          password
          <input type="text"
          id="password"
          value={password}
          name="password"
          onChange={({target}) => setPassword(target.value)}
          autoComplete="password"
          />
        </div>
        <button id="loginBtn" type="submit">login</button>
      </form>

      <a href={googleUrl}>
        <button id="GoogleLoginBtn" type="button">Login with Google</button>
      </a>
    </>
  )
}
export default LoginForm
```

<!-- TOC --><a name="usersignupjsx"></a>
#### UserSignup.jsx
```jsx
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const UserSignup = ({ username, password, setUsername, setPassword, url,  setUsers }) => {

  const navigate = useNavigate()

  const handleUserSignup = async (event) => {
    event.preventDefault()
    
    try {
      const newUser = {
        "username": username,
        "password": password
      }

      const response = await axios.post(`${url}/user`, newUser)

      console.log('✅ user created:', response.data)
      alert('User created successfully!')

      // Clear the form if needed
      setUsername('')
      setPassword('')

      // αυτη η μορφή ανανέωσης του state είναι σωστή γιατή μου κάνει refresh την σελίδα
      setUsers(current => [...current, response.data]); // Take the current state (users) and add the new user (response.data) to the end of the array

      navigate("/")
    } catch (error) {
      console.error('Error creating participant:', error)
    }
  }

  return (
    <>
      <form onSubmit={handleUserSignup}>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default UserSignup
```

<!-- TOC --><a name="queriesjsx"></a>
#### Queries.jsx
```jsx
import { useState, useEffect } from "react"
import { Button, Table } from 'react-bootstrap';
import axios from 'axios'

const Queries = ({ user, url }) => {
  const [queries, setQueries ] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAll, setShowAll] = useState(false)

  const fetchQueries = async () => {
    // το πρόβλημα είναι οτι οταν ερχομαι σε αυτή τη σελιδα απο user login παιρνει το Id απο το token. ενώ όταν έρχομαι απο το admin pannel οχι
    const uid = user?.id || user?._id
    if (!uid) {
      setLoading(false)
      return
    }
    try {  
      // const userId = user._id
      const token = localStorage.getItem("token")
      const res = await axios.get(
        `${url}/query/${uid}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      setQueries(res.data)
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch user queries:", err);
      setLoading(false)
    }
  }

useEffect(() => {
  // whenever we get a fresh user (with either .id or ._id), re‐fetch
  if (user?.id || user?._id) {
    console.log('Queries sees user:', user)
    fetchQueries()
  }
}, [user])
  // useEffect (() => {
  //   console.log('From queries user', user);    
  //   fetchQueries()    
  // }, [user])
  // useEffect(() => {
  //   if (user && user._id) {
  //     fetchQueries()
  //   }
  // }, [user])


  const markImportant = async (queryId) => {
    try {
    const token = localStorage.getItem("token")
    await axios.patch(
      `${url}/query/${queryId}/important`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    )
    fetchQueries()
    } catch (error) {
      console.error("Error fetching queries:", error)
    }
  }

  const deleteQuery = async (queryId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this query?")
    if (!isConfirmed) {
      console.log("Query deletion cancelled");
      return; // Exit the function if the user cancels
    }
    try {
      const token = localStorage.getItem("token")
      await axios.delete(
        `${url}/query/${queryId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      fetchQueries()
    } catch (error) {
      console.error("Error fetching queries:", error)
    }
  }

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <>
      {loading && <p>Loading...</p>}

      {!loading && queries.length === 0 && <p>No queries found</p>}

      <Button variant="info" onClick={toggleShowAll} className="mb-3">
        {showAll ?  "Show only important" : "Show all queries"}
      </Button>

      {!loading && Array.isArray(queries) && queries.length > 0 && (
        <div className="table-responsive">
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Question</th>
                <th className="d-none d-md-table-cell">Bias</th>
                <th>Response</th>
                <th className="d-none d-md-table-cell">Important</th>
                <th className="d-none d-md-table-cell">Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {queries
                .filter((q) => showAll || q.important)
                .map((query) => (
                  <tr key={query._id}>
                    <td>{query.question || 'No question'}</td>
                    <td className="d-none d-md-table-cell">{query.bias || 'N/A'}</td>
                    <td>{query.response || 'Pending...'}</td>
                    <td className="d-none d-md-table-cell">
                      {query.important ? 'Yes' : 'No'}
                    </td>
                    <td className="d-none d-md-table-cell">
                      {new Date(query.createdAt).toLocaleString()}
                    </td>
                    <td>
                      <Button
                        variant={query.important ? 'warning' : 'success'}
                        onClick={() => markImportant(query._id)}
                      >
                        {query.important ? 'Unmark' : 'Mark Important'}
                      </Button>
                      <Button
                        className="mt-2"
                        variant="danger"
                        onClick={() => deleteQuery(query._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  )
}
export default Queries
```

<!-- TOC --><a name="adminpaneljsx-"></a>
#### AdminPanel.jsx ++
```jsx
      <button onClick={() => setShowUsers(!showUsers)} className="btn btn-primary">
        {showUsers && 'Hide Users'}
        {!showUsers && 'Show users'}
      </button>

      <UsersList
        loading={loading}
        users={users}
        handleDeleteUser={handleDeleteUser}
        showUsers={showUsers}
        setUsers={setUsers}
        url={url}
      />
```

<!-- TOC --><a name="userlistjsx"></a>
#### UserList.jsx
```jsx
import { Link } from "react-router-dom"
import NewParticipantForm from './NewParticipantForm'

const UsersList = ({ loading, users, handleDeleteUser, showUsers}) => {

  return (
    <>
      {showUsers && (
        <>
          {loading && <p>Loading...</p>}
          
          {!loading && users.length === 0 && <p>No users found</p>}
  
          <ul>
            {!loading && users.length !== 0 &&
              users.map((user) => (
                <li key={user._id || `${user.username}`}>
                  <Link to={`/user/${user._id}`}>
                    {user.username}
                  </Link>
                  <button id={`${user.username}Btn`} onClick={() => handleDeleteUser(user._id)}>Delete</button>
                </li>
              ))
            }
          </ul>
        </>
      )}
    </>
  )
}

export default UsersList
```

<!-- TOC --><a name="userdetailsjsx"></a>
#### UserDetails.jsx
```jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Queries from './Queries';

const UserDetail = ({ url }) => {
  const [user, setUser] = useState(null)
  const { id } = useParams();  

  const fetchUserById = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${url}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data
      console.log('from userdetail user data',userData);

      // setUser(userData)
      setUser({
        ...userData,
        id: userData._id
      })
      console.log('user with right id:', user);
      

    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchUserById();
    };
    fetchData();
  }, [id, url]); 


  return (
    <div>
      <h4>User Detail for ID: {id}</h4>
      {/* Fetch and display user details here */}
      {user 
        ? <Queries user={user} url={url} />
        : <p>Loading user…</p>
      }
    </div>
  );
};

export default UserDetail;
```

<!-- TOC --><a name="instructions"></a>
# instructions
<!-- TOC --><a name="appjsx-6"></a>
#### App.jsx
```jsx
import Instructions from './components/Instructions'

        <Route path="/insturctions" element={<Instructions 
        />} />
```
<!-- TOC --><a name="appbarjsx-2"></a>
#### AppBar.jsx
```jsx
          <Nav.Link as={Link} to="/insturctions" style={padding}>
            insturctions
          </Nav.Link>
```

<!-- TOC --><a name="instructionsjsx"></a>
#### Instructions.jsx
```jsx

```




