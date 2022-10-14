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
  <div class="item-price">${menu.price}</div>
  <div id="quantity-count">
    <button class="decrement"><i class="fa fa-chevron-left"></i></button>
    <input class="counter" type='text' value=0>
    <button class="increment"><i class="fa fa-chevron-right"></i></button>
  </div>
  <button id="add-to-cart" class="id" value="${menu.id}">Add to cart</button>
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



$(document).on('click', '.increment', function(){
  let counter = $('.counter').val();
  counter = parseInt(counter) + 1
  $('.counter').val(counter);
})

$(document).on('click', '.decrement', function(){
  let counter = $('.counter').val();
  counter = parseInt(counter) - 1

  if (counter < 0) {
    counter = 0;
  } else {
  $('.counter').val(counter);
  }
})

$(document).on('click', '#add-to-cart', function(){
  const $menuPrice = $(document).find('.item-price').html();
  const $quantity = parseInt($(document).find('.counter').val());
  console.log($menuPrice, $quantity)
})






{/* <form action="/menu" method="GET">
<input type="text" id="quantity" name="quantity">
</form> */}
