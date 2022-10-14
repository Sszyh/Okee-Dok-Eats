const db = require('../connection');

const getMenuList = () => {
  return db.query(`
    SELECT item, price FROM menu_items
    WHERE menu_id = 1;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMenuList };
