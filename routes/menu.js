const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const restName = req.query.name
  const templateVars = {

    user_id: req.cookies.user_id,
    user_name: req.cookies.user_name,
    restaurant: [restName]

  }


  res.render('menu', templateVars);
});

module.exports = router;
