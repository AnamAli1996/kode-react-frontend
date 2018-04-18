import React from "react";
import PropTypes from "prop-types";
import {Form, Button, Message, Grid, Segment, Header, Icon} from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";

class SignupForm extends React.Component {
    state = {
        data: {
            firstName: "",
            lastName: "",
            age: "",
            email: "",
            password: ""

        },
        loading: false,
        errors: {}
    };

    onChange = e =>
        this.setState({
            ...this.state,
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
        if (!data.firstName) errors.firstName = "Cant be blank";
        if (!data.lastName) errors.lastName = "Cant be blank";
        if (!data.age) errors.age = "Cant be blank";
        if (!isEmail(data.email)) errors.email = "Invalid email";
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
                    verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' style={{color: 'white'}} textAlign='center'>
                            <Icon style={{color: 'white'}} name='signup'/>
                            {' '}Sign up!
                        </Header>

                        <Form size='large' onSubmit={this.onSubmit} loading={loading}>
                            {errors.global && ( <Message negative>
                                <Message.Header> Something went wrong </Message.Header>
                                <p>{errors.global}</p> </Message>)}
                            <Segment stacked>
                                <Form.Input error={!!errors.firstName}
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={data.firstName}
                                            onChange={this.onChange}
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='First Name'>
                                    {errors.firstName && <InlineError text={errors.firstName}/>}
                                </Form.Input>
                                <Form.Input error={!!errors.lastName}
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={data.lastName}
                                            onChange={this.onChange}
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='Last Name'
                                >
                                    {errors.lastName && <InlineError text={errors.lastName}/>}
                                </Form.Input>
                                <Form.Input error={!!errors.age}
                                            type="age"
                                            id="age"
                                            name="age"
                                            value={data.age}
                                            onChange={this.onChange}
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='Age'
                                >
                                    {errors.age && <InlineError text={errors.age}/>}
                                </Form.Input>
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
                                <Message
                                    error
                                    header='Action Forbidden'
                                    content='You can only sign up for an account once with a given e-mail address.'
                                />
                                <Message
                                    success
                                    header='Form Completed'
                                    content="You're all signed up for the newsletter"
                                />

                                <Button fluid size='large' color='yellow'>Let's go</Button>

                            </Segment>
                        </Form>
                        <Message color='yellow'>
                            Already have an account? <a style={{color: "blue"}} href='/login'>Sign In</a>
                        </Message>

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

SignupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default SignupForm;