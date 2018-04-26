import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import NavigatorBar from "./components/NavigationBar";
import StudentRoute from './components/routes/StudentRoute';
import GuestRoute from './components/routes/GuestRoute';
import PropTypes from "prop-types";
import SignupPage from "./components/pages/SignupPage";
import ViewAllCourses from "./components/pages/ViewAllCourses";
import CoursePage from "./components/pages/CourseInfo"
import PageOne from "./components/pages/Blockly/pageOne";
import PageTwo from "./components/pages/Blockly/pageTwo";
import PageThree from "./components/pages/Blockly/pageThree";
import PageFour from "./components/pages/Blockly/pageFour";
import PageFive from "./components/pages/Blockly/pageFive";
import PageSix from "./components/pages/Blockly/pageSix";
import PageSeven from "./components/pages/Blockly/pageSeven";
import PageEight from "./components/pages/Blockly/pageEight";
import PageNine from "./components/pages/Blockly/pageNine";
import PageTen from "./components/pages/Blockly/pageTen";
import PageEleven from "./components/pages/Blockly/pageEleven";
import PageTwelve from "./components/pages/Blockly/pageTwelve";
import PageThirteen from "./components/pages/Blockly/pageThirteen";
import PageFourteen from "./components/pages/Blockly/pageFourteen";



const App = ({location}) => (
            <div>
                <div className="container">
                    <NavigatorBar/>
                </div>
                <div className="padding">

                </div>
                <div className="ui container">
                    <Route
                        location={location}
                        path="/"
                        exact component={HomePage} />
                    <Route
                        path="/courses/:id"
                        exact component={CoursePage}
                        />
                    <Route
                        path="/blockly/1"
                        exact component={PageOne}
                    />
                    <Route
                        path="/blockly/2"
                        exact component={PageTwo}
                    />
                    <Route
                        path="/blockly/3"
                        exact component={PageThree}
                    />
                    <Route
                        path="/blockly/4"
                        exact component={PageFour}
                    />
                    <Route
                        path="/blockly/5"
                        exact component={PageFive}
                    />
                    <Route
                        path="/blockly/6"
                        exact component={PageSix}
                    />
                    <Route
                        path="/blockly/7"
                        exact component={PageSeven}
                    />
                    <Route
                        path="/blockly/8"
                        exact component={PageEight}
                    />
                    <Route
                        path="/blockly/9"
                        exact component={PageNine}
                    />
                    <Route
                        path="/blockly/10"
                        exact component={PageTen}
                    />
                    <Route
                        path="/blockly/11"
                        exact component={PageEleven}
                    />
                    <Route
                        path="/blockly/12"
                        exact component={PageTwelve}
                    />
                    <Route
                        path="/blockly/13"
                        exact component={PageThirteen}
                    />
                    <Route
                        path="/blockly/14"
                        exact component={PageFourteen}
                    />
                    <GuestRoute
                        location={location}
                        path="/login"
                        exact component={LoginPage} />
                    <GuestRoute
                        location={location}
                        path="/signup"
                        exact component={SignupPage}
                    />
                    <StudentRoute
                        location={location}
                        path="/dashboard"
                        exact component={DashboardPage} />
                    <StudentRoute
                        location={location}
                        path="/AllCourses"
                        exact component={ViewAllCourses}/>

                </div>
            </div>
        );

App.propTypes ={
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
};




export default App;
