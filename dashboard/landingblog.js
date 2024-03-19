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
    blogElement.classList.add('blog');
    blogElement.innerHTML = `
        <div class="allblog">
            <h2 id="a_title">${blog.title}</h2>
            <div class="desc">
                <p>${blog.desc}</p>
            </div>
            <div class="category">
                <p>${blog.category}</p>
            </div>
            <div>
                <hr style="width: 108%; height: 0.5px; border: none; background-color:black;">
                <div class="icons">
                    <div class="icon1">
                        <i class="fa-solid fa-eye" onclick="navigatToOneBlogPage('${blog._id}')"></i>
                    </div>
                    <div class="icon3">
                        <i class="fa-solid fa-trash" onclick="deleteBlog('${blog._id}')"></i> 
                    </div>
                </div>
            </div>
        </div>`;

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

        if (!response.ok) {
            throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        blogData = data.data;

        // Display the blogs
        displayBlogs();
    } catch (error) {
        console.error("Error fetching blog:", error);
    }
};

// Function to navigate to one blog page
const navigatToOneBlogPage = (id) => {
    window.location.href = `editblog.html?id=${id}`;
};

// Function to delete a blog
const deleteBlog = async (id) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found');
        }
        const response = await fetch(`http://localhost:3005/api/v1/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}` // Include the token in the Authorization header
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete blog');
        }
        fetchBlogs();
    } catch (error) {
        // console.error('Error deleting blog:', error.message);
    }
};



