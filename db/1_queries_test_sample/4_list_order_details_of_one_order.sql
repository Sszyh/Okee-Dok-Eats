
-- SELCET order by id
SELECT orders.id, orders.customer_id,users.first_name,users.phone_number, menu_items.item, orders.order_placed
FROM users
JOIN orders ON users.id=orders.customer_id
JOIN orders_menu_items ON order_id=orders.id
JOIN menu_items ON menu_items.id=menu_item_id
WHERE orders.id=1;

-- SELECT order GROUP BY order.id
SELECT orders.id, orders.customer_id,users.first_name,users.last_name,users.phone_number, orders.order_placed
FROM users
JOIN orders ON users.id=orders.customer_id
JOIN orders_menu_items ON order_id=orders.id
JOIN menu_items ON menu_items.id=menu_item_id
GROUP BY orders.id, orders.customer_id,users.first_name,users.last_name,users.phone_number, orders.order_placed
ORDER BY order_placed;
