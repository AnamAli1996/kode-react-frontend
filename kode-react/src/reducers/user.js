import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types";

export default function user(state = {}, action = {}) {
    switch (action.type) {
        case USER_LOGGED_IN:
            return action.user;
        case USER_LOGGED_OUT:
            return {};
        case "GET_PAGE":
            return {
                ...state,
                progress: action.page
            };
        default:
            return state;
    }
}