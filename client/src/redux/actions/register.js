const registerUser = (data) => {
    return {
        type: 'REGISTER',
        payload: data
    }
};

const register = (data, dispatch) => {
    fetch('http://127.0.0.1:3000/register',
        {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => dispatch(registerUser(data)))
        .catch(error => console.log(error));

    return {
        type: 'REGISTER',
        payload: {}
    }
};

export {
    register,
    registerUser
}
