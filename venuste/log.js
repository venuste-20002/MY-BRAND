// function validateForm() {
//     const name = document.getElementById("name").value.trim();
//     const password = document.getElementById("password").value.trim();

//     document.getElementById("nameError").innerText = '';
//     document.getElementById("passwordError").innerText = '';

//     document.getElementById("name").classList.remove('error');
//     document.getElementById("password").classList.remove('error');


//     // Validate email (name)
//     if (!/\S+@\S+\.\S+/.test(name)) {
//         document.getElementById('nameError').innerText = '';
//         document.getElementById('name').classList.add('error'); // Add error class
//         return false;
//     }

//     // Validate password
//     if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/.test(password)) {
//         document.getElementById('passwordError').innerText = '';
//         document.getElementById('password').classList.add('error');
//         return false;
//     }

//     return true;
// }


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorContainer = document.getElementById('errorContainer');
   
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // console.log('Form submitted with values:', {username,  email, password });
 
        // input of the  fetch
        if (!email || !password) {
            showError('Please enter both email, and password.');
            return;
        }

        try {
            console.log(email)
            const response = await fetch('http://localhost:3005/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password })
            });

            console.log('Response from server:', response);

            if (!response) { 
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to register');
            }

            const {token , role} = await response.json();
            console.log("token:",token)
            console.log("role:",role)
            localStorage.setItem('token', token) 
            if(role === 'admin'){
                window.location.href = '/venuste/dashboard/landingblog.html';
            }else{
                window.location.href = 'index.html';
            }
        
            
        } catch (error) {
            console.error('Error during registration:', error);
            showError(error.message || 'Failed to register. Please try again.');
        }

    });

    function showError(message) {
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
    }
});
