fetch('https://pokeapi.co/api/v2/pokemon/gengar/')
  .then(response => response.json())
  .then(data => console.log(data));
