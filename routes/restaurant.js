const express = require('express');
const router = express.Router();

const restaurant = {
  id: 1,
  owner_id: 1,
  name: 'Happy lamp restaurant',
  phone_number: '604-123-1234',
  menu: 'Love Lamp',
  address: '536 Namsub Highway',
  review:'wonderful restaurant',
  rating: 4.2
}

router.get('/', (req, res) => {
  const templateVars = {
    restaurant: restaurant.name
  }

  res.render('restaurant',templateVars);
})

module.exports = router;
