import axios from "axios"

export function signup(userData) {
    return dispatch => {
        var apiUrl = "http://localhost:8080/api/Student/add?" +
            "firstName=" + userData.firstName + "&lastName=" + userData.lastName +
            "&email=" + userData.email + "&password=" + userData.password + "&age=" + userData.age;
        return axios.post(apiUrl);
    }

}