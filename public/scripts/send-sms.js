const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hungry? Place an order with Okee-Dok-Eats!',
    from: process.env.TWILIO_PHONE,
    to: /*Put your number here to test. Remember to use quotes */
  })
  .then(message => console.log(message.sid));
