//load a list of restaurants
const createRestaurantList = (restaurant) => {
  const $restaurant = $(`
  <li> <button id="restaurant-link" type="submit" data-restaurant="${restaurant.id}" >${restaurant.name}</button></li>
  `);
  return $restaurant;
}

//aJax to fetch restaurants and return an restaurant list
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

/*
Would be better here send the info need in a json through the ajax request, rather than pulling the query string, will return to this if we have time
*/

//when user clicks on restaurant DB is queried and that restaurants menu is returned on menu-view page
$(document).on('click', 'button#restaurant-link', function(){
  const $restaurantId = $(this).data('restaurant');
  const $restaurantName = $(this).html()
  //replace this with ajax in the future
  window.location = "/menu?name=" +$restaurantName + "&id=" + $restaurantId
})

