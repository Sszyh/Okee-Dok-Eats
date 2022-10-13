const db = require('../connection');

const getRestaurants = () => {
  return db.query('SELECT name, rating FROM restaurants ORDER BY rating DESC;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getRestaurants };
