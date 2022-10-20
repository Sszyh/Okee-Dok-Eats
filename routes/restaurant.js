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
        console.log("q",data.rows[0].name)
        res.cookie('restaurant_id',data.rows[0].id)
        //res.cookie('restaurant_name',data.rows[0].name)

        res.render('restaurant', templateVars);

      }
    })

})

module.exports = router;
