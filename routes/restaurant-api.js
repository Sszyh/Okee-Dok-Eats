const express = require('express');
const router  = express.Router();

const orderList = require('../db/queries/order-list');
router.get('/', (req, res) => {

  orderList.getOrderList(req.cookies.restaurant_id)


    .then(data => {
      //console.log("data",data)
      res.json({ orders: data });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
