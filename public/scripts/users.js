// Client facing scripts here
/*

ignore this for now! sarah did this already

function $createLogout(first, last){
  const $logout = (`
    <form action="/logout" method="GET">
      <label for="logout">Logged In As: ${first} ${last}</label>
      <button class="nav-buttons" type="submit">Logout</button>
    </form>
    `)
  return $logout;
}

$(document).ready(function() {
  $('#login').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const loginInput = $(this).siblings().val();
    $.ajax({
      method: 'POST',
      url: '/api/login',
      data: {
        userFirstName: loginInput
      }
    })
      .done((res) => {
        const firstName = res.user[0].first_name;
        const lastName = res.user[0].last_name;
        const id = res.user[0].id;
        document.cookie = `first_name=${firstName} last_name=${lastName} id=${id}`
        $('.nav-right').empty().append($createLogout(firstName, lastName))
      });
  });
});
 */
