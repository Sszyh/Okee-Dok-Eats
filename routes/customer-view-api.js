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

/*
  following code is for connecting db/queries/
*/
// const customerQueries = require('../db/queries/restaurant-list');
// router.get('/', (req, res) => {

//   customerQueries.getRestaurants()
//     .then(data => {
//       res.json({ restaurants: data });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

// module.exports = router;
