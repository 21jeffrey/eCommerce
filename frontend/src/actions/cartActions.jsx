import axios from 'axios';
import { CART_ADD_ITEM } from '../constants/cartConstants';
import { CART_REMOVE_ITEM } from '../constants/cartConstants';

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    try {
        const { data } = await axios.get(`/api/products/${id}`);

        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                quantity
            }
        });

        
        console.log("Cart Items Before Saving:", getState().cart.cartItems);
        
        localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.error(error);
    }
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    });

    // Update localStorage after removing item
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};