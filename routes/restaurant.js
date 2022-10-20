const express = require('express');
const db = require('../db/connection');
const router = express.Router();

router.get('/', (req, res) => {

  const ownerParams = [req.cookies.user_id];
  const query = `
    SELECT * FROM restaurants
    WHERE owner_id = $1;
    `;
  db.query(query, ownerParams)
    .then(data => {
      if(data.rows.length) {
        const templateVars = {
          restaurant: data.rows[0]
        }
        res.cookie('restaurant_id',data.rows[0].id)

        res.render('restaurant', templateVars);
      }
    })

})

module.exports = router;
