const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const sendMessage = require('../public/scripts/send-sms.js')

router.post('/', async (req, res) => {
  const id = req.cookies.user_id;
  console.log(req.body);
  const { orderItems, orderPlaced, restaurantId, total, totalTime, totalTax } = req.body
  const queryParams = [
    restaurantId,
    4, //in future userid from cookie
    3,
    "Quickly Prepared Order",
    orderPlaced,
    total,
    totalTax
  ]

  let sql = `
  INSERT INTO orders
   (restaurant_id,customer_id,rating,review,order_placed,subtotal,total_price)
  VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING *;`
  db.query(sql, queryParams)
    .then((sqlResponse) => {
      console.log(sqlResponse.rows);
      const promises = [];
      orderItems.forEach(e => {
        const pivotPromise = db.query(
          `INSERT INTO orders_menu_items (menu_item_id,order_id) VALUES ($1, $2);`,
          [e.menuItemId, sqlResponse.rows[0].id])
        promises.push(pivotPromise);
      })
      return Promise.all(promises)
    })
    .then((res) => {
      console.log(res);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

/*
  1. insert into orders table
    *RETURNING*
  2. .then() sqlResponse.id is the newly created orders table ID
  3. Loop through all items in cart and fetch the id and insert that id, with the newly created orders table pk, problem is here, the cart.orderItems is not accessible
    *orderItems.forEach((element) => { db.query('INSERT...', [$1, element.menuItemId]})
*/

/* try {
  await sendMessage('Hello from Post', '+17782273501') //customer
  await sendMessage('Hello from Post', '+17782273501') //restaurant
  console.log("you have placed an order");
  res.send(`Your order was placed and will take this long`)
} catch (error) {
  console.log(`There was an error`)
  res.send(`Maui will cry`)
}
 */

  /* sendMessage('Hello from Post', '+17782273501').then(() => {
    console.log("you have placed an order");
    res.send(`Your order was placed and will take this long`)

  }).catch(() => {
    console.log(`There was an error`)
    res.send(`Maui will cry`)
  })
   */
  res.status(200).send(totalTime)


});

module.exports = router;


/*
1. click submit order, signals ajax post to /api/order
 *notes: event.preventDefault()
2. data {key:value} //our payload ?? how to get this info from html?
3. ON server store request ?sql insert?
  *notes: promise
4. success notifies the users of successful order placement.
  * maybe a redirect here if we have time!
5. send a SMS to phone


*/
