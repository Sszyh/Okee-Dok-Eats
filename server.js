// testing

const users = {
  user1: {
    id: "aJ48lW",
    email: "user@example.com",
    password: "123",
  },
  user2 :{
    id: "user2RandomID",
    email: "user2@example.com",
    password: "123",
  }
};

// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(cookieParser())

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const customerRestaurantAPI = require('./routes/customer-view-api');
const usersRoutes = require('./routes/users');
const customerRoutes = require('./routes/customer-view');
const restaurantRoutes = require('./routes/restaurant');
const loginRoutes = require('./routes/login');
const logoutRoute = require('./routes/logout');
const menuRoute = require('./routes/menu');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/api/customer', customerRestaurantAPI);
app.use('/users', usersRoutes);
app.use('/customer', customerRoutes);
app.use('/restaurant', restaurantRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoute);
app.use('/menu', menuRoute);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  const templateVars ={
    users: users[req.cookies.user_id]
  }
  res.render('index', templateVars);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
