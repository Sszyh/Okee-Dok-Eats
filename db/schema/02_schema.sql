-- Drop statements to avoid errors when creating db
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;
DROP TABLE IF EXISTS orders_menu_items CASCADE;


-- Create statements to build basic db

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(13) NOT NULL,
  email VARCHAR(255),
  is_owner BOOLEAN DEFAULT false
);

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name TEXT,
  phone_number VARCHAR(13),
  menu TEXT,
  address VARCHAR(255),
  review TEXT,
  rating NUMERIC(2,1)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  rating SMALLINT,
  review TEXT,
  order_placed TIMESTAMP,
  subtotal MONEY,
  total_price MONEY
);

CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  item TEXT,
  price MONEY,
  time_to_prepare INT
);

CREATE TABLE orders_menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE
);
