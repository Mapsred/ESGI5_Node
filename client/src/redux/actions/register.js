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
        .catch(error => console.log(error));
};

export {
    register
}
