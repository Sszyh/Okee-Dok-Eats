const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const id = req.cookies.user_id;
  const restaurantName = req.query.name

  const templateVars = {
    user: id,
    restaurant: restaurantName
  }


  res.render('menu', templateVars);
});

module.exports = router;
