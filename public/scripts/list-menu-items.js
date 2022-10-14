$(document).ready(function() {


  $.ajax ({
    method: 'GET',
    url: '/api/menu',
  })
  .done((res) => {
    console.log(res);
    //this is the menu returned for a given restaurant id
  })

})

