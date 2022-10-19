import Cart from './cart/cart-obj.js';
import CartItem from './cart/cart-items.js';
import sumPrice from './cart/helpers/sumPrice.js';
import sumTime from './cart/helpers/sumTime.js';
import $buildCartTable from './cart/helpers/buildCartTable.js';
import filterMenuItems from './cart/helpers/filterMenuItems.js'
import { $menuListFromAjax } from './list-menu-items.js';

/*
The functionality around add to cart and remove from cart is working BUT
There is a lot of repeated code, in the future it would be great to separate these out to different modules and wrap each component in a function, or class so we could simply call that function whenever there was a change to the cart.
*/

// set up new cart object
const CART = new Cart();
sessionStorage.clear(); //clear storage on first load;

console.log($menuListFromAjax);

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
$(document).on('click', '.increment', function (e) {
  // console.log(e.currentTarget);
  const $btnUp = e.currentTarget.value;
  let counter = $(`.counter.id-${$btnUp}`).val();
  counter = parseInt(counter) + 1
  $(`.counter.id-${$btnUp}`).val(counter);
})

$(document).on('click', '.decrement', function (e) {
  const $btnDown = e.currentTarget.value;
  let counter = $(`.counter.id-${$btnDown}`).val();
  counter = parseInt(counter) - 1

  if (counter < 0) {
    counter = 0;
  } else {
    $(`.counter.id-${$btnDown}`).val(counter);
  }
})
/*
The next two on click events are for removal and adding to cart object, As each time EITHER of these buttons are clicked the cart has to be recalculated They contain a lot of repeated code, If I have time it would be great to separate these out into different modules and functions

*/
$(document).on('click', '#remove-from-cart', function (e) {
  const $id = e.target.value;
  const $count = $(this).siblings().children(`.counter.id-${$id}`).val();
  CART.removeItem(parseInt($id))
  CART.saveCart()

  if (CART.showCart().length !== 0) {
    //calculate totals
    const subTotal = sumPrice(CART);
    const timeToPrepare = sumTime(CART);

    //append hidden modal
    $('#cart-rows').empty().append($buildCartTable(CART.showCart()))
    $('#total-time').text(`${timeToPrepare} mins`);
    $('#sub-total').text(`$ ${subTotal.toFixed(2)} CAD`)

  } else {
    $('#cart-rows').empty()
    $('#total-time').empty()
    $('#sub-total').empty()
  }
})

$(document).on('click', '#add-to-cart', function (e) {
  // let $headerCount = 0;
  const $itemId = e.target.value;
  const $name = $(this).parent().siblings().children(`div.name.id-${$itemId}`).text()
  let $count = $(this).siblings().children(`.counter.id-${$itemId}`).val();
  const $price = $(`.item-price.id-${$itemId}`).text();
  const $priceAsFloat = parseFloat($price.replace(/[^\d.]/g, ''));
  const $time = $menuListFromAjax.menuList.filter(x => x.id === parseInt($itemId))[0].time_to_prepare;

  if (parseInt($count) === 0) {
    return;
  }

  if (parseInt($count) > 0) {
    const CART_ITEM = new CartItem($name, parseInt($count), $priceAsFloat, $time, parseInt($itemId))
    CART.addItem(CART_ITEM);
    CART.saveCart();
  }

  //update modal values (but its hidden so wont be seen until user clicks view order)

  if (CART.showCart().length !== 0) {
    //calculate totals
    const subTotal = sumPrice(CART);
    const timeToPrepare = sumTime(CART);

    //append hidden modal
    $('#cart-rows').empty().append($buildCartTable(CART.showCart()))
    $('#total-time').text(`${timeToPrepare} mins`);
    $('#sub-total').text(`$ ${subTotal.toFixed(2)} CAD`)

  }  else {
    $('#cart-rows').empty()
    $('#total-time').empty()
    $('#sub-total').empty()
  }

  /*
  update Cart total in header only works when on current page, header is not sticky either, this is Work in progress,
  for (const ele of CART.showCart()) {
    $headerCount += ele.quantity;
  }
  $('.cart-quantity').text($headerCount.toString())
  */
})
//DONE CART BUILD

// create a ajax request to POST to our server, pulling info from the CART object and the menuList

$(document).on('click', '#order', function(e){
  e.preventDefault();
  const cart = CART.showCart();
  // const menuFiltered = filterMenuItems($menuListFromAjax, CART).map(x => x.time_to_prepare);
  $.ajax({
    method: 'POST',
    url: '/order',
    data: {
      order: cart,
      // timeIndexed: menuFiltered,
      //orderPlaced: Date.now(),
    }
  }).then((res) => {
    //notify user of a successful order placement
    console.log(res)
  })
})
