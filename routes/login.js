const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  // const templateVars = {
  //  users: users[id]
  // }

// console.log(templateVars);
  res.cookie('user_id', id)
  res.redirect('/');
})

module.exports = router
