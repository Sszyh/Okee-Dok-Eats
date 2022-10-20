const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const sendMessage = require('../public/scripts/send-sms.js');

router.post('/', async(req, res) => {
  const id = req.cookies.user_id;
  console.log(req.body);
  const { orderItems, orderPlaced, restaurantId, total, totalTime, totalTax } = req.body;
  const queryParams = [
    restaurantId,
    4, //in future userid from cookie
    3,
    "Quickly Prepared Order",
    orderPlaced,
    total,
    totalTax
  ];

  let sql = `
  INSERT INTO orders
   (restaurant_id,customer_id,rating,review,order_placed,subtotal,total_price)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;`;
  db.query(sql, queryParams)
    .then((sqlResponse) => {
      console.log(sqlResponse.rows);
      const promises = [];
      orderItems.forEach(e => {
        const pivotPromise = db.query(
          `INSERT INTO orders_menu_items (menu_item_id,order_id) VALUES ($1, $2);`,
          [e.menuItemId, sqlResponse.rows[0].id]);
        promises.push(pivotPromise);
      });
      return Promise.all(promises);
    })
    .then((res) => {
      console.log(res);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });


  try {
    await sendMessage('Hello from Post', '+17782273501') //customer
    // await sendMessage('Hello from Post', '+17782273501') //restaurant
    console.log("you have placed an order");
    // res.send(`Your order was placed and will take this long`)
  } catch (error) {
    console.log(`There was an error`)
    // res.send(`Maui will cry`)
  }


  /*
  promise version

  sendMessage('Hello from Post', '+17782273501').then(() => {
    console.log("you have placed an order");
    res.send(`Your order was placed and will take this long`)

  }).catch(() => {
    console.log(`There was an error`)
    res.send(`Maui will cry`)
  })


   */
  res.status(200)

  .send(totalTime);


});

module.exports = router;
