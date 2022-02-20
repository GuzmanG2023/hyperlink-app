// find buttons
var savePostBtn = document.getElementById('save-post-btn');
var deletePostBtn = document.getElementById('delete-post-btn');
var postId = document.getElementById('post-id');
var title = document.getElementById('post-title').value.trim();
var post_data = document.getElementById('post-text').value.trim();

console.log(title);
console.log(post_data);
console.log(postId.dataset.id);

async function editFormHandler(event) {
    event.preventDefault();

    const title = document.getElementById('post-title').value.trim();
    const post_data = document.getElementById('post-text').value.trim();
    const id = postId.dataset.id;


    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            post_data
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('');
    } else {
        alert(response.statusText);
    }
}

savePostBtn.addEventListener('submit', editFormHandler);
