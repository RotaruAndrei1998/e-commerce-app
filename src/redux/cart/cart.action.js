export const setHidden = () => ({
    type: 'TOGGLE_CART_HIDDEN',
});

export const addCartItem = item => ({
    type: 'ADD_CART_ITEM',
    payload: item,
})