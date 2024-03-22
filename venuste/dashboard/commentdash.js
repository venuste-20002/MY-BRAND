document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentContainer = document.getElementById("commentContainer");
    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    // Display existing comments from local storage
    displayComments();

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const commentText = document.getElementById("comment").value;
        const date = new Date().toLocaleDateString();

        // Create new comment object
        const newComment = {
            name: name,
            email: email,
            comment: commentText,
            date: date
        };

        // Add new comment to the comments array
        comments.push(newComment);

        // Save comments to local storage
        localStorage.setItem("comments", JSON.stringify(comments));

        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comment").value = "";

        // Display the new comment
        displayComments();
    });

    function displayComments() {
        commentContainer.innerHTML = "";
        comments.forEach(comment => {
            const newCommentDiv = document.createElement("div");
            newCommentDiv.classList.add("card", "comment-widgets", "m-b-20"); // Add card class
            newCommentDiv.innerHTML = `
            <div class="card-body">

            <div class="comment-widgets m-b-20">

                <div class="d-flex flex-row comment-row">
                    <div class="comment-text w-100">
                        <h5>${comment.name}</h5>
                        <div class="comment-footer">
                            <span class="date">${comment.date}</span>
                            <span class="label label-info">Pending</span> <span class="action-icons">
                                    <a href="#" data-abc="true"><i class="fa fa-pencil"></i></a>
                                    <a href="#" data-abc="true"><i class="fa fa-rotate-right"></i></a>
                                    <a href="#" data-abc="true"><i class="fa fa-heart"></i></a>
                                </span>
                        </div>
                        <p class="m-b-5 m-t-10">${comment.comment}</p>
                    </div>
                </div>

            </div>
            `;



            commentContainer.appendChild(newCommentDiv);
        });
    }
});