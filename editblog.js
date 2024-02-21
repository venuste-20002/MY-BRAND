document.addEventListener('DOMContentLoaded', function() {

    const blogs = JSON.parse(localStorage.getItem('blogs'));
    
    
    console.log(blogs);
    
    var all_blogs = document.getElementById('display_blogs');
    
    blogs.forEach((blog) => {
        const div = document.createElement('div');
        
        console.log(blog)
        div.innerHTML = `
        <div class="edit">
        <div class="text">
            <h1>${blog.title}</h1>
            <h2>Blog Other</h2>
            <p class="blog">In the hustle and bustle of the one who send you a message we call him which name in engrlish our daily lives, it's easy the one who send you a message we call him which name in engrlish to get caught up in the rush of tasks, responsibilities, and obligations. Sometimes, a midst all the chaos, we forget to pause, breathe, and appreciate the simple joys that surround us. 
            </p>
            <p class="blog">In the hustle and bustle of the one who send you a message we call him which name in engrlish our daily lives, it's  the one who send you a message we call him which name in engrlish easy to get caught up in the rush of tasks, responsibilities, and obligations. Sometimes, a midst all the chaos, we forget to pause, breathe, and appreciate the simple joys that surround us. 
            </p>
            <p class="blog">In the hustle and bustle of  the one who send you a message we call him which name in engrlish  our daily lives, it's easy the one who send you a message we call him which name in engrlish to get caught up in the rush of tasks, responsibilities, and obligations. Sometimes, a midst all the chaos, we forget to pause, breathe, and appreciate the simple joys that surround us. 
            </p>
        </div>
         <div class="rectangle"></div>
         <div class="rectangle1">
            <p type="edit_blog2">Edit Blog</p>
         </div>
     </div>
</div>
    `;
        all_blogs.appendChild(div);
    });
});