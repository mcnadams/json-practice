const json = window.localStorage.getItem('applicants');
const hydrate = JSON.parse(json);

const tvShowNode = document.getElementById('tv-show');
const abilityNode = document.getElementById('ability');
const lastNameNode = document.getElementById('last-name');

tvShowNode.textContent = hydrate.tvShow;
abilityNode.textContent = hydrate.power;
lastNameNode.textContent = hydrate.lastName;