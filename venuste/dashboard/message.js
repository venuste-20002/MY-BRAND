document.addEventListener("DOMContentLoaded", function() {
    const horizontalBar = document.getElementById("horizontalBar");
    const verticalNav = document.querySelector(".vertical .list");

    horizontalBar.addEventListener("click", function() {
        // Toggle class to show/hide the vertical navigation
        verticalNav.classList.toggle("active");
    });
});

// Initialize contactsData as an empty array
let contactsData = [];

// Fetch contacts from the backend when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchContacts();
});

// Function to display contacts
const displayContacts = () => {
    const allContacts = document.querySelector('.display_contacts');
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
    contactElement.classList.add('card', 'mt-4', 'p-3');

    contactElement.innerHTML = `
        <h4 class="cart-title">Name:${contact.sendmessage}</h4>
        <div class="card-subtitle text-muted mb-2">email:${contact.email}
        </div>
        <div class="dart-text mb-2">
            <div>
                <a href="viewmessage.html?id=${contact._id}" class="btn btn-primary">Read More</a>
                <button class="btn btn-danger delete-contact" data-contact-id="${contact._id}">Delete</button>
            </div>
        </div>
    `;

    return contactElement;
};

// Function to fetch contacts from the backend
const fetchContacts = async () => {
    try {
        // Retrieve token (you need to implement your logic here)
        const token = getAuthToken();

        // Fetch contacts from the backend API
        const response = await fetch('http://localhost:3005/api/v1/messages/all', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

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

// Event delegation for delete contact button clicks
document.addEventListener('click', async (event) => {
    if (event.target.classList.contains('delete-contact')) {
        const contactId = event.target.dataset.contactId;
        try {
            // Retrieve token (you need to implement your logic here)
            const token = getAuthToken();

            // Send DELETE request to backend API to delete the contact
            const response = await fetch(`http://localhost:3005/api/v1/messages/${contactId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) {
                throw new Error('Failed to delete contact');
            }
            console.log('Contact deleted successfully');
            // After deletion, fetch and display updated contacts
            fetchContacts();
        } catch (error) {
            // console.error('Error deleting contact:', error);
            // Handle error appropriately
        }
    }
});

// Function to get the authentication token (replace this with your actual token retrieval logic)
function getAuthToken() {
    // Replace this with your actual token retrieval logic
    return 'your_auth_token';
}
