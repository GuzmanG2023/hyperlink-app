async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_data = document.querySelector('input[name="post-data"]').value;

    const games = {
            "Destiny 2" : {
                "game_id": 1,
                "platform_id" : 1,
                "genre_id" : 1
            },
            "Mortal Kombat 11": {
                "game_id": 2,
                "platform":  2,
                "genere_id": 2
            },
            "NBA 2K22": {
                "game_id": 3,
                "platform":  3,
                "genere_id": 3
            },
            "Sea of Thieves": {
                "game_id": 4,
                "platform":  4,
                "genere_id": 4
            },
            "Final Fantasy XIV": {
                "game_id": 5,
                "platform":  5,
                "genere_id": 5
            }
    }

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_data
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);