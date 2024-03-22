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
        deleteUser(overlay.dataset.userId, getAuthToken());
        overlay.style.display = 'none';
    });

    // Event listener for canceling deletion
    cancelButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});

// Function to confirm user deletion
function deleteUserConfirmation(userId) {
    const overlay = document.getElementById('overlay');
    overlay.dataset.userId = userId;
    overlay.style.display = 'block';
}

// Function to delete a user
function deleteUser(userId, token) {
    console.log("Deleting user with ID:", userId);

    fetch(`http://localhost:3005/api/v1/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Failed to delete user');
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        alert("User deleted successfully");
        // Optionally refresh the user list after deletion
        showUsers();
    })
    .catch(error => {
        console.error('Error deleting user:', error);
        alert("Failed to delete user. Please try again later.");
    });
}

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
                <a onclick="" class="btn btn-primary">Activities</a>
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
            console.log(data);
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







