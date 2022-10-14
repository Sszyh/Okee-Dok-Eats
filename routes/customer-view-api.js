const express = require('express');
const router  = express.Router();
const customerQueries = require('../db/queries/restaurant');
router.get('/', (req, res) => {

  customerQueries.getRestaurants()

    .then(data => {
      res.json({ restaurants: data });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
