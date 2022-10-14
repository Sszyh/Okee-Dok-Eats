//get queryParams from url via jquery
https://stackoverflow.com/questions/4656843/get-querystring-from-url-using-jquery

function getUrlVars(url) {
    let qParams = [], hash;
    let hashes = url.slice(url.indexOf('?') + 1).split('&');
    for(let i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        qParams.push(hash[0]);
        qParams[hash[0]] = hash[1];
    }
    return qParams;
};

$(document).ready(function() {
  const $queryParamObj = getUrlVars(window.location.href)
  console.log($queryParamObj)

  $.ajax ({
    method: 'GET',
    url: '/api/menu',
    data: {
      name: $queryParamObj.name,
      id: $queryParamObj.id,
    }

  })
  .done((res) => {
    console.log(res);
    //this is the menu returned for a given restaurant id
    //loop through the response object and then populate the menu containers gord has set up


  })

})

