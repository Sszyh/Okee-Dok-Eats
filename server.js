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
const customerRestaurantAPI = require('./routes/customer-view-api');
const listMenuByRestaurantAPI = require('./routes/menu-api');
const loginAPI = require('./routes/login-api');
const customerRoutes = require('./routes/customer-view');
const restaurantRoutes = require('./routes/restaurant');
const restaurantAPI = require('./routes/restaurant-api');
const loginRoutes = require('./routes/login');
const logoutRoute = require('./routes/logout');
const menuRoute = require('./routes/menu');
const orderRoute = require('./routes/order');
const receiveSMS = require('./routes/receive-sms');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/customer', customerRestaurantAPI);
app.use('/customer', customerRoutes);
app.use('/restaurant', restaurantRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRoute);
app.use('/menu', menuRoute);
app.use('/api/menu', listMenuByRestaurantAPI);
app.use('/api/restaurant', restaurantAPI);
app.use('/api/login', loginAPI);
app.use('/order', orderRoute);
app.use('/sms', receiveSMS);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  const templateVars = {
    user_name: req.cookies.user_name,
    user_id: req.cookies.user_id
  }
  res.render('index', templateVars);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
