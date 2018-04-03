import axios from "axios";

export default {
    user: {

        login: credentials => {
            var apiUrl = "http://localhost:8080/api/Student/login?email=" + credentials.email + "&password=" + credentials.password;
            return axios.post(apiUrl).then(res => res.data.user,
                console.log("logged in")
            );

        },

        signup: user => {
            var apiUrl = "http://localhost:8080/api/Student/add?" +
                "firstName=" + user.firstName + "&lastName="+ user.lastName +
                "&email=" + user.email +  "&password=" + user.password + "&age=" + user.age;
            console.log(apiUrl);
            axios.post(apiUrl).then(res => res.data.user)


        }

    }
}