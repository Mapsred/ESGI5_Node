export const receiveProducts = (data) => {
    return {
        type: 'PRODUCTS',
        payload: data
    }
};

export const receiveProduct = (data) => {
    return {
        type: 'PRODUCT',
        payload: data
    }
};

export const fetchProducts = (dispatch) => {
    const token = localStorage.getItem('token');

    fetch('http://127.0.0.1:3000/products',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => dispatch(receiveProducts(data)))
        .catch(error => console.log(error));

    return {
        type: 'RECEIVE_PRODUCTS',
        payload: {}
    }
};

export const fetchProduct = (id, dispatch) => {
    const token = localStorage.getItem('token');

    fetch(`http://127.0.0.1:3000/products/${id}`,
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.json())
        .then(data => dispatch(receiveProduct(data)))
        .catch(error => console.log(error));

    return {
        type: 'RECEIVE_PRODUCT',
        payload: {}
    }
};