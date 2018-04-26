import { USER_LOGGED_IN, USER_LOGGED_OUT} from "../types";
import api from "../api";


export const userLoggedIn =(user) =>({
    type: USER_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
});


export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        localStorage.studentJWT = user.webToken;
        localStorage.studentName = user.firstName + " " + user.lastName;
        localStorage.studentId = user.id;
        if(user.blockly_id === 1 || user.blockly_id === 0)
            localStorage.studentProgress = "/Blockly.html";
        else if(user.blockly_id === 2)
            localStorage.studentProgress = "/CircleBlockly.html";
        else if(user.blockly_id === 3)
            localStorage.studentProgress = "/DrawBlockly.html";
        else if(user.blockly_id === 4)
            localStorage.studentProgress = "/CharacterBlockly.html";
        else if(user.blockly_id === 5)
            localStorage.studentProgress = "/pokemon.html";
        else if(user.blockly_id === 6)
            localStorage.studentProgress = "/Loops.html";
        else if(user.blockly_id === 7)
            localStorage.studentProgress = "/integers.html";
        else if(user.blockly_id === 8)
            localStorage.studentProgress = "/TrafficLights.html";
        else if(user.blockly_id === 9)
            localStorage.studentProgress = "/TrafficLightSequence.html";
        else if(user.blockly_id === 10)
            localStorage.studentProgress = "/TrafficLightRepeat.html";
        else if(user.blockly_id === 11)
            localStorage.studentProgress = "/Strings.html";
        else if(user.blockly_id === 12)
            localStorage.studentProgress = "/Variables.html";
        else if(user.blockly_id === 13)
            localStorage.studentProgress = "/ifStatements.html";
        else if(user.blockly_id === 14)
            localStorage.studentProgress = "/List.html";



        dispatch(userLoggedIn(user));
    });

export const logout = () => dispatch => {
    localStorage.removeItem("studentJWT");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentId");
    dispatch(userLoggedOut());
};

