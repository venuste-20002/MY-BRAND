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

const menu = document.getElementsByClassName('menu')[0]
const navlist = document.getElementsByClassName(' navlist')[0]

menu.addEventListener('click', () => {
    navlist.classList.toggle('active')
})

const buttons = document.querySelectorAll("[data-carousel-Button]")
console.log("hello")
console.log(buttons)
buttons.forEach((button) => {
    button.addEventListener('click', ()=> {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")


        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if (newIndex < 0) newIndex = slides.children.length - 1 
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true

        delete activeSlide.dataset.active


    } )
    
});
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
                window.location.href = '/dashboard/landingblog.html';
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
