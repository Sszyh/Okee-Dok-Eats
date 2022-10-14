const express = require('express');
const router  = express.Router();
const db = require('../db/connection')
router.get('/', (req, res) => {
  const query = `SELECT * FROM restaurants ORDER BY rating DESC;`;
  console.log(query);
  db.query(query)
    .then(data => {
      const restaurants = data.rows;
      res.json({ restaurants });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
