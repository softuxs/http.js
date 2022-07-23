const MyRequest = new HTTP();
const MyURLS = new URLS();

MyRequest.GET({
  "URL": MyURLS.current + "/data.json",
}, (headers, results) => {
  const response = JSON.parse(results);
  document.querySelector('.results').innerHTML = results;
})