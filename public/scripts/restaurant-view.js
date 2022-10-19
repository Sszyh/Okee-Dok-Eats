import getDateAndTime from './helpers/getDateAndTime.js';

// helper function to make orderlist
const orderList = (order) => {
  const a = getDateAndTime(order.order_placed);
  const $list = $(`
  <li id=${order.id}>${order.id} ${a}</li>
  `)
  return $list;
};

// helper function to create customer information
const orderDetails = (order) => {
  const b = getDateAndTime(order.order_placed)
  const $information = $(`
  <section>
  <div>Details</div>
  <div>Order Id: ${order.id}</div>
  <div>Order Placed time: ${b}</div>
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
