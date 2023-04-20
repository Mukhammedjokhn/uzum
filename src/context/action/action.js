import {
    ADD_TO_HEART,
    REMOVE_FROM_HEART,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    DEC_FROM_CART,
} from "./actionType";

export const addToHeart = (payload) => {
    return {
        type: ADD_TO_HEART,
        payload,
    };
};
export const removeFromHeart = (payload) => {
    return {
        type: REMOVE_FROM_HEART,
        payload,
    };
};

export const addToCart = (payload) => {
    return {
        type: ADD_TO_CART,
        payload,
    };
};
export const removeFromCart = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload,
    };
};
export const decFromCart = (payload) => {
    return {
        type: DEC_FROM_CART,
        payload,
    };
};
