import React from 'react'
import image from '.././logo.png'
import PropTypes from "prop-types"
import * as actions  from ".././actions/auth";
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import { Link } from "react-router-dom";

let styles ={
    width: "160px",
    height: "100px",
};



const NavigationBar = ({isAuthenticated, logout} ) => (


            <nav>
                <div className="navWide">
                    <div className="wideDiv">
                        <div>
                             <a className="image-nav" href='#'> <img  src={image} style={styles} alt="my image"/></a>
                        </div>

                        {isAuthenticated ? (
                            <div>
                                <a href="/dashboard"> Dashboard </a>
                                <a href="/" onClick={() => logout()}> Logout </a>
                            </div>
                            ):(
                                <div>
                                    <Link to="/login">Login</Link>
                                    <Link to="/signUp">Register</Link>
                                </div>
                            )}


                    </div>
                </div>
            </nav>

);

NavigationBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.webToken
    };
}


export default connect(mapStateToProps, { logout: actions.logout })(NavigationBar);





