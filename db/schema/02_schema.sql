-- -- Drop statments to avoid errors while running
-- DROP TABLE IF EXISTS owners;
-- DROP TABLE IF EXISTS restaurants;
-- DROP TABLE IF EXISTS customers;
-- DROP TABLE IF EXISTS menu;
-- DROP TABLE IF EXISTS orders;
-- DROP TABLE IF EXISTS menu_item;

-- --Add CREATE statements to build basic db

-- CREATE TABLE owners (
--   id SERIAL PRIMARY KEY NOT NULL,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   phone_number VARCHAR(13) NOT NULL
-- );

-- CREATE TABLE restaurants (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name TEXT,
--   phone_number VARCHAR(13),
--   address VARCHAR(255),
--   review TEXT,
--   rating SMALLINT DEFAULT 0
-- );

-- CREATE TABLE customers (
--   id SERIAL PRIMARY KEY NOT NULL,
--   first_name VARCHAR(255),
--   last_name VARCHAR (255),
--   phone_number VARCHAR(13),
--   email VARCHAR (255)
-- );

-- CREATE TABLE menu (
--   id SERIAL PRIMARY KEY NOT NULL,
--   restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
--   title TEXT
-- );

-- CREATE TABLE orders (
--   id SERIAL PRIMARY KEY NOT NULL,
--   restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
--   customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
--   rating SMALLINT DEFAULT 0,
--   review TEXT,
--   order_placed TIMESTAMP
-- );

-- CREATE TABLE menu_item (
--   id SERIAL PRIMARY KEY NOT NULL,
--   menu_id INTEGER REFERENCES menu(id) ON DELETE CASCADE,
--   order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
--   item TEXT,
--   price MONEY,
--   time_to_prepare INT
-- );


-- Drop statements to avoid errors when creating db
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS menu_item;
DROP TABLE IF EXISTS orders_menu_items;


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
  owner_id REFERENCES users(id) ON DELETE CASCADE,
  name TEXT,
  phone_number VARCHAR(13),
  menu TEXT,
  address VARCHAR(255),
  review TEXT,
  rating SMALLINT DEFAULT 0
);


CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  item TEXT,
  price MONEY,
  time_to_prepare INT
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INTEGER REFERENCES restaurants(id) ON DELETE CASCADE,
  customer_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  rating SMALLINT DEFAULT 0,
  review TEXT,
  order_placed TIMESTAMP,
  -- subtotal is before tax, total_price is sum of subtotal and tax
  subtotal MONEY,
  tax MONEY,
  total_price MONEY
);


CREATE TABLE orders_menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  menu_item_id INTEGER REFERENCES menu_items(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
)
