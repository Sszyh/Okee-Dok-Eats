const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // if the cookie is set render this page view
  // else redirect to home page

  res.render('customer_restaurant_view')
})

module.exports = router
