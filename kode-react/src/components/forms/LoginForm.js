import React from "react";
import PropTypes from "prop-types";
import {Form, Button, Message, Grid, Header, Icon, Segment} from "semantic-ui-react";
import Validator from "validator";
import InlineError from "../messages/InlineError";

class LoginForm extends React.Component {
    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        console.log("State= ", this.state.data);
        this.setState({errors});
        if (Object.keys(errors).length === 0) {
            this.setState({loading: true});
            this.props
                .submit(this.state.data)
                .catch(err =>
                    this.setState({errors: err.response.data.errors, loading: false})
                );
        }
    };

    validate = data => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be blank";
        return errors;
    };

    render() {
        const {data, errors, loading} = this.state;

        return (
            <div className='login-form'>
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
                <Grid
                    textAlign='center'
                    style={{height: '100%'}}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='yellow' textAlign='center'>
                            <Icon color='yellow' name='sign in'/>
                            {' '}Log-in to your account
                        </Header>
                        <Form  size='large' onSubmit={this.onSubmit} loading={loading}>
                            {errors.global && (
                                <Message negative>
                                    <Message.Header>Something went wrong</Message.Header>
                                    <p>{errors.global}</p>
                                </Message>
                            )}
                            <Segment stacked>
                                <Form.Input error={!!errors.email}
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={data.email}
                                            onChange={this.onChange}
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='E-mail address'
                                >
                                    {errors.email && <InlineError text={errors.email}/>}
                                </Form.Input>
                                <Form.Input error={!!errors.password}
                                            type="password"
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            id="password"
                                            name="password"
                                            value={data.password}
                                            onChange={this.onChange}
                                >
                                    {errors.password && <InlineError text={errors.password}/>}
                                </Form.Input>
                                <Button color='yellow' fluid size='large'>Login</Button>
                            </Segment>
                        </Form>
                        <Message color='yellow'>
                            New to us? <a style={{color: "blue"}} href='/signup'>Sign Up</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;