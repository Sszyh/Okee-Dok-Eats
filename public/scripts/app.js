// Client facing scripts here


$(() => {
// INDEX PAGE START

//redirect like behaviour to MEME page
  $('#or-not').on('click', () => {
    window.location.replace("https://media.tenor.com/m0rkjXQvKYYAAAAd/im-not-hungry-upset.gif");
  });

  /*
  $('#order-now').on('click', () => {
    TODO, auth check, and redirect to restaurant page
  });
 */

  $('#order-now').on('click', () => {

  });
//INDEX PAGE END
});



// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
