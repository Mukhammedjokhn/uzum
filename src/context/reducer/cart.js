import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    DEC_FROM_CART,
    DELETE_ALL_CART,
} from "../action/actionType";

const cart = (state = [], action) => {
    let index = state.findIndex((i) => i.id === action?.payload?.id);
    switch (action.type) {
        case ADD_TO_CART:
            if (index < 0) {
                return (state = [...state, { ...action.payload, qty: 1 }]);
            } else {
                return state?.map((item, inx) =>
                    inx === index ? { ...item, qty: item.qty + 1 } : item
                );
            }
        case DEC_FROM_CART:
            return state?.map((item, inx) =>
                inx === index ? { ...item, qty: item.qty - 1 } : item
            );
        case REMOVE_FROM_CART:
            return (state = state.filter((i) => i.id !== action.payload.id));
        case DELETE_ALL_CART:
            return (state = []);
        default:
            return state;
    }
};

export default cart;
