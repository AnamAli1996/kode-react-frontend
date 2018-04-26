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
            parentsEmail: "",
            password: "",
            blockly_id: ""

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
        if (!data.firstName) errors.firstName = "Cant be blank, Please refresh the page and try again.";
        if (!data.lastName) errors.lastName = "Cant be blank, Please refresh the page and try again.";
        if (!data.age) errors.age = "Cant be blank, Please refresh the page and try again.";
        if (!isEmail(data.email)) errors.email = "Invalid email, Please refresh the page and try again.";
        if (!data.password) errors.password = "Can't be blank, Please refresh the page and try again.";
        if (!data.parentsEmail) errors.parentsEmail = "Can't be blank, Please refresh the page and try again.";


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
                                <Form.Input error={!!errors.parentsEmail}
                                            type="email"
                                            id="parentsEmail"
                                            name="parentsEmail"
                                            value={data.parentsEmail}
                                            onChange={this.onChange}
                                            fluid
                                            icon='user'
                                            iconPosition='left'
                                            placeholder='Parents e-mail address'
                                >
                                    {errors.parentsEmail && <InlineError text={errors.parentsEmail}/>}
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

                        <Message info>
                            <Message.Header>Terms and Conditions</Message.Header>
                            <p>I agree to be bound by the Kode terms of service. If I am under 13 years of age, I confirm by submitting this form that I have my parent or legal guardian's permission to use the Kode services.

                                Email addresses are not stored in a form that allows us to contact students. Students will never recieve emails from Kode.</p>
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