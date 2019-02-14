const reducer = function(state = {user: {cart: []}}, action) {
    switch (action.type) {
        case 'USER':
            return Object.assign({}, state, {
                user: action.payload
            });
        default:
            return state;
    }
};

export default reducer;