const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {

  res.clearCookie('user_id');
  res.clearCookie('user_name');
  res.clearCookie('restaurant_id');
  res.redirect('/');
})

module.exports = router
