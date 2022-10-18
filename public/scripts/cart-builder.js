import Cart from './cart/cart-obj.js';
import CartItem from './cart/cart-items.js';
import { sumPrice } from './cart/helpers/sumPrice.js';
import { sumTime } from './cart/helpers/sumTime.js';
import { $menuListFromAjax } from './list-menu-items.js';
// import buildCartTable from '/cart/helpers/buildCartTable.js';

// set up new cart object
const CART = new Cart();
sessionStorage.clear(); //clear storage on first load;

//clear cart and storage and display restaurant page
$(document).on('click', '#clear-cart', function () {
  CART.resetCart();
  CART.saveCart();
  sessionStorage.clear();
  window.location.href = '/customer'
})

//select the counter and increment or decrement or 0
// used this as a template idea plus help from mentor!
// https://codepen.io/titanean/pen/PGXPNq
$(document).on('click', '.increment', function(e){
  // console.log(e.currentTarget);
  const $btnUp = e.currentTarget.value;
  let counter = $(`.counter.id-${$btnUp}`).val();
  counter = parseInt(counter) + 1
  $(`.counter.id-${$btnUp}`).val(counter);
})

$(document).on('click', '.decrement', function(e){
  const $btnDown = e.currentTarget.value;
  let counter = $(`.counter.id-${$btnDown}`).val();
  counter = parseInt(counter) - 1

  if (counter < 0) {
    counter = 0;
  } else {
  $(`.counter.id-${$btnDown}`).val(counter);
  }
})

$(document).on('click', '#remove-from-cart', function(e) {
  const $id = e.target.value;
  //cartItems.menuItemId is stored as a string
  CART.removeItem(parseInt($id))
  CART.saveCart()
  // console.log(CART)
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
    const CART_ITEM = new CartItem($name, parseInt($count), $priceAsFloat, parseInt($itemId))
    CART.addItem(CART_ITEM);
    CART.saveCart();
  }

  //update modal values (but its hidden so wont be seen until user clicks view order)
  // console.log(CART);

  const subTotal = sumPrice(CART);
  //filter items that are in CART from the ajax object and send to calc total time
  if (CART.showCart().length !== 0) {
  const menuObjFilteredByCart = $menuListFromAjax.menuList.filter(y => {
    return CART.cartItems.some((x) => {
      return x.menuItemId === y.id
    })
  })
  // console.log(menuObjFilteredByCart);
  const timeToPrepare = sumTime(menuObjFilteredByCart, parseInt($count));
  console.log(`The Subtotal is: ${subTotal}`)
  console.log(`and the estimate time is: ${timeToPrepare}`)
}

  //update Cart header only works when on current page, need to add to storage to display across pages if needed, i will leave for now
  for (const ele of CART.showCart()) {
    $headerCount += ele.quantity;
  }
  $('.cart-quantity').text($headerCount.toString())

})
