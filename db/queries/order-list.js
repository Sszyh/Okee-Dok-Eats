const db = require('../connection');

const getOrderList = (restId) => {

  return db.query(`
  SELECT o.id, o.customer_id,u.first_name,u.last_name,u.phone_number, o.order_placed,mi.item
  FROM users u
  JOIN orders o ON u.id=o.customer_id
  JOIN orders_menu_items omi ON omi.order_id=o.id
  JOIN menu_items mi ON mi.id= omi.menu_item_id
  WHERE o.restaurant_id = ${restId}
  ORDER BY order_placed;

  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getOrderList };
