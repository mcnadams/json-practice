const tyrion = {
    tvShow: 'Game of Thrones',
    ability: 'drinks and knows things.',
    lastName: 'Lannister'
};

const serialize = JSON.stringify(tyrion);
console.log(tyrion);
console.log(serialize);
window.localStorage.setItem('applicant', serialize);