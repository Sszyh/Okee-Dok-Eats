/*
If I have time it would great to load the users as per the database query, but for now I will leave this route set up
*/

const express = require('express');
const router = express.Router();
const db = require('../db/connection');

router.post('/', (req, res) => {

  const loginName = req.body.name;
  const sqlParams = [`${loginName}`]
  const isOwner = req.body.is_owner;

  const query = `
  SELECT first_name, id FROM users
  WHERE first_name = $1;
  `;
  db.query(query, sqlParams)
    .then(data => {
      if (data.rows.length) {
        const user_name = data.rows[0].first_name;
        const user_id = data.rows[0].id;
        res.cookie('user_id', user_id);
        res.cookie('user_name', user_name);
      }
      if (isOwner === "on") {
        res.redirect('/restaurant');
      } else {
        res.redirect('/');
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
