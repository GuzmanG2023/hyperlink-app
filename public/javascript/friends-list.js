var userEl = document.getElementById('user-profile');
var friendsEl = document.getElementById('friends-list');

async function friendsListHandler(event) {
    event.preventDefault();

    console.log('Printing from the friends list handler')
    const response = await fetch(`./api/friend/${id}`, {
        method: 'GET',
        body: JSON.stringify({
            title
        }),
        attributes: [
            'id', 
            'user_id1', 
            'user_id2',
            'request'
        ],
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(
        console.log(response)
    )
    .catch(err => {
        console.log(err);
    })
    
}

// add event listener
friendsEl.addEventListener('click', friendsListHandler);