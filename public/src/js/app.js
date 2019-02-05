
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');

button.addEventListener('click', function() {
  // Create a new Promise here and use setTimeout inside the function you pass to the constructor

  var promise = new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve('https://swapi.co/api/people/1')
    }, 3000);
  })

  promise.then(function(url){
    return fetch(url);
  }).then(function(response){
    return response.json();
  }).then(function(data){
    output.append(data.name);
  })

  var promise2 = new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve('https://httpbin.org/put')
    }, 3000);
  })
  promise2.then(function(url){
    return fetch(url,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({person: {name: 'Max', age: 28}})
    });
  }).then(function(response){
    return response.json();
  }).then(function(data){
    output.append(data.json.person.name);
  })
  .catch(function(err) {
    console.log(err);
  });

});