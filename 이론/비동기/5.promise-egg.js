function fetchEgg(chicken) {
  return Promise.resolve(`${chicken}=>🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.resolve(`🪴 => 🐓`);
}

getChicken()
  .catch(() => '🐓')
  .then(fetchEgg)
  .then(fryEgg)
  .then(console.log);
