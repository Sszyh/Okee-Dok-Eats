import Cart from './cart/cart-obj.js';
import CartItem from './cart/cart-items.js';
const CART = new Cart();

//clear cart and storage and display restaurant page
$(document).on('click', '#clear-cart', function () {
  CART.resetCart();
  CART.saveCart();
  sessionStorage.clear();
  window.location.href = '/customer'
})

$(document).on('click', '#add-to-cart', function (e) {
  e.stopPropagation();
  let $headerCount = 0;
  const $itemId = e.target.value;
  const $name = $(this).parent().siblings().children(`div.name.id-${$itemId}`).text()
  let $count = $(this).siblings().children(`.counter.id-${$itemId}`).val();
  const $price = $(`.item-price.id-${$itemId}`).text();
  const $priceAsFloat = parseFloat($price.replace(/[^\d.]/g, ''));

  if (parseInt($count) > 0) {
    const CART_ITEM = new CartItem($name, parseInt($count), $priceAsFloat, $itemId)
    CART.addItem(CART_ITEM);
    CART.saveCart();
  }
  //removal here, the CART obj function needs more testing!
  if (parseInt($count) === 0 && CART.showCart().length !== 0) {
    const thisItem = CART.cartItems.filter(x => x.menuItemId === $itemId)[0].menuItemId
    CART.removeItem(thisItem);
    CART.saveCart();
  }

  //update Cart header only works when on current page, need to add to storage to display across pages if needed, i will leave for now
  for (const ele of CART.showCart()) {
    $headerCount += ele.quantity;
  }
  $('.cart-quantity').text($headerCount.toString())

})





