import getUrlQString from './helpers/getUrlQString.js'
export { $menuListFromAjax }
/* get queryParams from url via jquery
 https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery
*/

 /* MANAGING CART MOVED TO CAR HELPERS.JS IN SCRIPTS */

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

let $menuListFromAjax;
$(() => {
  const $queryParamObj = getUrlQString(window.location.href)

  $.ajax ({
    method: 'GET',
    url: '/api/menu',
    data: {
      name: $queryParamObj.name,
      id: $queryParamObj.id,
    },
    success: function(data) {
      $menuListFromAjax = data
    }
  })
  .done((res) => {
    //this is the menu returned for a given restaurant id
    for (const item of res.menuList) {
      $('div.item-list').append(createMenuItem(item))
    }
  })
});


/* MODAL attempt */

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
