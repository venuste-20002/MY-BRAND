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