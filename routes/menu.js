const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  const templateVars = {

    user_id: req.cookies.user_id,
    user_name: req.cookies.user_name,
    restaurant: req.cookies.restaurant_id

  }


  res.render('menu', templateVars);
});

module.exports = router;
