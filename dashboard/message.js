// document.addEventListener('DOMContentLoaded', function() {
//     const contactsJson = localStorage.getItem('contacts');
//     const all_contacts = document.getElementById('display_contacts');
//     let contacts = [];

//     if (contactsJson) {
//         contacts = JSON.parse(contactsJson);
//         contacts.forEach((contact) => {
//             const div = document.createElement('div');
//             div.innerHTML = `
//                 <div class="yyy1">
//                     <h2>${contact.name}</h2>
//                     <p
//                     <div class="rectangle">
//                         <button class="view_button" data-id="view_button">View Message</button>
//                     </div>
//                     <div class="icon2" data-contact-id="${contact.id}">
//                         <?xml version="1.0" ?><svg  height="25px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M90,24H72V18A18.02,18.02,0,0,0,54,0H42A18.02,18.02,0,0,0,24,18v6H6A6,6,0,0,0,6,36h6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V36h6a6,6,0,0,0,0-12ZM36,18a6.0078,6.0078,0,0,1,6-6H54a6.0078,6.0078,0,0,1,6,6v6H36ZM72,84H24V36H72Z"/></svg>
//                     </div>
//                 </div>
//             `;
//             all_contacts.appendChild(div);
//         });
//     } else {
//         console.log("No contacts found in localStorage.");
//     }



// //     let icons = document.querySelectorAll('.icon2');
// //     icons.forEach(icon => {
// //         icon.addEventListener('click', function(event) {
// //             event.preventDefault()
// //             if (confirm('Do you want to delete this record?')) {
// //                 let contactId = icon.getAttribute('data-contact-id');
// //                 const index = contacts.findIndex(contact => contact.id == contactId);
// //                 // console.log(contacts[index])
// //                 if (index !== -1) {
// //                     contacts.splice(index, 1);
// //                     saveContactsToLocalStorage(contacts);
// //                     console.log(contacts)
// //                     icon.parentElement.remove();
// //                     console.log(`Contact with ID ${contactId} is deleted.`);
// //                 } else {
// //                     console.log(`Contact with ID ${contactId} not found.`);
// //                     console.log(contacts)
                    
// //                 }
// //             }
// //         });
// //     });

// //     let viewButtons = document.querySelectorAll('.view_button');
// //     viewButtons.forEach(button => {
// //         button.addEventListener('click', function() {
// //             let contactId = button.getAttribute('data-id');
// //             window.location.href = `viewmessage.html?id=${contactId}`;
// //             console.log('View Message button clicked');
// //         });
// //     });
// // });


// document.addEventListener('DOMContentLoaded', () => {
//     const errorContainer = document.getElementById('errorContainer');
//     const messageContainer = document.getElementById('messageContainer');

//     // Function to display error messages
//     function showError(message) {
//         errorContainer.textContent = message;
//         errorContainer.style.display = 'block';
//     }

//     // Fetch all messages
//     async function fetchAllMessages() {
//         try {
//             const response = await fetch('http://localhost:3005/api/v1/messages/all', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(errorData.message || 'Failed to fetch messages');
//             }

//             const responseData = await response.json();
//             const messages = responseData.data;

//             // Display messages in the message container
//             messageContainer.innerHTML = ''; // Clear existing messages
//             messages.forEach(message => {
//                 const messageElement = document.createElement('div');
//                 messageElement.textContent = message.content;
//                 messageContainer.appendChild(messageElement);
//             });
//         } catch (error) {
//             console.error('Error while fetching messages:', error);
//             showError(error.message || 'Failed to fetch messages. Please try again.');
//         }
//     }

//     // Fetch all messages when the DOM content is loaded
//     // fetchAllMessages();
// });
// })




// Initialize contactsData as an empty array
let contactsData = [];

// Fetch contacts from the backend when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchContacts();
});

// Function to display contacts
const displayContacts = () => {
    const allContacts = document.getElementById('display_contacts');
    allContacts.innerHTML = '';

    if (!Array.isArray(contactsData) || contactsData.length === 0) {
        allContacts.innerHTML = 'You do not have any contacts yet.';
        return;
    }

    contactsData.forEach(contact => {
        const contactElement = createContactElement(contact);
        allContacts.appendChild(contactElement);
    });
};

// Function to create a contact element
const createContactElement = (contact) => {
    const contactElement = document.createElement('div');
    contactElement.classList.add('contact');

    contactElement.innerHTML = `
        <div class="yyy1">
            <h2>${contact.sendmessage}</h2>
            <p>
                <div class="rectangle">
                    <button class="view_button" data-id="view_button">View Message</button>
                </div>
                <div class="icon2" data-contact-id="${contact._id}">
                    <?xml version="1.0" ?><svg  height="25px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M90,24H72V18A18.02,18.02,0,0,0,54,0H42A18.02,18.02,0,0,0,24,18v6H6A6,6,0,0,0,6,36h6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V36h6a6,6,0,0,0,0-12ZM36,18a6.0078,6.0078,0,0,1,6-6H54a6.0078,6.0078,0,0,1,6,6v6H36ZM72,84H24V36H72Z"/></svg>
                </div>
            </p>
        </div>
    `;

    // Add event listener for viewing contact message
    const viewButton = contactElement.querySelector('.view_button');
    viewButton.addEventListener('click', () => {
        console.log('View button clicked');
        console.log(contact._id);
        let contactId = contact._id;
        window.location.href = `viewmessage.html?id=${contactId}`;
    });

    // Add event listener for deleting contact
    const deleteButton = contactElement.querySelector('.icon2');
    deleteButton.addEventListener('click', async () => {
        const contactId = deleteButton.dataset.contactId;
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
            const response = await fetch(`http://localhost:3005/api/v1/messages/${contactId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                }
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to delete contact');
            }

            // Refresh contacts after deleting
            fetchContacts();
        } catch (error) {
            console.log('Error deleting contact:', error.message);
        }
    });

    return contactElement;
};

// Function to fetch contacts from the backend
const fetchContacts = async () => {
    try {
        // Fetch contacts from the backend API
        const response = await fetch('http://localhost:3005/api/v1/messages/all');

        // Check if the response is successful

        // Extract contacts data from the response
        const data = await response.json();
        contactsData = data.data;

        // Display the contacts
        displayContacts();
    } catch (error) {
        console.error('Error while fetching contacts:', error);
    }
};




