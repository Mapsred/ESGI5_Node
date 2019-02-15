const reducer = function (state = { isLogged: false, user: null }, action) {

    switch (action.type) {
        case 'LOGIN':
            return Object.assign({}, state, {
                isLogged: false,
                user: null,
                login: action.payload
            });
        case 'LOGOUT':
            return Object.assign({}, state, {
                isLogged: false,
                user: null
            });
        default:
            return state;
    }
};

export default reducer;