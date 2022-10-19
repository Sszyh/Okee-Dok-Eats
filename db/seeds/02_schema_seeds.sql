INSERT INTO users (first_name, last_name,phone_number,email,is_owner)
VALUES
('Eva', 'Stanley','604-223-3323', 'evastanlay@gmail.com',true),
('Louisa', 'Meyer','604-442-3898', 'louisameyer21@gmail.com',true),
('Dominic', 'Parks','778-462-3800', 'dominicparks8@gmail.com',false),
('Alice', 'Max','778-222-6665', 'alicemax3@gmail.com',false);

INSERT INTO restaurants (owner_id, name,phone_number,menu,address,review,rating)
VALUES
(1, 'Happy lamp restaurant','604-123-1234', 'Love Lamp','536 Namsub Highway','wonderful restaurant',4.2),
(1, 'Cuctos Club','604-345-9999', 'Cuctos Club Menu','651 Nami Road','like to go everyday',4.5),
(2, 'Jamto Grill','604-488-7777','Jamto Menu','332 Uran Highway','a must go place',4.3),
(2, 'RGKE BBQ','604-232-5555','RGKE Menu','1313 Toronto Road','surprised with the fruit Cocktail',4.6),
(2, 'Nelo Belgien Waffle Bar','778-573-3434','Waffle Bar Menu','984w Coclam Street','one of the best waffle',4.4);

INSERT INTO orders (restaurant_id,customer_id,rating,review,order_placed)
VALUES
(1,3,4.3,'Worth to try','1666151512921'),
(1,4,4.5,'Services are excllent','1666155545921'),
(1,4,3.8,'The food did not meet my expectation','1666158594921'),
(1,4,3.9,'All good!','1666159694921');

INSERT INTO menu_items (menu_id,item,price,time_to_prepare,item_description,item_photo_url)
VALUES
(4,'Sirloin Oscar','42.5',18,'Shrimp, scallops, asparagus, béarnaise sauce. Available in 8 oz','https://www.southernladymagazine.com/wp-content/uploads/2017/02/Set-to-Serve-Starry-Night7.jpg'),
(4,'Lobster Tail','45',17,'Made with large lobster tails smothered with a buttery garlic herb sauce then broiled under high heat making these lobster tails tender and juicy','https://www.wholesomeyum.com/wp-content/uploads/2021/10/wholesomeyum-The-Best-Broiled-Lobster-Tail-Recipe-15.jpg'),
(4,'Spaghetti Carbonara','14.5',15,'Spaghetti the carbonara is made with pancetta or bacon, eggs, Parmesan, olive oil, salt and pepper','https://realfood.tesco.com/media/images/1400x919-SpaghettiCarbonara-557b6ff5-c4f3-4565-ae8e-a506f7dcc415-0-1400x919.jpg'),
(4,'Minestrone Soup','5.5',5,'Filled with pasta, beans, tomatoes, and veggies and seasoned with Italian herbs.','https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/minestrone_23211_16x9.jpg'),
(4,'Bonafide Chicken','12.75',10,'bonafide chicken with three pieces, including the wing, thigh, and leg, contains 650 calories.','https://www.theedgyveg.com/wp-content/uploads/2015/06/bonafidechicken1.jpg'),
(4,'Prawn Crunch Roll','14',10,'A more intricate play off the much-loved dynamite roll, our Prawn Crunch Roll features light, crispy panko-breaded prawns with fresh asparagus, cucumber, avocado and mango. Finished with sriracha mayo and soy glaze, this roll is bound for legendary status.','https://www.cactusclubcafe.com/wp-content/uploads/2019/07/CC_190626_PrawnCrunchRoll_H7639_edited_600x400.jpg'),
(4,'Spicy Ahi Roll','12',10,'This rolls balance of sweet and spicy flavours comes from a few elements. The Ocean Wise™ ahis marinade gives it acidity, a bit of kick and some sweetness.','https://www.cactusclubcafe.com/wp-content/uploads/2019/07/CC_190626_SpicyAhiRoll_H8011_edited_600x400.jpg'),
(2,'Roasted Duck Breast','32',15,'Produced in a facility that processes milk, sesame, eggs, fish, shellfish, crustaceans, mustard, tree nuts, peanuts, wheat, soybean and sulphites.','https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/roasted-duck-breasts-dc4af751.jpg'),
(2,'Albacore Tuna Nicoise','25',14,'Fresh green beans, baby read potatoes, cherry tomatoes, red wine vinegar, fresh tuna.','https://simmerandsage.com/wp-content/uploads/2021/07/IMG_0824-scaled.jpg'),
(2,'Steak Frites','21.5',20,'Served with gravy or sauce, including béarnaise, a creamy sauce made from clarified butter, herbs, and egg yolks.','https://www.foodandwine.com/thmb/Wo1lj_Ix1Nw3Xv7x5qsttI4djMQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Steak-Frites-FT-RECIPE0321-c875ad394c154fea82ed91e3703e21e8.jpg'),
(2,'Cheddar Burger','13',8,'Ground beef, bacon bits, cheddar cheese, garlic power, boston lettuce, making it the perfect all-rounder for a classic cheeseburger','https://media.blueapron.com/recipes/2901/square_newsletter_images/1523553529-1-0007-7392/0423_2PM_White-Cheddar-Burgers_5941_WEB_SQ.jpg?quality=80&width=850'),
(2,'Crispy Yam Fries','6.5',5,'Tossed with olive oil and sea salt, cayenne pepper','https://www.dinneratthezoo.com/wp-content/uploads/2019/07/sweet-potato-fries-5.jpg'),
(2,'Teriyaki Chichen Rice Bowl','16.25',12,'Sweet, garlicky chicken served with rice and steamed broccoli comes together','https://www.kayscleaneats.com/wp-content/uploads/2019/09/dsc_0357.jpg'),
(2,'Kale + Grilled Chicken Salad','13',5,'Kale waldorf salad with chopped chicken breast, avocado, goat cheese, tart cranberries, apples and crunchy toasted walnuts.','https://www.ambitiouskitchen.com/wp-content/uploads/2017/01/Monique-Kale-Waldorff-Salad-3-1064x1064.jpg');

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
