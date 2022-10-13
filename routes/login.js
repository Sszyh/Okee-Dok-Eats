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

const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  const templateVars = {
   users: users[id]
  }

console.log(templateVars);
  res.cookie('user_id', id)
  res.render('index', templateVars)
})

module.exports = router
