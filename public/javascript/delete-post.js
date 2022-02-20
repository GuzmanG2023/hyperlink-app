var deletePostBtn = document.getElementById('delete-post-btn');
var postId = document.getElementById('post-id');

async function deletePost(event) {
    event.preventDefault();

    const id = postId.dataset.id;

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
};

deletePostBtn.addEventListener('click', deletePost);