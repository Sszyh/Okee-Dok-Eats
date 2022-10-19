const express = require('express');
const router = express.Router();

const restaurant = {
  id: 2,
  owner_id: 1,
  name: 'Cuctos Club',
  phone_number: '604-345-9999',
  menu: 'Cuctos Club Menu',
  address: '651 Nami Road',
  review:'like to go everyday',
  rating: 4.5
}

router.get('/', (req, res) => {
  const templateVars = {
    restaurant: restaurant.name
  }

  res.render('restaurant',templateVars);
})

module.exports = router;
