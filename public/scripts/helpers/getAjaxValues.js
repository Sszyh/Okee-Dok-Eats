export default function ajaxGETValues(routeUrl, dataObj) {
  let response;
  $.ajax({
    method: 'GET',
    url: routeUrl,
    data: dataObj,
    async: false,
    success: function(data) {
      response = data
    }
  })
  return response;
  }
