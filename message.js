document.addEventListener('DOMContentLoaded', function() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));


console.log(contacts);
var all_contacts = document.getElementById('display_contacts');


contacts.forEach((contact) => {
    const div = document.createElement('div');
    console.log(contact)
    div.innerHTML = `
    <div class="yyy1">
                <h2>${contact.name}</h2>
                <p>mm dd </p>
                <div class="rectangle">
                    <p>View Massage</p>
                </div>
                <div class="icon2">
                    <?xml version="1.0" ?><svg  height="25px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M90,24H72V18A18.02,18.02,0,0,0,54,0H42A18.02,18.02,0,0,0,24,18v6H6A6,6,0,0,0,6,36h6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V36h6a6,6,0,0,0,0-12ZM36,18a6.0078,6.0078,0,0,1,6-6H54a6.0078,6.0078,0,0,1,6,6v6H36ZM72,84H24V36H72Z"/></svg>
                </div>
            </div>
`;
    all_contacts.appendChild(div);
});
});