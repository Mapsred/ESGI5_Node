export const receiveUser = (data) => {
    return {
        type: 'USER',
        payload: data
    }
};

export const fetchUser = (dispatch) => {
    const token = localStorage.getItem('token');

    fetch('http://127.0.0.1:3000/user',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => dispatch(receiveUser(data)))
        .catch(error => console.log(error));

    return {
        type: 'RECEIVE_USER',
        payload: {}
    }
};