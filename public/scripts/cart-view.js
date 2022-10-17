function $buildCartTable(fromAjax, fromSession) {
  $cartRow = $(`
  <tr>
    <td>${fromAjax.item}</td>
    <td>${fromSession.quantity}</td>
    <td>${fromAjax.price}</td>
  </tr>
`)

  return $cartRow;
}

//use session storage to load the id of the items, then query the db

const cart = JSON.parse(sessionStorage.getItem('order')) //pull cart from session storage and parse
const cartJSON = sessionStorage.getItem('order');

$(() => {
  $.ajax({
    method: 'GET',
    url: '/api/cart',
    dataType: "json",
    contentType: "application/json",
    data: { cartJSON },
  })
    .done((res) => {
      console.log(res);
      console.log(cart)
      let totalTime = 0;
      let subTotal = 0;
      //sum time
      for (const item of res.order) {
        totalTime += item.time_to_prepare;
      }
      //sum total(without Tax)
      for (const item of cart) {
        subTotal += (item.price * item.quantity)
      }
      console.log(`subtotal: ${subTotal}, total time: ${totalTime}`)

      for (let i = 0; i < res.order.length; i++) {
        $('#cart-rows').append($buildCartTable(res.order[i], cart[i]));
      }
      // add subtotal and time
      $('#total-time').text(`${totalTime} mins`);
      $('#sub-total').text(`${subTotal}`)
    })

})
