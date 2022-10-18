const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const id = req.cookies.user_id;
  console.log(req.body)


  console.log("you have placed an order");
  res.redirect('/users')
});

module.exports = router;
