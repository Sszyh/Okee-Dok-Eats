import ajaxGETValues from './helpers/getAjaxValues.js';
import getUrlQString from './helpers/getUrlQString.js'
export { $menuListFromAjax, $queryStringObj }
/* get queryParams from url via jquery
 https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery
*/

 /* MANAGING CART TASKS MOVED TO CART and CART/HELPERS.JS IN SCRIPTS */

function createMenuItem(menu) {
  const $menuContainer = $(`
<div class="table-left">
  <div class="name id-${menu.id}">${menu.item}</div>
  <p id="description">${menu.item_description}</p>
</div>
<img src="${menu.item_photo_url}" alt="menu-image">
<div class="table-right">
  <div class="item-price id-${menu.id}">${menu.price}</div>
  <div id="quantity-count">
    <button class="decrement" value="${menu.id}"><i class="fa fa-chevron-left"></i></button>
    <input class="counter id-${menu.id}" type='text' value="0">
    <button class="increment" value="${menu.id}"><i class="fa fa-chevron-right"></i></button>
  </div>
  <button id="add-to-cart" value="${menu.id}">Add</button>
  <button id="remove-from-cart" value="${menu.id}">Remove</button>
</div>
  `)
return $menuContainer;
}

const $queryStringObj = getUrlQString(window.location.href)

const $menuListFromAjax = ajaxGETValues('/api/menu', { name: $queryStringObj.name, id: $queryStringObj.id,})

//build menu list this may need to be done after the ajax completes? but in the ajaxGETValues I set async set to false, so we will Need to ask about this?
for (const item of $menuListFromAjax.menuList) {
  $('div.item-list').append(createMenuItem(item))
}


/* MODAL  */

const modal = document.querySelector(".modal");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        modal.classList.toggle('show-modal')
    }
}

$('.trigger').on("click", toggleModal);
$('.close-button').on("click", toggleModal);
window.addEventListener("click", windowOnClick);

/* MODAL END */


let $loggedIn = $('#loggedIn')[0];
$(window).scroll(function() {
  if($('body').scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $($loggedIn).css('opacity', '0');
  } else {
    $($loggedIn).css('opacity', '1');
  }
})

