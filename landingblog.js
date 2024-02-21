document.addEventListener('DOMContentLoaded', function() {

const blogs = JSON.parse(localStorage.getItem('blogs'));


console.log(blogs);

var all_blogs = document.getElementById('display_blogs');

function onEdit(title) {
    
    localStorage.setItem('blog_to_edit', JSON.stringify(title))
    window.location('dash.html')
}

blogs.forEach((blog) => {
    const div = document.createElement('div');
    
    
    console.log(blog)
    div.innerHTML = `
    <div class="allblog">
    <h2  id="a_title"> ${blog.title} </h2>
    <div class="desc">
    <p>${blog.desc} </p>
    </div>
    <div class="category">
    <p>${blog.category}</p>
    </div>
    <div>
    <hr style="width: 108%; height: 0.5px; border: none; background-color:black;">
    <div id='icon1'>
    <?xml version="1.0" ?><svg height="24px" class="feather feather-eye" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    </div>
  
    <div id="icon3">
        <?xml version="1.0" ?><svg height="20px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title/><path d="M90,24H72V18A18.02,18.02,0,0,0,54,0H42A18.02,18.02,0,0,0,24,18v6H6A6,6,0,0,0,6,36h6V90a5.9966,5.9966,0,0,0,6,6H78a5.9966,5.9966,0,0,0,6-6V36h6a6,6,0,0,0,0-12ZM36,18a6.0078,6.0078,0,0,1,6-6H54a6.0078,6.0078,0,0,1,6,6v6H36ZM72,84H24V36H72Z"/></svg>
    </div>
    </div>
`;

let icon = document.createElement('div')

icon.addEventListener('click', () => {
    onEdit(blog.title)
}) 
icon.innerHTML = `<?xml version="1.0" ?><svg height="20px" version="1.1" viewBox="0 0 18 18" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-213.000000, -129.000000)"><g id="create" transform="translate(213.000000, 129.000000)"><path d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z" id="Shape"/></g></g></g></svg>`

div.appendChild(icon)

    all_blogs.appendChild(div);
});

let icons = document.getElementById('here');


// icons.addEventListener('click', function() {
//     // onEdit(blogs)
//     console.log("__here ____ ");
//     localStorage('blog_to_edit', ); 

//     window.location('/dash.html')
//     console.log(icons)
// });



// console.log('__________'+ icons + '__________')
// document.getElementById('icon2').addEventListener('click', function() {
//     // onEdit(blogs);
//     console.log(icons)
// });

})



// <div id='here' onclick="onEdit('${blog.title}')">
// <?xml version="1.0" ?><svg height="20px" version="1.1" viewBox="0 0 18 18" width="32px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-213.000000, -129.000000)"><g id="create" transform="translate(213.000000, 129.000000)"><path d="M0,14.2 L0,18 L3.8,18 L14.8,6.9 L11,3.1 L0,14.2 L0,14.2 Z M17.7,4 C18.1,3.6 18.1,3 17.7,2.6 L15.4,0.3 C15,-0.1 14.4,-0.1 14,0.3 L12.2,2.1 L16,5.9 L17.7,4 L17.7,4 Z" id="Shape"/></g></g></g></svg>
// </div>