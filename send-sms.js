require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
console.log("acc",accountSid);
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Hungry? Place an order with Okee-Dok-Eats!',
    from: process.env.TWILIO_PHONE,
    to: '+17787230018'
  })
  .then(message => console.log(message.sid));


// const accountSid = 'AC26293dd4a5d3fe2489cad2057d76ed96';
// const authToken = 'f7862da1228306c1a7ab750a04db62ce';
// //console.log("acc",accountSid);
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//     body: 'Hungry? Place an order with Okee-Dok-Eats!',
//     from: '+19593359490',
//     to: '+17787230018'
//   })
//   .then(message => console.log(message.sid));

// const sendMessage = (body, to) => {
//   return client.messages
//   .create({
//     body: body,
//     from: process.env.TWILIO_PHONE,
//     to: to
//   })
// }

// module.exports = sendMessage;
