

// Define showError function
function showError(errorMessage) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = errorMessage;
    // You might want to add additional styling or logic here to display the error message to the user.
}

// Add event listener for DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const registerUser = document.getElementById('registerUser');

    registerUser.addEventListener('submit', async (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // input of the  fetch
        if (!username || !email || !password) {
            showError('Please enter both username, email, and password.');
            return;
        }

        try {
            console.log(username)
            const response = await fetch('http://localhost:3005/api/v1/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password})
            });

            if (!response.ok) { 
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to register');
            }

            const data = await response.json();
            const contactsData = data.data;
            console.log(contactsData);

            window.location.href = 'log.html';
        } catch (error) {
            showError(error.message || 'Failed to register. Please try again.');
        }
    });
});





