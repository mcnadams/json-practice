const json = window.localStorage.getItem('applicant');

console.log(json);

const hydrate = JSON.parse(json);

console.log(hydrate);