let blogId = null;

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    try {
        const response = await fetch(`http://localhost:3005/api/v1/blogs/${id}`);
        if (!response.ok) {
            throw new Error('Failed to load the blog');
        }

        blogId = id;

        const responseData = await response.json();
        const blogData = responseData.data; // Assuming data is nested under 'data' property
        console.log(blogData); // Check if data is fetched correctly

        // Populate form fields with fetched data
        document.getElementById('a_title').value = blogData.title || ''; // Handle undefined or null values
        document.getElementById('a_desc').value = blogData.other || '';
        document.getElementById('a_category').value = blogData.category || '';
        document.getElementById('a_content').value = blogData.content || '';
        // Add logic to set the cover image if needed
    } catch (error) {
        // console.error('Error fetching blog:', error);
    }
});





async function submitForm(event) {
    try {
        event.preventDefault();

        const title = document.getElementById('a_title').value;
        const desc = document.getElementById('a_desc').value;
        const category = document.getElementById('a_category').value;
        const content = document.getElementById('a_content').value;

        const updateBlog = {
            title: title,
            description: desc,
            content: content,
            tags: ['hello'],
        };

        console.log("----------------------skjdvk")
        const token = localStorage.getItem("token");
        if (!token) {
            console.log('Token not found in local storage');
        }

        // console.log(token)
       
        const response = await fetch(`http://localhost:3005/api/v1/blogs/${id}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBlog)
        });

        console.log(await response.json());

     
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.blog || 'Failed to update blog');
        }

        window.location.href = "landingblog.html";

    } catch (error) {
        
        // console.error('Error updating blog:', error.message);
    }
}








        
 























// const urlParams = new URLSearchParams(window.location.search)

// const id = urlParams.get('id')

// console.log(id)


    
// const all_blogs = JSON.parse(localStorage.getItem('blogs'));
// console.log(all_blogs)

// const blog_index = all_blogs.findIndex(obj => obj.id == id)


// console.log(blog_index +' ________________________- ')

// // console.log(all_blogs[blog_index])

// const blog = all_blogs[blog_index];
// console.log(blog)

// console.log(blog.title + ' what aauuup[   ');


// document.addEventListener('DOMContentLoaded', () => {

//     // console.log(blog + '___________________________________')    
   
//     var title = document.getElementById('a_title');
//     var desc = document.getElementById('a_desc');
//     var cont = document.getElementById('a_content');
//     var category = document.getElementById('a_category');
//     var profile = document.getElementById('cover')
//     // console.log(title)


//     title.value = blog.title;
//     desc.value = blog.desc;
//     cont.value = blog.cont;
//     category.value = blog.category;
// })



// function submitForm(event){

//     event.preventDefault();
//     console.log("editing______")

    
//     var title = document.getElementById('a_title');
//     var desc = document.getElementById('a_desc');
//     var cont = document.getElementById('a_content');
//     var category = document.getElementById('a_category');
//     var profile = document.getElementById('cover')

//     console.log('clicked')
//     const edited_blog = {
//         title: title.value,
//         desc: desc.value,
//         cont: cont.value,
//         category: category.value,
//         profile:profile.files[0].name,
//         id:id
//     }

//     const index = all_blogs.findIndex(obj => obj.id == edited_blog.id);
//     console.log(index)

//     all_blogs[index] = edited_blog;

//     localStorage.setItem('blogs', JSON.stringify(all_blogs))
  
// }


















