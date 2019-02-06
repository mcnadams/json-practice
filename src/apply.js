const applicantOne = {
    firstName: 'Tyrion',
    lastName: 'Lannister',
    tvShow: 'Game of Thrones',
    power: 'drinks and knows things.'
};

const applicantTwo = {
    firstName: 'Arya',
    lastName: 'Stark',
    tvShow: 'Game of Thrones',
    power: '100% badass'
};

//instantiate array for applicants
let applicants = [];

//push first applicant into array
applicants.push(applicantOne);

//store array in local storage
const serializeOne = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeOne);

//check if there are existing applicants in local storage
const jsonString = window.localStorage.getItem('applicants');

if(jsonString) {
    applicants = JSON.parse(jsonString);
}

//add additional applicant(s) and put back in local storage
applicants.push(applicantTwo);
const serializeTwo = JSON.stringify(applicants);
window.localStorage.setItem('applicants', serializeTwo);