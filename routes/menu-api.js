const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  //somehow get the params here as a string which would be the name of the restaurant we need to display the menu from, this needs to be sent as a query
  const restaurantId = req.query.id;
  const sqlParams = ['restaurantId']
  const query = `SELECT * FROM menu_items
  WHERE menu_id = 1;`;
  console.log(query);
  db.query(query)
    .then(data => {
      const menu = data.rows;
      res.json({ menu });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
