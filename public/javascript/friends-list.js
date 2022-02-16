async function friendsListHandler(event) {
    event.preventDefault();

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
    });
}