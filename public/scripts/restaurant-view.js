
$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/restaurant'
  })
  .done((response) => {
    console.log("respon",response)
    //const $orderList = $('<ul>');
    $('<ul>').empty();

    for(const order of response.orders) {
      console.log("23")
      console.log("res",response.orders)
      $('<li>').text(`${order.id} Placed time: ${order.order_placed}`).appendTo($('.order-list'))
    }
  })
})
