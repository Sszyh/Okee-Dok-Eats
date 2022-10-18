// helper function to make orderlist
const orderList = (order) => {
  const $list = $(`
  <li id=${order.id}>${order.id} ${order.order_placed}</li>
  `)
  return $list;
}

// helper function to create customer information
const orderDetails = (order) => {
  const $information = $(`
  <section>
  <div>Order Item</div>
  <div>Order Id: ${order.id}</div>
  <div>Order Placed time: ${order.order_placed}</div>
  <div>Customer: ${order.first_name} ${order.last_name}</div>
  <div>Cell: ${order.phone_number}</div>
  </section>
  `)
  return $information;
}

// helper function to build the items for one order
const orderItem = (order) => {
  const $item = $(`
  <div id=${order.id}>* ${order.item}</div>
  `)
  return $item;
}

$(document).ready(function () {
  $.ajax({
    method: 'GET',
    url: '/api/restaurant'
  })
    .done((response) => {
      let a = [];
      let b = [];
      for (const order of response.orders) {
        console.log("irder,", order)
        // set general order list
        if (!a.includes(order.id)) {
          $('.order-list').append(orderList(order));
          a.push(order.id);
        }
        // set order detail (order and customer information)
        if (!b.includes(order.id)) {
          $(`#${order.id}`).click(function () {
            $('.order-item-box').slideDown('fast');
            $('.order-information').empty();
            $('.item-list').empty();
            $('.order-information').append(orderDetails(order));
          });

          b.push(order.id);
        }
        // set order detail(items)
        $(`#${order.id}`).click(function () {
          $('.item-list').append(orderItem(order));
        })
        // hide the order detail as per click
        $('.order-item-box').click(function () {
          $('.order-item-box').hide(500);
        })
      }
    })
})