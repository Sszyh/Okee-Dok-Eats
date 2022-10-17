import Cart from './cart/cart-obj.js';
import CartItem from './cart/cart-items.js';
const CART = new Cart();

/* $(() => {
  $(document).on('click', '.open', function () {
    // console.log(e.target)
  })

}) */



$(document).on('click', '#add-to-cart', function(e){
  e.stopPropagation();
  const $itemId = e.target.value;
  const $name = $(this).parent().siblings().children(`div.name.id-${$itemId}`).text()
  let $count = $(this).siblings().children(`.counter.id-${$itemId}`).val();
  const $price = $(`.item-price.id-${$itemId}`).text();
  const $priceAsFloat = parseFloat($price.replace(/[^\d.]/g, ''));

  // this is just updating the cart-quantity in the header, it doesn't adjust as per deleting items, for now I will leave it as is.
  if (parseInt($count) > 0) {
    // add item to cart! with price and time to prepare from DB
    let $currentCount = parseInt($('div.cart-quantity').text()) + parseInt($count);
    $('.cart-quantity').text($currentCount.toString())
  }

if (parseInt($count) >= 0) {
// console.log($menuAjaxResponseObj.filter(x => x.id === $itemId))

  const CART_ITEM = new CartItem($name, parseInt($count), $priceAsFloat, $itemId)
  CART.addItem(CART_ITEM);
  console.log(CART);
  CART.saveCart();
}

//need to add a removal here, the CART obj function needs to be tested
})





