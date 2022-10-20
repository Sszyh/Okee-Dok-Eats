const express = require('express');
const router = express.Router();
const { MessagingResponse } = require('twilio').twiml;


/* Twilio Receiving */


router.post('/', (req, res) => {
  const twiml = new MessagingResponse();

  console.log(req.body.Body);

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
  console.log(twiml.toString())
  // .send(twiml.toString());
});

module.exports = router;

/* end */
