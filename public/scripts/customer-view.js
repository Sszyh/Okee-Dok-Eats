//aJax to fetch restaurants and return an li populated with names
const createRestaurantList = (restaurant) => {
  const $restaurant = $(`
  <li> <button id="restaurant-link" type="submit" data-restaurant="${restaurant.id}" >${restaurant.name}</button></li>
  `);
  return $restaurant;
}

//load a list of restaurants
  $.ajax({
    method: 'GET',
    url: '/api/customer'
  })
  .done((res) => {
    const $restaurantList = $('#restaurant-listing')
    $restaurantList.empty();

    for (const restaurant of res.restaurants) {
      $restaurantList.append(createRestaurantList(restaurant))
    }

  })

//when user clicks on restaurant DB is queried and that restaurants menu is returned on menu-view page
$(document).on('click', 'button#restaurant-link', function(){
  const $restaurantId = $(this).data('restaurant');
  const $restaurantName = $(this).html()
//this could be sent as id somehow? might be easier to query the DB with ID
  window.location = "/menu?name=" +$restaurantName + "&id=" + $restaurantId

})

