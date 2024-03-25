// Define showError function
function showError(errorMessage) {
    const errorElement = document.getElementById('error');
    errorElement.textContent = errorMessage;
}

document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('form2');
});

const submitForm = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
        const title = document.getElementById("a_title").value.trim();
        const description = document.getElementById("a_desc").value.trim();
        const category = document.getElementById("a_category").value.trim();
        const content = document.getElementById("a_content").value.trim();
        const coverInput = document.getElementById("cover");
        const coverFile = coverInput.files[0];

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('category', category);
        formData.append('content', content);
        formData.append('tags', 'hello');
        formData.append('image', coverFile);

        const token = localStorage.getItem("token");
        if (!token) {
            console.log('Token not found in local storage');
        }

        const response = await fetch('http://localhost:3005/api/v1/blogs/create', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData
        });

        console.log(await response.json());
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to create blog');
        }

        window.location.href = 'landingblog.html'; // Redirect to landingblog.html after successful blog creation
    } catch (error) {
        // If there's an error during the request, display the error message
        console.error(error.message || 'Failed to create blog. Please try again.');
        showError(error.message || 'Failed to create blog. Please try again.');
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





