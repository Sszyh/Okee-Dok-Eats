export default function getUrlQString(url) {
  let qParams = [], hash;
  let hashes = url.slice(url.indexOf('?') + 1).split('&');
  for(let i = 0; i < hashes.length; i++){
      hash = hashes[i].split('=');
      qParams.push(hash[0]);
      qParams[hash[0]] = hash[1];
  }
  return qParams;
};

