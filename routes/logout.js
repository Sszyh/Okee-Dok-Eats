const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  res.clearCookie('user_id');
  res.redirect('/');
});

module.exports = router;
