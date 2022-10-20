/*
If I have time it would great to load the users as per the database query, but for now I will leave this route set up
*/

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.post('/', (req, res) => {
  const { userFirstName } = req.body;
  const sqlParams = [`${userFirstName}`];

  const query = `
  SELECT * FROM users
  WHERE first_name = $1;
  `;
  db.query(query, sqlParams)
    .then(data => {
      const user = data.rows;
      res.json({ user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
