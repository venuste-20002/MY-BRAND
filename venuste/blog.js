document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    if (!id) {
        console.error('No ID found in the URL parameters');
        return;
    }

    fetchBlog(id);
    
    // Pass id to the commentForm event listener
    commentFormEventListener(id);
});

// Define commentFormEventListener function to handle form submission
const commentFormEventListener = (id) => {
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentToSubmit ={
            name: name2.value,
            email: email.value,
            comment: comment.value,
            id: id // Use the id passed from the outer scope
        };
        console.log(commentToSubmit);

        fetch(`http://localhost:3005/api/v1/comments/create`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentToSubmit)
        })
        .then((response) => {
            return response.json();
        })
        .then(data => {
            console.log(data.message);
            confirm('Comment Was Successfully Added', 3000, 'green');
            name2.value= "";
            email.value= "";
            comment.value= "";
            blogComments(id);

        })
        .catch(e => confirm(e+ " try again", 3000, 'red')); 
    });
};

const fetchBlog = async (id) => {
    try {
        const response = await fetch(`http://localhost:3005/api/v1/blogs/${id}`);
        if (!response.ok) { // Check if response is successful
            throw new Error('Failed to load the blog');
        }

        const data = await response.json();
        const blogData = data.data;

        // Pass id as currentBlogId
        displayBlog(blogData.blog, id); // Pass blogData and id to displayBlog
    } catch (error) {
        // console.error('Error fetching blog:', error);
    }
};

const displayBlog = (blog, id) => {
    const allBlogs = document.getElementById('display_blog');
    const blogElement = createBlogElement(blog);
    allBlogs.appendChild(blogElement); 
    // Call blogComments with the id
    blogComments(id);
};

const createBlogElement = (blog) => {
    const blogElement = document.createElement('div');
    blogElement.classList.add('blog');
    blogElement.innerHTML = `
        <p class="category" style="color:#4E7598; font-weight: bold; ">${blog.title}</p>
        <p class="date">${blog.createdAt}</p>
        <p class="writer"><strong>By</strong> <span style="color: #4E7598; font-weight: bold;">${blog.author}</span>, Executive Editor, RemakTek Python in AI</p>
        <img class="blog_image" src="${blog.image}">
        <p class="blog_content">${blog.content}</p>
        <hr style="margin: 7vh 0;">
    `;
    return blogElement;
};

const name2 = document.getElementById("name");
const email = document.getElementById("email");
const comment = document.getElementById("comment");
const commentForm = document.getElementById('commentForm');

const fetchAndDisplayComments = async (id) => {
    try {
        console.log(id); // Log the id
        const commentSection = document.getElementsByClassName('comment-widgets')[0];
        if (commentSection.hasChildNodes()) commentSection.innerHTML = '';
        const response = await fetch(`http://localhost:3005/api/v1/comments/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        console.log(data.data);
        const comments = data.data;

        comments.forEach(comment => {
            const singleComment = `<div class="d-flex flex-row comment-row">
            <div class="p-2"><span class="round"><img src="../photos//flower.jfif" alt="user" width="50"></span></div>
            <div class="comment-text w-100">
                <h5>${comment.name}</h5>
                <span class="date">${comment.email}</span>
                <div class="comment-footer">
                    <span class="date">${comment.createdAt.toLocaleString()}</span>
                        <span class="action-icons">
                            <a href="#" data-abc="true"><i class="fa fa-heart"></i></a>
                        </span>
                </div>
                <p class="m-b-5 m-t-10">${comment.comment}</p>
            </div>
            </div>`;

            commentSection.innerHTML += singleComment;
        });
    } catch (error) {
        console.error('Error fetching and displaying comments:', error);
    }
};

// Call fetchAndDisplayComments with the appropriate id
fetchAndDisplayComments(id);
