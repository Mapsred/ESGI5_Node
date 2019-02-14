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

export const addToCart = (data, dispatch) => {
    const token = localStorage.getItem('token');

    data = {
        product_id: data._id,
        price: data.price,
        picture_link: data.picture_link,
        description: data.description
    };

    fetch('http://127.0.0.1:3000/user/cart',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => dispatch(receiveUser(data)))
        .catch(error => console.log(error));

    return {
        type: 'RECEIVE_USER',
        payload: {}
    }

};