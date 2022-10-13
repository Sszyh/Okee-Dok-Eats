//aJax to fetch restaurants and return an li populated with names

$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/customer'
  })
  .done((res) => {
    console.log(res);
    const $restaurantList = $('#restaurant-listing')
    $restaurantList.empty();

    for (const restaurant of res.restaurants) {
      $('<li class="restaurant">').text(restaurant.name).appendTo($restaurantList);
    }
  })
})
