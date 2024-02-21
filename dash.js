var blogs = [];

if (localStorage.getItem('blogs')) {
    blogs = JSON.parse(localStorage.getItem('blogs'))

} else{
    blogs = [];
}


function submitForm(event){

    event.preventDefault();
    console.log("submitted")
   
    var title = document.getElementById('a_title');
    var desc = document.getElementById('a_desc');
    var cont = document.getElementById('a_content');
    var category = document.getElementById('a_category');

    console.log('clicked')
    blog = {
        title: title.value,
        desc: desc.value,
        cont: cont.value,
        category: category.value
    }
    
    blogs.push(blog);

    localStorage.setItem('blogs', JSON.stringify(blogs))
  
}


const title_to_edit = JSON.parse(localStorage.getItem('blog_to_edit'));

function findObjectByTitle(title_to_edit) {
    return blogs.find(item => item.title === title_to_edit);
}

const  blog_to_edit = findObjectByTitle(title_to_edit)




function onEdit(event){
    var selectedRow = event.target.parentElement.parentElement;
    var title = selectedRow.querySelector('.title').innerHTML;
    var desc = selectedRow.querySelector('.desc').innerHTML;
    var cont = selectedRow.querySelector('.cont').innerHTML;
    var category = selectedRow.querySelector('.category').innerHTML;

    document.getElementById("a_title").value = title;
    document.getElementById("a_desc").value = desc;
    document.getElementById("a_cont").value = cont;
    document.getElementById("a_category").value = category;
    console.log(onEdit)
}
