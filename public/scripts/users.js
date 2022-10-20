// Client facing scripts here
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
      .then((response) => {
        console.log(response);
      });
  });
});
