const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
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
