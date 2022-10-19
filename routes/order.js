const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const sendMessage = require('../public/scripts/send-sms.js')

router.post('/', async (req, res) => {
  const id = req.cookies.user_id;
  console.log(req.body);
  const { order, orderPlaced, restaurantId, total, totalTime } = req.body
  const queryParams = [
    restaurantId,
    id,
    3,
    "Quickly Prepared Order",
    orderPlaced,
    total,
  ]

  let sql = `
  INSERT INTO orders
   (restaurant_id,customer_id,rating,review,order_placed)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;`
  console.log(sql);
  db.query(sql, queryParams)
      .then((sqlResponse) => {
          order.orderItems.forEach(e => {
          db.query(
          `INSERT INTO orders_menu_items VALUES ($1, $2);`,
          [e.menuItemId, sqlResponse.id])
        });
      })
      .done((res) => {
        console.log(res);
      })

  //insert into orders .THEN (with returning *)
  // .then(orderTable) => ordersTable.id then loop through all menu items and add into the pivot table
  //so for every menu_item(this is a query itself the menu id, then insert)

  //insert into orders table values ($1, $2, $3,...all the params)

  // db.query('INSERT STATEMENT', [params])
  // how to deal with pivot table?
  /*
  1. insert into orders table
    *RETURNING*
  2. .then() sqlResponse.id is the newly created orders table ID
  3. Loop through all menu_items where menu_item
    *orderItems.forEach((element) => { db.query('INSERT...', [$1, element.menuItemId]})

  */

  //insert into orders table values ($1, $2, $3,...all the params)

  // db.query('INSERT STATEMENT', [params])
  // how to deal with pivot table?

  /*
  Order table:
  pk,
  restaurant_id
  customer_id
  rating
  review
  order_placed
  subtotal
  total_price
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
