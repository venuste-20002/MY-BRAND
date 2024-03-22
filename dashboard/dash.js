document.addEventListener("DOMContentLoaded", function() {
    const horizontalBar = document.getElementById("horizontalBar");
    const verticalNav = document.querySelector(".vertical .list");

    horizontalBar.addEventListener("click", function() {
        // Toggle class to show/hide the vertical navigation
        verticalNav.classList.toggle("active");
    });
});



let blogData = [];

document.addEventListener('DOMContentLoaded', async () => {
  fetchBlogs();
});




async function submitForm(event) {
    try {
        event.preventDefault();

        const title = document.getElementById('a_title').value;
        const desc = document.getElementById('a_desc').value;
        const category = document.getElementById('a_category').value;
        const content = document.getElementById('a_content').value;

        const Blog = {
            title: title,
            desc: description,
            content: content
        };
        const token = localStorage.getItem("token");
        if (!token) {
            console.log('Token not found in local storage');
        }

        // console.log(token)

        console.log(response);

     
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.blog || 'Failed to update blog');
        }

        window.location.href = "landingblog.html";

    } catch (error) {
        
        // console.error('Error updating blog:', error.message);
    }
}
































































// var blogs = [];

// if (localStorage.getItem('blogs')) {
//     blogs = JSON.parse(localStorage.getItem('blogs'))

// } else{
//     blogs = [];
// }


// var uploadedImage;

// var profile = document.getElementById('cover')
// profile.addEventListener('change', (e) => {

//     const file = e.target.files[0]
//     const reader = new FileReader();

//     reader.onload = (e) => {
//         uploadedImage = e.target.result;
//         console.log(uploadedImage)
//     }
//     reader.readAsDataURL(file);
// })




// function submitForm(event){

//     event.preventDefault();
//     console.log("submitted")
   
//     var title = document.getElementById('a_title');
//     var desc = document.getElementById('a_desc');
//     var cont = document.getElementById('a_content');
//     var category = document.getElementById('a_category');
//     var profile = document.getElementById('cover')

//     console.log('clicked')
//     blog = {
//         title: title.value,
//         desc: desc.value,
//         cont: cont.value,
//         category: category.value,
//         profile:uploadedImage,
//         id:Date.now()
//     }
//     blogs.push(blog);

//     localStorage.setItem('blogs', JSON.stringify(blogs))
  
// }





