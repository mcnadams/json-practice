const jsonString = window.localStorage.getItem('applicants');
let applicants = [];

if(jsonString) {
    applicants = JSON.parse(jsonString);
}

const tbody = document.getElementById('applicants');

for(let index = 0; index < applicants.length; index++) {
    const applicant = applicants[index];
    
    const tr = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'applicant-detail.html?name=' + encodeURIComponent(applicant.firstName);
    link.textContent = applicant.firstName

    
    firstNameCell.appendChild(link);
    tr.appendChild(firstNameCell);
    
    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = applicant.lastName;
    tr.appendChild(lastNameCell);

    tbody.appendChild(tr);
}