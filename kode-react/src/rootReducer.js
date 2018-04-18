import {combineReducers} from 'redux';
import user from "./reducers/user";
import FlashCard from "./reducers/FlashCard"
export default combineReducers({
    user,
});