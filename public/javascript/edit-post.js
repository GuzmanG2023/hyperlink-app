// find buttons
var savePostBtn = document.getElementById('save-post-btn');
var postId = document.getElementById('post-id');
var title = document.getElementById('post-title').value.trim();
var post_data = document.getElementById('post-text').value.trim();

async function editPost(event) {
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

savePostBtn.addEventListener('click', editPost);
