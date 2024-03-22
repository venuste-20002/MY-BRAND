// // Define a global variable to store the reply forms
// let replyForms = [];

// document.addEventListener("DOMContentLoaded", function () {
//     const commentForm = document.getElementById("commentForm");
//     const commentContainer = document.getElementById("commentContainer");
//     let comments = JSON.parse(localStorage.getItem("comments")) || [];

//     // Display existing comments from local storage
//     displayComments();

//     commentForm.addEventListener("submit", function (event) {
//         event.preventDefault();

//         // Get form values
//         const name = document.getElementById("name").value;
//         const email = document.getElementById("email").value;
//         const commentText = document.getElementById("comment").value;
//         const date = new Date().toLocaleDateString();

//         // Create new comment object
//         const newComment = {
//             name: name,
//             email: email,
//             comment: commentText,
//             date: date,
//             likes: 0  // Initialize likes count to 0
//         };

//         // Add new comment to the comments array
//         comments.push(newComment);

//         // Save comments to local storage
//         localStorage.setItem("comments", JSON.stringify(comments));

//         // Clear form fields
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("comment").value = "";

//         // Display the new comment
//         displayComments();
//     });

//     function displayComments() {
//         commentContainer.innerHTML = "";
//         comments.forEach((comment, index) => {
//             const newCommentDiv = document.createElement("div");
//             newCommentDiv.classList.add("card", "comment-widgets", "m-b-20"); // Add card class
//             newCommentDiv.innerHTML = `
//                 <div class="card-body">
//                     <h4 class="card-title">Recent Comments</h4>
//                     <h6 class="card-subtitle">Latest Comments section by users</h6>
//                 </div>

//                 <div class="comment-widgets m-b-20">
//                     <div class="d-flex flex-row comment-row">
//                         <div class="comment-text w-100">
//                             <h5>${comment.name}</h5>
//                             <div class="comment-footer">
//                                 <span class="date">${comment.date}</span>
//                                 <span class="label label-info">Pending</span>
//                                 <span class="action-icons">
//                                     <a href="#" data-abc="true" onclick="editComment(${index})"><i class="fa fa-pencil"></i></a>
//                                     <a href="#" data-abc="true"><i class="fa fa-rotate-right"></i></a>
//                                     <a href="#" data-abc="true" onclick="likeComment(${index})"><i class="fa fa-heart"></i> <span id="likeCount_${index}">${comment.likes}</span></a>
//                                     <a href="#" data-abc="true" onclick="replyComment(${index})"><i class="fa fa-reply"></i></a>
//                                 </span>
//                             </div>
//                             <p class="m-b-5 m-t-10">${comment.comment}</p>
//                             <div id="replyForm_${index}" style="display: none;">
//                                 <form onsubmit="submitReply(${index}); return false;">
//                                     <input type="text" id="replyText_${index}" placeholder="Enter your reply" required>
//                                     <button type="submit">Reply</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             `;
//             commentContainer.appendChild(newCommentDiv);
//         });
//     }

//     // Function to edit a comment
//     window.editComment = function(index) {
//         const commentText = comments[index].comment;
//         const newCommentText = prompt("Edit your comment:", commentText);
//         if (newCommentText !== null) {
//             comments[index].comment = newCommentText;
//             localStorage.setItem("comments", JSON.stringify(comments));
//             displayComments();
//         }
//     };

//     // Function to like a comment
//     window.likeComment = function(index) {
//         // Implement your like functionality here
//         console.log("Liking comment at index:", index);
//         // Update like count in UI
//         const likeCountElement = document.getElementById(`likeCount_${index}`);
//         comments[index].likes++;
//         likeCountElement.innerText = comments[index].likes;
//         // Save updated comments to local storage
//         localStorage.setItem("comments", JSON.stringify(comments));
//     };

//     // Function to show reply form
//     window.replyComment = function(index) {
//         const replyForm = document.getElementById(`replyForm_${index}`);
//         if (replyForm.style.display === "none") {
//             // Hide all other reply forms before showing this one
//             replyForms.forEach(form => (form.style.display = "none"));
//             replyForm.style.display = "block";
//             document.getElementById(`replyText_${index}`).focus(); // Focus on the reply input field
//         } else {
//             replyForm.style.display = "none";
//         }
//     };

//     // Function to submit a reply
//     window.submitReply = function(index) {
//         const replyText = document.getElementById(`replyText_${index}`).value;
//         if (replyText.trim() === "") {
//             alert("Please enter a valid reply.");
//             return;
//         }
//         const newReply = {
//             name: "Your Name", // You may customize this
//             reply: replyText,
//             date: new Date().toLocaleDateString()
//         };
//         // Add the reply to the corresponding comment
//         comments[index].replies = comments[index].replies || [];
//         comments[index].replies.push(newReply);
//         // Save updated comments to local storage
//         localStorage.setItem("comments", JSON.stringify(comments));
//         // Reset and hide the reply form
//         document.getElementById(`replyText_${index}`).value = "";
//         document.getElementById(`replyForm_${index}`).style.display = "none";
//         // Refresh comments to display the new reply
//         displayComments();
//     };
// });











document.addEventListener('DOMContentLoaded', () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    console.log(id);
    
    let blogData; // Define blogData variable
    
    const fetchBlog = async (id) => {
        try {
            const response = await fetch(`http://localhost:3005/api/v1/blogs/${id}`);
            if (!response.ok) { // Check if response is successful
                throw new Error('Failed to load the blog');
            }
    
            const data = await response.json();
            blogData = data.data;
            
            displayBlog(blogData); // Pass blogData to displayBlog
        } catch (error) {
            // console.error('Error fetching blog:', error);
        }
    };
    
    fetchBlog(id);
    // `<div ><h1> ${message.sendmessage} </h1> </div>`
    const displayBlog = (blog) => {
        const allBlogs = document.getElementById('display_blog');
        const blogElement = createBlogElement(blog);
        allBlogs.appendChild(blogElement);
    };
    
    const createBlogElement = (blog) => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');
        blogElement.innerHTML = `
            <p class="category" style="color:#4E7598; font-weight: bold; ">${blog.title}</p>
            <p class="date">${blog.createdAt}</p>
            <p class="writer"><strong>By</strong> <span style="color: #4E7598; font-weight: bold;">${blog.author}</span>, Executive Editor, RemakTek Python in AI</p>
            <img class="blog_image" src="../photos/food.jpg">
            <p class="blog_content">${blog.content}</p>
            <hr style="margin: 7vh 0;">
        `;
        return blogElement;
    };
});




document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');

    commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const comment = document.getElementById("comment").value.trim();
        const blogId = document.getElementById("blogId").value.trim(); // Retrieve blogId

        // input of the  fetch
        if (!name || !email || !comment || !blogId) {
            showError('Please enter both name, email, and comment.');
            return;
        }

        try {
            console.log(name)
            const response = await fetch('http://localhost:3005/api/v1/comments/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, comment, blogId })
            });

            if (!response.ok) { 
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to create');
            }

            const data = await response.json();
            const commentData = data.data;
            console.log(commentData);

            window.location.href = 'log.html';
        } catch (error) {
            showError(error.message || 'Failed to create. Please try again.');
        }
    });
});
