async function fetchEgg(chicken) {
  return `${chicken} => 🥚`;
}

async function fryEgg(egg) {
  return `${egg} => 🍳`;
}

async function getChicken() {
  return new Error('can not find 🐓');
}

async function makeFriedEgg() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = '🐓';
  }
  const egg = await fetchEgg(chicken);
  return fryEgg(egg);
}

makeFriedEgg().then(console.log);
