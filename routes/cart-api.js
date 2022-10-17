const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
console.log(req.query)
  // const query = `
  // SELECT * FROM menu_items
  // WHERE id = 1;
  // `;
  // db.query(query)
  //   .then(data => {
  //     const menuList = data.rows;
  //     res.json({ menuList });
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
});

module.exports = router;
