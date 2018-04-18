import React from 'react';
import * as actions from "../../actions/auth";
import {connect} from 'react-redux';
import PropTypes from "prop-types"
import CourseList from "../search/CourseList";
import {Header, Icon, Label, Button, Segment, Message} from 'semantic-ui-react'

var studentId = localStorage.getItem("studentId");
let student = localStorage.getItem("studentName");

let progress = localStorage.getItem("studentProgress");

const DashboardPage = ({isAuthenticated, logout}) => (

    <div>
        <div>
            <Header as='h2' icon textAlign='center'>
                <Icon circular inverted color='yellow' name='users'/>
                <Header.Content style={{color: "#fcbc0c"}}>
                    {student}'s Dashboard
                </Header.Content>

                <br/>

                <div>
                    <Label as='a' color='orange' tag href="/AllCourses">View All Courses</Label>
                </div>
            </Header>
            <CourseList/>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>


        <Segment inverted color='yellow' style={{width: "700px", marginLeft: "200px"}} textAlign='center'>
            <Message style={{fontSize: "1.875em", fontFamily: "Arial, Helvetica, sans-serif", color: "black"}}>
                You are currently playing Blockly, do you wish to continue where you left off?
                <div><Button href={progress} basic color='orange'>Start</Button></div>
            </Message>
        </Segment>


    </div>
);

DashboardPage.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.webToken
    };
}



export default connect(mapStateToProps, { logout: actions.logout })(DashboardPage);