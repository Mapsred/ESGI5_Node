const reducer = function (state = { register: [] }, action) {

    switch (action.type) {
        case 'REGISTER':
            return Object.assign({}, state, {
                register: action.payload
            });
        default:
            return state;
    }
};

export default reducer;