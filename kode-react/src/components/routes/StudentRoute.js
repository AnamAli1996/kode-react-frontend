import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const StudentRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}
    />
);

StudentRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.webToken
    };
}

export default connect(mapStateToProps)(StudentRoute);