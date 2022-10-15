const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  console.log("req",req.params)
  const id = req.params.id
  console.log("id",id);
  res.cookie('user_id', id)
  res.redirect('/');
})

module.exports = router
