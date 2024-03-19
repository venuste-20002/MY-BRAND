// Initialize blogData as an empty array
let blogData = [];

// Fetch blogs from the backend when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchBlogs();
});

// Function to display blogs
const displayBlogs = () => {
    const allBlogs = document.getElementById('display_blogs');
    allBlogs.innerHTML = '';
    // console.log(blogData);

    if (!Array.isArray(blogData) || blogData.length === 0) {
        allBlogs.innerHTML = 'You do not have any blog yet.';
        return;
    }

    blogData.forEach(blog => {
        const blogElement = createBlogElement(blog);
        allBlogs.appendChild(blogElement);
    });
};

// Function to create a blog element
const createBlogElement = (blog) => {
    const blogElement = document.createElement('div');
    blogElement.classList.add('blog_display');
    blogElement.innerHTML = `

    <div class="blog_box-1">
    <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
    </div>
    <hr style="width: 100%; height: 2px; border: none; background-color: black;">
    <h2 id="single_blog_title">${blog.title}</h2>lkj
    <p id="blog_content">${blog.description}</p>
    <div class="read_more">
        <a href="/blog.html" id="blog_link">Read More</a>
    </div>
    <div class="interactions">
        <div class="likes">
            <a href="#" data-abc="true"><i class="fa fa-heart"></i></a>
        </div>
        <div class="likes-count">Likes: <span class="like-count">0</span></div>
        <div class="comments">Comment: 5</div>
    </div>
    `;

    blogElement.addEventListener('click', () => {
        console.log('blog-clidke');
        console.log(blog._id)
        const blog1 = blog._id;
        window.location.href = `blog.html?id=${blog1}`;
    })

    return blogElement;
};

// Function to fetch blogs from the backend
const fetchBlogs = async () => {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            throw new Error('Token not found');
        }

        const response = await fetch(`http://localhost:3005/api/v1/blogs/all`, {
            headers: {
                'Authorization': token
            }
        });


        // console.log(await response.json())

        // if (!response.ok) {
        //     throw new Error('Failed to fetch blogs');
        // }

        const data = await response.json();
        blogData = data.data;

        // Display the blogs
        displayBlogs();
    } catch (error) {
        // console.error("Error fetching blog:", error);
    }
    
};









//     // Add event listener for deleting contact
//     const deleteButton = contactElement.querySelector('.icon2');
//     deleteButton.addEventListener('click', async () => {
//         const contactId = deleteButton.dataset.contactId;
//         try {
//             // Send a DELETE request to the backend API
//             const response = await fetch(`http://localhost:3005/api/v1/messages/${contactId}`, {
//                 method: 'DELETE'
//             });

//             // Check if the response is successful
//             if (!response.ok) {
//                 throw new Error('Failed to delete contact');
//             }

//             // Refresh contacts after deleting
//             fetchContacts();
//         } catch (error) {
//             console.log('Error deleting contact:', error.message);
//         }
//     });
    

//     return contactElement;
// };

// // Function to fetch contacts from the backend
// const fetchContacts = async () => {
//     try {
//         // Fetch contacts from the backend API
//         const response = await fetch('http://localhost:3005/api/v1/messages/all');

//         // Check if the response is successful

//         // Extract contacts data from the response
//         const data = await response.json();
//         contactsData = data.data;

//         // Display the contacts
//         displayContacts();
//     } catch (error) {
//         console.error('Error while fetching contacts:', error);
//     }
// };
