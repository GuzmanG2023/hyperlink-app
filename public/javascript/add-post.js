var newPostBtn = document.getElementById("new-post");

var gameDictionary = {
    "Destiny 2" : {
        "game_id": 1,
        "platform_id" : 1,
        "genre_id" : 1
    },
    "Mortal Kombat 11": {
        "game_id": 2,
        "platform_id":  1,
        "genre_id": 2
    },
    "NBA 2K22": {
        "game_id": 1,
        "platform_id":  1,
        "genre_id": 1
    },
    "Sea of Thieves": {
        "game_id": 4,
        "platform_id":  4,
        "genre_id": 4
    },
    "Final Fantasy XIV": {
        "game_id": 5,
        "platform_id":  5,
        "genre_id": 5
    }
}

async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_data = document.querySelector('input[name="post-text"]').value;
    const game = document.getElementById('game-dropdown').value;
    console.log(game);
    const game_id = gameDictionary[game].game_id;
    const platform_id = gameDictionary[game].platform_id;
    const genre_id = gameDictionary[game].genre_id

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            post_data,
            game_id,
            platform_id,
            genre_id
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

newPostBtn.addEventListener("click", newFormHandler);