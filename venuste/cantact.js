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






// Define showError function
function showError(errorMessage) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = errorMessage;
}
   
document.addEventListener('DOMContentLoaded', () => {
    const sendMessageForm = document.getElementById('sendMessageForm');

    // sendMessageForm.addEventListener('submit', async (event) => {
        
    // });
});


async function submitForm(event){

    event.preventDefault(); 
        const senderName = document.getElementById("senderName").value.trim();
        const email = document.getElementById("email").value.trim();
        const messageContent = document.getElementById("messageContent").value.trim();

        // Input validation
        if (!senderName || !email || !messageContent) {
            // showError('Please enter sender name, recipient email, and message content.');
            console.log('message not sent')
            return;
        }

        try {
            // Send POST request to local API endpoint
            const response = await fetch('http://localhost:3005/api/v1/messages/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sendmessage: senderName, email: email, content: messageContent })
            });

            if (!response.ok) {
                // If response is not ok, throw an error
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send message');
            }

            const data = await response.json ();
            const messagesData = data.data
            console.log (messagesData)

            // Optionally handle successful message sending, e.g., redirect or display success message
            window.location.href = 'index.html';
        } catch (error) {
            // If there's an error during the request, display the error message
            // showError(error.message || 'Failed to send message. Please try again.');

            console.log(error.message)
        }

}