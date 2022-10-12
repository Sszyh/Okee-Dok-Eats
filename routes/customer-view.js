const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('customer_restaurant_view')
})

module.exports = router
