/* require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hungry? Place an order with Okee-Dok-Eats!',
    from: process.env.TWILIO_PHONE,
    to: process.env.TWILIO_MY_NUMBER,
  })
  .then(message => console.log(message.sid));
 */


require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const sendMessage = (body, to) => {
  return client.messages
  .create({
    body: body,
    from: process.env.TWILIO_PHONE,
    to: to
  })
}

module.exports = sendMessage;
