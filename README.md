Okee-Dok-Eats
=========

This Midterm project was build by [Gord Letkeman](https://github.com/rndedg), [Sarah Zhu](https://github.com/Sszyh) and [Matthew Davis](https://github.com/TeddyGavi). Using the starting [skeleton from LHL](https://github.com/lighthouse-labs/node-skeleton)

A food ordering experience for a single restaurant. Hungry customers can visit a restaurants menu, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

## Getting Started

*Git clone the repo onto your local machine.*
1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local Data Base and [Twilio](https://www.twilio.com/) information. 
  - username: `labber` 
  - password: `labber` 
  - database: `midterm`
  - twilio variables __VISIT__ [Twilio quick Start for node.js](https://www.twilio.com/docs/sms/quickstart)
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Reset database: `npm run db:reset`
  - Check the db folder to see what gets created and seeded in the SDB
6. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
7. Visit `http://localhost:8080/`

## User Stories/Scenarios (project goals)
* As a restaurant owner, I want to view orders, order items, customer information and notify the customer via SMS with an estimated wait time.

* As a customer, I want to order food and receive a SMS notification so I know when to pick up my order.

## Views
* Customer
![customer view](./images/gif-views/Okee-Dok-Eats-customer.gif)
* Owner
![owner view](./images/gif-views/Okee-Dok-Eats-owner.gif)

## Future Goals
* Ratings and Review system
* Restaurant search 
* List restaurants based on current location of customer
* User login and authentication
* Restaurant owner can view past orders

## Collaboration Tools
* [Trello for project management](https://trello.com/b/zbWuweAT/okee-dok-eats)
* [Drawio for database design and ERD](https://app.diagrams.net/#G1onvM64dTtRz_RZhuUnaWUr_4V3vbCTHr)
* [Google Slides for quick wire frame](https://docs.google.com/presentation/d/1Zma0mglm9M5V9px1k16TMrtXlc8WCYaEbMTeraJir8Y/edit#slide=id.g165eaee9b96_5_102)
* [Miro for planning](https://miro.com/app/board/uXjVPOhwLQU=/)
  


## Dependencies

- Node 10.x or above
- NPM 5.x or above
- PG 6.x
- twilio
- cookie-parser
