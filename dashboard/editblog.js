
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
            console.log(blogData)
            displayBlog(blogData); // Pass blogData to displayBlog
        } catch (error) {
            // console.error('Error fetching blog:', error);
        }
    };
    
    fetchBlog(id);
    // `<div ><h1> ${message.sendmessage} </h1> </div>`
    const displayBlog = (blog) => {
        const allBlogs = document.getElementById('display_blogs');
        const blogElement = createBlogElement(blog);
        allBlogs.appendChild(blogElement);
    };
    
    const createBlogElement = (blog) => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');
        blogElement.innerHTML = `
                    <div class="text">
                        <h1>${blog.title}</h1>
                        <h2>${blog.description}</h2>
                        <p class="blog">${blog.content}</p>
                    </div>
                    <div id="rectangle">
                        <img class="profile" src="${blog.profile}" alt="Profile Image">
                    </div>
                    <div class="rectangle1">
                        <button class="edit_button" data-id="${blog.id}" onclick="navigatToEditBlogPage('${blog._id}')">Edit Blog</button>
                    </div>
                `;
        return blogElement;
    };
});


//
// function to navigate to one blog page
const navigatToEditBlogPage = (id)=>{
    window.location.href=`dashedit.html?id=${id}`
}





































// document.addEventListener('DOMContentLoaded', function() {
//     const blogs = JSON.parse(localStorage.getItem('blogs'));
//     console.log(blogs);
//     var all_blogs = document.getElementById('display_blogs');
    
//     blogs.forEach((blog) => {
//         const div = document.createElement('div');
//         console.log(blog)
//         div.innerHTML = `
//             <div class="text">
//                 <h1>${blog.title}</h1>
//                 <h2>${blog.desc}</h2>
//                 <p class="blog">${blog.cont}</p>
//             </div>
//             <div id="rectangle">
//                 <img class="profile" src="${blog.profile}" alt="Profile Image">
//             </div>
//             <div class="rectangle1">
//                 <button class="edit_button" data-id="${blog.id}">Edit Blog</button>
//             </div>
//         `;
//         all_blogs.appendChild(div);
//     });
    
//     let editButtons = document.querySelectorAll('.edit_button');
//     editButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             let blogId = button.getAttribute('data-id');
//             window.location.href = `dashedit.html?id=${blogId}`;
//         });
//     });    

//     let urlParams = new URLSearchParams(window.location.search)
//     let currentUrl = urlParams.get('id')
//     let blog = JSON.parse(localStorage.getItem('blogs'))
//     let currentblog = blog.find((element) => element.id == currentUrl)
//     console.log("blog: ", currentblog)
//     console.log("Id: ", currentUrl)
//     renderblog(currentblog)
//     console.log("-------------------------------------------hero")
    
//     function renderblog(blog){
//         const edit = document.querySelector("a")
//         console.log("blog: ", blog)
//         if (blog) {
            
//             const titleField = document.querySelector(".title")
//             const  descField = document.querySelector(".desc")
//             const contentField = document.querySelector(".cont")
//             const categoryfield = document.querySelector(".category")
//             const profilefield = document.querySelector(".profile")
           
//             titleField.textContent = blog.title
//             descField.textContent = blog.desc
//             contentField.textContent = blog.cont
//             categoryfield.textContent = blog.category
//             profilefield.textContent = blog.profile
            
//             edit.href = `editprofile.dash?id=${blog.id}`
//         }
//         const form = document.querySelector('form');
//         form.addEventListener('submit', (event) => {
//             event.preventDefault()
//             updateBlog(currentblog)
//         })
//     }
// });
