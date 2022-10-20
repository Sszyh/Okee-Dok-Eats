const express = require('express');
const sendMessage = require('../public/scripts/send-sms');
const router = express.Router();
const { MessagingResponse } = require('twilio').twiml;


/* Twilio Receiving
twilio cli command
twilio phone-numbers:update "+19593359490" --sms-url="http://localhost:{PORT}/sms"

*/


router.post('/', async (req, res) => {
  const twiml = new MessagingResponse();
  //how to get customers phone number?
  //if user_id stored in cookie we can ask the db for it
  //message received, how to send back to front end?
  //or do we just send another message to customers phone and leave front end as is?
  console.log(req.body.Body); //message send
  console.log(req.body.From); //number sent from?

  const messageFromOwner = req.body.Body;
  // const customerPhone = (db query)

  try {
    await sendMessage(`'${messageFromOwner}'`, `'+17782273501'`) //send message back to customer's phone
    console.log('message sent to customers phone')

  } catch (error) {
    console.log('everyone cries, there was an error' + error)
  }

  twiml.message('Customer received your message, thank you for using Okee-Dok-Eats'); //message back to restaurant.

  res.type('text/xml').send(twiml.toString());
  console.log(twiml.toString())
  // .send(twiml.toString());
});

module.exports = router;

/* end */
