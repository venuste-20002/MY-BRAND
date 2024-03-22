// document.addEventListener('DOMContentLoaded', function() {
    
//     const urlParams = new URLSearchParams(window.location.search);
//     const id = urlParams.get('id');

//     console.log(id); // Check if the ID is correctly retrieved from the URL

//     let messageData = null;

//     const fetchMessage = async (id) => {
//         try {
//             // Fetch the message data corresponding to the provided ID from the backend
//             const response = await fetch(`http://localhost:3005/api/v1/messages/${id}`);
//             if (!response.ok) { // Checking if the response is not okay
//                 throw new Error('Failed to load the message');
//             }

//             const data = await response.json();
//             messageData = data.data;
//             displayMessage(messageData);
//         } catch (error) {
//             console.error('Error fetching message:', error);
//             // Handle error appropriately, e.g., display error message to the user
//         }
//     };

//     fetchMessage(id);

//     const displayMessage = (message) => {
//         console.log(message); // Log message data to ensure it's retrieved correctly

//         const allMessage = document.getElementById('display_blog');

//         const div = document.createElement('div');
//         div.classList.add('message');

//         div.innerHTML = `
//             <div class="sender">
//                 <h2>${message.sendmessage}</h2>
//             </div>
//             <div class="ppp1">
//                 <p>${message. content}</p>
//                 <div class="mmm1">
//                     <p>${message.updatedAt}</p>
//                 </div>
//             </div>
//         `;

//         allMessage.appendChild(div);
//     };

// });

document.addEventListener("DOMContentLoaded", function() {
    const horizontalBar = document.getElementById("horizontalBar");
    const verticalNav = document.querySelector(".vertical .list");

    horizontalBar.addEventListener("click", function() {
        // Toggle class to show/hide the vertical navigation
        verticalNav.classList.toggle("active");
    });
});

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

        // Clear the existing content of the container
        allMessage.innerHTML = '';

        const div = document.createElement('div');
        div.classList.add('card', 'mt-4', 'p-3');

        div.innerHTML = `
            <h2 class="cart-title">${message.sendmessage}</h2>
            <div class="card-subtitle text-muted mb-2">
                ${message.email}
            </div>
            <div class="dart-text mb-2">
                <p>${message.content}</p>
                <div class="mmm1">
                    <p>${message.updatedAt}</p>
                </div>
            </div>
        `;

        allMessage.appendChild(div);
    };

});


