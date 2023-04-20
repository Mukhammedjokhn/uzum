import { combineReducers } from "redux";
import heart from "./heart";
import cart from "./cart";

const rootReducer = combineReducers({
    water() {
        return "Redux water";
    },
    heart,
    cart,
});

export default rootReducer;
