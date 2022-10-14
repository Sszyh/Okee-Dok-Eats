const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query.menu)
  const uid = req.cookies.user_id;
  const restaurantName = req.query.menu


  res.render('menu');
});

module.exports = router;
