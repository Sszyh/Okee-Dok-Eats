//aJax to fetch restaurants and return an li populated with names
const createRestaurantList = (restaurant) => {
  const $restaurant = $(`
  <li> <button id="restaurant-link" type="submit">${restaurant.name}</button></li>
  `);
  return $restaurant;
}

//load a list of restaurants
  $.ajax({
    method: 'GET',
    url: '/api/customer'
  })
  .done((res) => {
    console.log(res);
    const $restaurantList = $('#restaurant-listing')
    $restaurantList.empty();

    for (const restaurant of res.restaurants) {
      $restaurantList.append(createRestaurantList(restaurant))
    }

  })

//when user clicks on restaurant DB is queried and that restaurants menu is returned on menu-view page
$(document).on('click', 'button#restaurant-link', function(){
  const $restaurantName = $(this).html();
  console.log($restaurantName)

  window.location.href = "http://localhost:8080/menu?" +$restaurantName

  // $.ajax ({
  //   method: 'GET',
  //   url: 'api/menu',
  // })
  // .done((res) => {
  //   console.log(res);
  //   //this is the menu returned for a given restaurant id
  // })
})

