document.addEventListener('DOMContentLoaded', function() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    console.log(id); // Check if the ID is correctly retrieved from the URL

    let messageData = null;

    const fetchMessage = async (id) => {
        try {
            // Fetch the message data corresponding to the provided ID from the backend
            const response = await fetch(`http://localhost:3005/api/v1/messages/${id}`);
            if (!response.ok) { // Checking if the response is not okay
                throw new Error('Failed to load the message');
            }

            const data = await response.json();
            messageData = data.data;
            displayMessage(messageData);
        } catch (error) {
            console.error('Error fetching message:', error);
            // Handle error appropriately, e.g., display error message to the user
        }
    };

    fetchMessage(id);

    const displayMessage = (message) => {
        console.log(message); // Log message data to ensure it's retrieved correctly

        const allMessage = document.getElementById('display_blog');

        const div = document.createElement('div');
        div.classList.add('message');

        div.innerHTML = `
            <div class="sender">
                <h2>${message.sendmessage}</h2>
            </div>
            <div class="ppp1">
                <p>${message. content}</p>
                <div class="mmm1">
                    <p>${message.updatedAt}</p>
                </div>
            </div>
        `;

        allMessage.appendChild(div);
    };

});

