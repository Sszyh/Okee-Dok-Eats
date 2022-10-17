const db = require('../connection');

const getOrderList = () => {
  return db.query(`
  SELECT orders.id, orders.customer_id,users.first_name,users.last_name,users.phone_number, orders.order_placed,menu_items.item
  FROM users
  JOIN orders ON users.id=orders.customer_id
  JOIN orders_menu_items ON order_id=orders.id
  JOIN menu_items ON menu_items.id=menu_item_id

  ORDER BY order_placed;

  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getOrderList };
