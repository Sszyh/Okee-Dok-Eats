const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.cookie('user_id', req.params.id);
  res.redirect('/');
});

module.exports = router;
