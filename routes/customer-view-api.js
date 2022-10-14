const express = require('express');
const router  = express.Router();
const customerQueries = require('../db/queries/restaurant');
router.get('/', (req, res) => {
  const query = `SELECT * FROM restaurants`;
  console.log(query);
  db.query(query)
    .then(data => {
      const restaurants = data.rows;
      res.json({ restaurants });
    })

/*
we eventually will have separate js files set up inside the queries folder with functions that will query the db for us

const restaurantQueries = require('./db/queries/getRestaurants)
    restaurantQueries.getRestaurants()
      .then((restaurants) => {
        res.json({restaurants})
      })

<<<<<<< HEAD
    .then(data => {
      res.json({ restaurants: data });
    })
=======
const restaurantQueries = require('../db/queries/getRestaurants)
    restaurantQueries.getRestaurants()
      .then((restaurants) => {
        res.json({restaurants})
      })

*/
>>>>>>> master
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
