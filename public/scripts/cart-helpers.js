import Cart from './cart/cart-obj.js';
import CartItem from './cart/cart-items.js';

const CART = new Cart();

// CartItem = (quantity, price, menuID (for querying the DB))

$(() => {
  $(document).on('click', '.open', function () {
    // console.log(e.target)
  })

})

$(document).on('click', '#add-to-cart', function(e){
  const $itemId = e.target.value;
  let $count = $(this).siblings().children(`.counter.id-${$itemId}`).val();
  const $price = $(`.item-price.id-${$itemId}`).text();
  const $priceAsFloat = parseFloat($price.replace(/[^\d.]/g, ''));
  // console.log($priceAsFloat);
  if (parseInt($count) > 0) {
    // add item to cart! with price and time to prepare from DB
    let $currentCount = parseInt($('div.cart-quantity').text()) + parseInt($count);
    $('.cart-quantity').text($currentCount.toString())
  }

// console.log($itemId, $priceAsFloat, $count);

if (parseInt($count) >= 0) {
  const CART_ITEM = new CartItem($count, $priceAsFloat, $itemId)
  // console.log(CART_ITEM)


  CART.addItem(CART_ITEM);
  console.log(CART);
  // CART.saveCart();
  // console.log(CART.loadCart())
}

})

