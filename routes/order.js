const express = require('express');
const router = express.Router();
const sendMessage = require('../public/scripts/send-sms.js')

router.post('/', async (req, res) => {
  const id = req.cookies.user_id;
  console.log(req.body)
try {
  await sendMessage('Hello from Post', '+17782273501') //customer
  await sendMessage('Hello from Post', '+17782273501') //restaurant
  console.log("you have placed an order");
  res.send(`Your order was placed and will take this long`)
} catch (error) {
  console.log(`There was an error`)
  res.send(`Maui will cry`)
}


/* sendMessage('Hello from Post', '+17782273501').then(() => {
  console.log("you have placed an order");
  res.send(`Your order was placed and will take this long`)

}).catch(() => {
  console.log(`There was an error`)
  res.send(`Maui will cry`)
})
 */



});

module.exports = router;


/*
1. click submit order, signals ajax post to /api/order
 *notes: event.preventDefault()
2. data {key:value} //our payload ?? how to get this info from html?
3. ON server store request ?sql insert?
  *notes: promise
4. success notifies the users of successful order placement.
5. send a SMS to phone

$.post('endPoint', () => {}).then('onSuccess').catch((err) => {
  console.log(`there was a error ${err.message}`)
})
*/
