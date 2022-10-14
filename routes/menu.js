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

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query.name)
  const id = req.cookies.user_id;
  const restaurantName = req.query.name

  const templateVars = {
    users: users[id],
    restaurant: restaurantName
  }


  res.render('menu', templateVars);
});

module.exports = router;
