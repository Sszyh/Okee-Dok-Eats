function $BuildCartTable(item) {
  $cartRow = $(`
  <td>${item.name}</td>
  <td>${item.quantity}</td>
  <td>${item.price}</td>
`)

return $cartRow;
}



$(() => {

  //use session storage to load the id of the items, then query the db for those menu items?

  const cart = JSON.parse(sessionStorage.getItem('order'))
  const ids = cart.map(x => x.menuItemId)
  console.log(ids);
  const dataQ = JSON.stringify(ids);

  $.ajax({
    method: 'GET',
    url: '/api/cart',
    dataType: "json",
    contentType: "application/json",
    // data: dataQ,
  })
  .done((res) => {
    console.log(res);
  })

})

