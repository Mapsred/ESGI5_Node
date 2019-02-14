import { fetchUser } from "./user";

const logUser = (data, dispatch) => {
    const token = localStorage.getItem('token');

    fetch('http://127.0.0.1:3000/user',
        {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
        .then(response => response.json())
        .then(() => dispatch(fetchUser(dispatch)))
        .catch(error => console.log(error));

    return {
        type: 'LOGIN',
        payload: data
    }
};

const login = (email, password, dispatch) => {
    const data = { email, password };

    fetch('http://127.0.0.1:3000/login_check',
        {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => dispatch(logUser(data, dispatch)))
        .catch(error => console.log(error));

    return {
        type: 'RECEIVE_LOGIN',
        payload: {}
    }
};

export {
    login,
    logUser
}
