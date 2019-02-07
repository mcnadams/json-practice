const json = window.localStorage.getItem('applicants');
let applicants = null;

if(json){
    applicants = JSON.parse(json);
}
else {
    window.location = './index.html';
}

const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('name');

let applicant = null;

for(let i = 0; i < applicants.length; i++) {
    const thisApplicant = applicants[i];
    if(thisApplicant.firstName === name) {
        applicant = thisApplicant;
        break;
    }
}

if(applicant === null) {
    window.location = './index.html';
}

const tvShowNode = document.getElementById('tv-show');
const abilityNode = document.getElementById('power');
const lastNameNode = document.getElementById('last-name');
const firstNameNode = document.getElementById('first-name');

tvShowNode.textContent = applicant.tvShow;
abilityNode.textContent = applicant.power;
lastNameNode.textContent = applicant.lastName; 
firstNameNode.textContent = applicant.firstName; 