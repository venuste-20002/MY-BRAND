var contacts = []; 

if (localStorage.getItem('contacts')) {
    contacts = JSON.parse(localStorage.getItem('contacts'));
} else {
    contacts = [];
}

function submitForm(event) {
    event.preventDefault();
    console.log("submitted");

    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value; 
    var message = document.getElementById('message').value; 

    console.log('clicked');

    var contact = {
        name: name,
        email: email,
        message: message
    };

    contacts.push(contact);

    localStorage.setItem('contacts', JSON.stringify(contacts));
}
