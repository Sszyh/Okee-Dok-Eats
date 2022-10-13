INSERT INTO users (first_name, last_name,phone_number,email,is_owner)
VALUES
('Eva', 'Stanley','604-223-3323', 'evastanlay@gmail.com',true),
('Louisa', 'Meyer','604-442-3898', 'louisameyer21@gmail.com',true),
('Dominic', 'Parks','778-462-3800', 'dominicparks8@gmail.com',false),
('Alice', 'Max','778-222-6665', 'alicemax3@gmail.com',false);

INSERT INTO restaurants (owner_id, name,phone_number,menu,address,review,rating)
VALUES
(1, 'Happy lamp restaurant','604-123-1234', 'Love Lamp','536 Namsub Highway','wonderful restaurant',4.2),
(1, 'Cuctos Club','604-345-9999', 'Cuctos Club Menu','651 Nami Road','like to go everyday',4.1);

INSERT INTO orders (restaurant_id,customer_id,rating,review,order_placed)
VALUES
(1,3,4.3,'Worth to try','2021-08-07 11:32'),
(1,4,4.5,'Services are excllent','2021-08-08 12:28'),
(1,4,3.8,'The food did not meet my expectation','2021-08-08 12:42'),
(1,4,3.9,'All good!','2021-08-09 13:02');

INSERT INTO menu_items (menu_id,item,price,time_to_prepare)
VALUES
(1,'Spaghetti Carbonara','14.5',15),
(1,'Minestrone Soup','5.5',5),
(1,'Bonafide Chicken','12.75',10),
(1,'Prawn Crunch Roll','14',10),
(1,'Spicy Ahi Roll','12',10),
(2,'Steak Frites','21.5',20),
(2,'Cheddar Burger','13',8),
(2,'Crispy Yam Fries','6.5',5),
(2,'Teriyaki Chichen Rice Bowl','16.25',12),
(2,'Kale + Grilled Chicken Salad','13',5);

INSERT INTO orders_menu_items (menu_item_id,order_id)
VALUES
(1,1),
(2,1),
(3,1),
(4,2),
(5,2),
(6,3),
(7,4),
(8,4);
