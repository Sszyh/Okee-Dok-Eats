const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
const cartJObj = JSON.parse(req.query.cartJSON);
console.log(cartJObj)
//possibly build a query here to incrementally increase the OR statements
//also would be nice to use this to sum the time to prepare?
//time to prepare could be calculated when you click place order also?
  const query = `
  SELECT * FROM menu_items
  WHERE id = 1 OR id = 3;
  `;
  db.query(query)
    .then(data => {
      const order = data.rows;
      res.json({ order });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});

module.exports = router;
