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

// const restaurant = {
//   id: 1,
//   owner_id: 1,
//   name: 'Happy lamp restaurant',
//   phone_number: '604-123-1234',
//   menu: 'Love Lamp',
//   address: '536 Namsub Highway',
//   review:'wonderful restaurant',
//   rating: 4.2
// }

// testing

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // if the cookie is set render this page view
  // else redirect to home page

  if (!req.cookies.user_id) {
    return res.status(401).redirect('/')
  }
  //jQuery to display all restaurants

  const templateVars = {
    users: users[req.cookies.user_id],
    // restaurants: restaurant,
  }

  res.render('customer_restaurant_view', templateVars)
});

module.exports = router;
