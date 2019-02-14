const reducer = function (state = { products: [] }, action) {

    switch (action.type) {
        case 'PRODUCTS':
            return Object.assign({}, state, {
                products: action.payload
            });
        default:
            return state;
    }
};

export default reducer;