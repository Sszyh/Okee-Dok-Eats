//get queryParams from url via jquery
https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery

function getUrlVars(url) {
    let qParams = [], hash;
    let hashes = url.slice(url.indexOf('?') + 1).split('&');
    for(let i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        qParams.push(hash[0]);
        qParams[hash[0]] = hash[1];
    }
    return qParams;
};

function createMenuItem(menu) {
  const $menuContainer = $(`
  <div class="table-left">
  <h3>${menu.item}</h3>
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
  const $queryParamObj = getUrlVars(window.location.href)

  $.ajax ({
    method: 'GET',
    url: '/api/menu',
    data: {
      name: $queryParamObj.name,
      id: $queryParamObj.id,
    }
  })
  .done((res) => {
    console.log(res);
    //this is the menu returned for a given restaurant id
    //loop through the response object and then populate the menu containers gord has set up
    for (const item of res.menuList) {
      $('div.item-list').append(createMenuItem(item))
    }
  })
});
//select the counter and increment or decrement or 0
// used this as a template idea
// https://codepen.io/titanean/pen/PGXPNq



$(document).on('click', '.increment', function(e){
  console.log(e.currentTarget);
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

$(document).on('click', '#add-to-cart', function(e){
  const $itemId= e.target.value;
  const $count = $(this).siblings().children(`.counter.id-${$itemId}`).val();
  const $price = $(`.item-price.id-${$itemId}`).text();
  const $priceAsFloat = parseFloat($price.replace(/[^\d.]/g, ''));
  console.log($priceAsFloat);
  if (parseInt($count) !== 0) {
    // add item to cart!
    console.log("count:" + $('div.cart-quantity').text());
  }
  else {
    //do not add to cart
  }

})



