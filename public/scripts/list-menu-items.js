import { getUrlQString } from './helpers/getUrlQString.js'

/* get queryParams from url via jquery
 https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery
*/


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
  <button id="add-to-cart" value="${menu.id}">Add to cart</button>
</div>
  `)
return $menuContainer;
}

$(() => {
  const $queryParamObj = getUrlQString(window.location.href)

  $.ajax ({
    method: 'GET',
    url: '/api/menu',
    data: {
      name: $queryParamObj.name,
      id: $queryParamObj.id,
    }
  })
  .done((res) => {
    //this is the menu returned for a given restaurant id
    //loop through the response object and then populate the menu containers Gord has set up
    for (const item of res.menuList) {
      $('div.item-list').append(createMenuItem(item))
    }
  })
});

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
 /* MANAGING CART MOVED TO CAR HELPERS.JS IN SCRIPTS */

/* MODAL attempt */

const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
