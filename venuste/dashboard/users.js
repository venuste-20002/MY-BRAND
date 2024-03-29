document.addEventListener("DOMContentLoaded", function() {
    const horizontalBar = document.getElementById("horizontalBar");
    const verticalNav = document.querySelector(".vertical .list");

    horizontalBar.addEventListener("click", function() {
        // Toggle class to show/hide the vertical navigation
        verticalNav.classList.toggle("active");
    });

    const menu = document.getElementsByClassName('menu')[0];
    const nav = document.getElementsByClassName('list')[0];

    menu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    const overlay = document.getElementById('overlay');
    const confirmButton = document.getElementById('confirm-button');
    const cancelButton = document.getElementById('cancel-button');

    // Event listener for confirming deletion
    confirmButton.addEventListener('click', function() {
        const user_d = overlay.dataset.userId; // Corrected variable name
        deleteUser(user_d); // Passing user_d to deleteUser function
        overlay.style.display = 'none';
    });

    // Event listener for canceling deletion
    // cancelButton.addEventListener('click', function() {
    //     overlay.style.display = 'none';
    // });
});

// Function to confirm user deletion
function deleteUserConfirmation(userId) {
    const overlay = document.getElementById('overlay');
    overlay.dataset.userId = userId; // Corrected dataset name
    overlay.style.display = 'block';
}

// Function to delete a user
const deleteUser = async (userId) =>{ // Corrected parameter name
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3005/api/v1/users/${userId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to delete user');
        }

        const data = await response.json();
        alert("User deleted successfully");
        // Optionally refresh the user list after deletion
        showUsers();
    } catch (error) {
        console.error('Error deleting user:', error);
        alert("Failed to delete user. Please try again later.");
    }
}

// Rest of the code remains the same...



// Function to create HTML for a single user
function singleUser(user) {
    const userBox = `<div class="card mt-4 p-3">
        <h4 class="card-title">Name: ${user.username}</h4>
        <div class="card-subtitle text-muted mb-2">
            Email: ${user.email}
        </div>
        <div class="card-text mb-2">
            Joined at: ${user.createdAt}
            <div>
                <a onclick="deleteUserConfirmation('${user._id}')" class="btn btn-danger">Remove</a>
            </div>
        </div>
    </div>`;

    document.getElementsByClassName('container')[0].innerHTML += userBox;
}

// Function to fetch and display users
function showUsers() {
    fetch('http://localhost:3005/api/v1/users/users')
        .then(response => response.json())
        .then(data => {
            const users = data.data;
            users.forEach(user => singleUser(user));
        })
        .catch(error => console.error('Error fetching users:', error));
}

// Function to get the authentication token (replace this with your actual token retrieval logic)
function getAuthToken() {
    // Replace this with your actual token retrieval logic
    return 'your_auth_token';
}

// Initial call to fetch and display users
showUsers();







