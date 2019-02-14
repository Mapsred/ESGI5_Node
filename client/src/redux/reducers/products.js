const reducer = function (state = { products: [] }, action) {

    switch (action.type) {
        case 'PRODUCTS':
            return Object.assign({}, state, {
                products: action.payload
            });
        case 'PRODUCT':
            return Object.assign({}, state, {
                product: action.payload
            });
        default:
            return state;
    }
};

export default reducer;