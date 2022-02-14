async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_data = document.querySelector('input[name="post-data"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_data
        }),
        headers: {
            'Content-Type': 'appliocation/json'
        }
    });

    if (response.ok) {
        document.location.replace('');
    } else {
        alert(response.statusTest);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);