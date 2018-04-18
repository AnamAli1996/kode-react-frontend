import { USER_LOGGED_IN, USER_LOGGED_OUT} from "../types";
import api from "../api";
import axios from "axios";

export const userLoggedIn =(user) =>({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});

export const getPage = (page) => ({
    type: "GET_PAGE",
    page: page
});





export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        localStorage.studentJWT = user.webToken;
        localStorage.studentName = user.firstName + " " + user.lastName;
        localStorage.studentId = user.id;
        localStorage.studentProgress = "";
        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem("studentJWT");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentId");
    dispatch(userLoggedOut());
};

export const getPage1 = () => dispatch => {
    let studentId = localStorage.getItem("studentId");
    let apiUrl = "http://localhost:8080/api/Student/" + studentId + "/showPage";
    axios.post(apiUrl).then(res => {
        dispatch(getPage(res.data))
    });
};
