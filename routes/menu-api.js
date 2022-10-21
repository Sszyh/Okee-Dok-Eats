const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  //somehow get the params here as a string which would be the name of the restaurant we need to display the menu from, this needs to be sent as a query
  const restaurantId = req.query.id;
  const sqlParams = [`${restaurantId}`];
  const query = `
  SELECT mi.id, mi.menu_id, mi.item, mi.price, mi.time_to_prepare, mi.item_description,mi.item_photo_url, r.name
  FROM menu_items mi
  JOIN restaurants r ON r.id=mi.menu_id
  WHERE menu_id = $1;
  `;
  db.query(query, sqlParams)
    .then(data => {
      const menuList = data.rows;
      res.json({ menuList });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
