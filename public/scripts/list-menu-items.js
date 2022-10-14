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
  <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. </p>
</div>
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Waffles_with_Strawberries.jpg" alt="">
<div class="table-right">
  <div class="item-price">${menu.price}</div>
  <form action="/menu" method="GET">
    <input type="text" id="quantity" name="quantity">
  </form>
  <button id="add-to-cart">Add to cart</button>
</div>
  `)
return $menuContainer;
}

$(document).ready(function() {
  const $queryParamObj = getUrlVars(window.location.href)
  console.log($queryParamObj)

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
})

