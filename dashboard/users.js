// document.addEventListener('DOMContentLoaded', function() {
//     const users = JSON.parse(localStorage.getItem('users'));
//     const all_users = document.getElementById('display_users');

//     function saveUsersToLocalStorage(users) {
//         localStorage.setItem('users', JSON.stringify(users));
//     }

//     users.forEach((user) => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//             <div class="contact">
//                 <h2>${user.name}</h2>
//                 <div class="rectangle">
//                     <p>User ID</p>
//                     <p>${user.id}</p>
//                 </div>
//                 <div class="icons">
//                     <div class="icon1">
//                         <?xml version="1.0" ?><svg  height="25px" data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M109.5,19.05,109,18.5A64.5,64.5,0,0,0,95.38,8.24a63,63,0,0,0-11.25-5,60.67,60.67,0,0,0-7.63-2A63.83,63.83,0,0,0,27.26,11.62a65.2,65.2,0,0,0-8.67,7.32,64.25,64.25,0,0,0-9.67,12.5A62.83,62.83,0,0,0,4.55,40.3,64,64,0,0,0,.71,73.52,62.5,62.5,0,0,0,2.2,80.67,63.86,63.86,0,0,0,18.5,109c.09.1.44.46.55.55a64,64,0,0,0,11.2,8.85,64.23,64.23,0,0,0,14,6.54,61.14,61.14,0,0,0,6.18,1.67,64.37,64.37,0,0,0,28-.21,65.1,65.1,0,0,0,8.32-2.55,63.63,63.63,0,0,0,13.11-6.86A63.82,63.82,0,0,0,128,64a63.86,63.86,0,0,0-5.34-25.59,65.32,65.32,0,0,0-3.16-6.25,63.92,63.92,0,0,0-4.59-6.89A62.78,62.78,0,0,0,109.5,19.05ZM64,4a59.79,59.79,0,0,1,41,16.21L20.21,105A60,60,0,0,1,64,4Zm0,120a59.79,59.79,0,0,1-41-16.21L107.79,23A60,60,0,0,1,64,124Z"/></svg>
//                     </div>
//                     <div class="icon2">
//                         <svg height="25px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
//                             <title/>
//                             <path d="M90,24H72V18A18.02,18.02,0,0,0,54,0H42A18.02,18.02,0,0,0,24,18v6H6A6,6,0,0,0,6,36h6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V36h6a6,6,0,0,0,0-12ZM36,18a6.0078,6.0078,0,0,1,6-6H54a6.0078,6.0078,0,0,1,6,6v6H36ZM72,84H24V36H72Z"/>
//                         </svg>
//                     </div>
//                 </div>
//             </div>
//         `;
//         all_users.appendChild(div);

//         const icon1 = div.querySelector('.icon1');
//         icon1.addEventListener('click', function(event) {
//             user.disabled = !user.disabled; // Toggle disabled state
            
//             saveUsersToLocalStorage(users); // Save to local storage
            
//             if (user.disabled) {
//                 div.classList.add('disabled'); // Apply disabled class
//             } else {
//                 div.classList.remove('disabled'); // Remove disabled class
//             }
//         });
    
//         const icon2 = div.querySelector('.icon2');
//         icon2.addEventListener('click', function(event) {
//             if (confirm('Are you sure you want to delete this contact?')) {
//                 const index = users.findIndex(c => c.id === user.id);
//                 if (index !== -1) {
//                     users.splice(index, 1);
//                     saveUsersToLocalStorage(users);
//                     div.remove();
//                 }
//             }
//         });
//     });
// });







let usersData = [];

// Fetch users from the backend when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
});

// Function to display users
const displayUsers = () => {
    const allUsers = document.getElementById('display_users');
    allUsers.innerHTML = '';

    if (!Array.isArray(usersData) || usersData.length === 0) {
        allUsers.innerHTML = 'You do not have any users yet.';
        return;
    }

    usersData.forEach(user => {
        const userElement = createUserElement(user);
        allUsers.appendChild(userElement);
    });
};

// Function to create a user element
const createUserElement = (user) => {
    const userElement = document.createElement('div');
    userElement.classList.add('user');

    userElement.innerHTML = `
                  <div class="contact">
                    <h2>${user.username}</h2>
                    <div class="rectangle">
                        <p>User ID</p>
                        <p>${user._ID}</p>
                    </div>
                    <div class="icons">
                        <div class="icon1">
                            <?xml version="1.0" ?><svg  height="25px" data-name="Слой 1" id="Слой_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M109.5,19.05,109,18.5A64.5,64.5,0,0,0,95.38,8.24a63,63,0,0,0-11.25-5,60.67,60.67,0,0,0-7.63-2A63.83,63.83,0,0,0,27.26,11.62a65.2,65.2,0,0,0-8.67,7.32,64.25,64.25,0,0,0-9.67,12.5A62.83,62.83,0,0,0,4.55,40.3,64,64,0,0,0,.71,73.52,62.5,62.5,0,0,0,2.2,80.67,63.86,63.86,0,0,0,18.5,109c.09.1.44.46.55.55a64,64,0,0,0,11.2,8.85,64.23,64.23,0,0,0,14,6.54,61.14,61.14,0,0,0,6.18,1.67,64.37,64.37,0,0,0,28-.21,65.1,65.1,0,0,0,8.32-2.55,63.63,63.63,0,0,0,13.11-6.86A63.82,63.82,0,0,0,128,64a63.86,63.86,0,0,0-5.34-25.59,65.32,65.32,0,0,0-3.16-6.25,63.92,63.92,0,0,0-4.59-6.89A62.78,62.78,0,0,0,109.5,19.05ZM64,4a59.79,59.79,0,0,1,41,16.21L20.21,105A60,60,0,0,1,64,4Zm0,120a59.79,59.79,0,0,1-41-16.21L107.79,23A60,60,0,0,1,64,124Z"/></svg>
                        </div>
                        <div class="icon2" data-user-id="${user._id}">
                             <svg height="25px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                              <title/>
                              <path d="M90,24H72V18A18.02,18.02,0,0,0,54,0H42A18.02,18.02,0,0,0,24,18v6H6A6,6,0,0,0,6,36h6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V36h6a6,6,0,0,0,0-12ZM36,18a6.0078,6.0078,0,0,1,6-6H54a6.0078,6.0078,0,0,1,6,6v6H36ZM72,84H24V36H72Z"/>
                           </svg>
                        </div>
                        </div>
                    </div>
                </div>
    `;

    // Add event listener for deleting user
    const deleteButton = userElement.querySelector('.icon2');
    deleteButton.addEventListener('click', async () => {
        const userId = deleteButton.dataset.userId;
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
            const response = await fetch(`http://localhost:3005/api/v1/users/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                }
            });

            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Failed to delete user');
            }

            // Refresh users after deleting
            fetchUsers();
        } catch (error) {
            console.log('Error deleting user:', error.message);
        }
    });

    return userElement;
};

// Function to fetch users from the backend
const fetchUsers = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found');
        }

        const response = await fetch('http://localhost:3005/api/v1/users/users', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        // Check if the response is successful

        // Extract users data from the response
        const data = await response.json();
        usersData = data.data;

        // Display the users
        displayUsers();
    } catch (error) {
        // console.error('Error while fetching users:', error);
    }
};


fetchUsers();



