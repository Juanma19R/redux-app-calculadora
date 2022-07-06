// Components
import { types } from "../types/AuthTypes";

export const AuthReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return action.payload;

        case types.logout:
            return {}    
    
        default:
            return state;
    }
}