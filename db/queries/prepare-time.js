const db = require('../connection');

const getPrepareTime = () => {
  return db.query(`
    SELECT sum(time_to_prepare) as time, orders_menu_items.order_id FROM menu_items
    JOIN orders_menu_items ON menu_item_id=menu_items.id
    GROUP BY orders_menu_items.order_id
    ORDER BY orders_menu_items.order_id;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPrepareTime };
