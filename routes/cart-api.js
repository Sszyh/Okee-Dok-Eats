const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

/*
Build Query here depending on the length of the cart, send this back as a JSON to the cartView.js file as 'res'
*/

router.get('/', (req, res) => {
  const cartJObj = JSON.parse(req.query.cartJSON);
  const queryParams = [];

  let query = `
  SELECT * FROM menu_items
  WHERE
  `;

  for (const ele of cartJObj) {
    queryParams.push(ele.menuItemId);
    query += `id = $${queryParams.length}${queryParams.length === cartJObj.length ? `;` : ` OR `}`;
  }

  db.query(query, queryParams)
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
