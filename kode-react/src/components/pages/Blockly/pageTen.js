import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import {Button, Container, Grid, Header, Icon,  Image,  Menu, Responsive, Segment, Sidebar, Visibility,} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (

    <Container text style={{backgroundImage: "url('http://backgroundcheckall.com/wp-content/uploads/2017/12/transparent-background-gif-7.gif')", backgroundRepeat: "repeat" }}>
        <Header
            as='h1'
            content='Chapter Ten'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content="Traffic Lights- Part 3"
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Image src="https://media.giphy.com/media/3o7bua93rLAc56NEOc/giphy.gif" centered size="small"/>
    </Container>

);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

class DesktopContainer extends React.Component {
    state = {};

    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive {...Responsive.onlyComputer}>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment inverted textAlign='center' color='black' style={{ minHeight: 700, padding: '1em 0em', backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./jumbotron.jpg')" }} vertical>
                        <HomepageHeading />
                    </Segment>
                </Visibility>

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

class MobileContainer extends React.Component {
    state = {};

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    };

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive {...Responsive.onlyMobile}>
                <Sidebar.Pushable>
                    <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
                        <Menu.Item as='a' active>Home</Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                        <Menu.Item as='a'>Log in</Menu.Item>
                        <Menu.Item as='a'>Sign Up</Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
                        <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
                            <Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>Log in</Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

const HomepageLayout = (isAuthenticated, logout) => (
    <ResponsiveContainer>
        <Segment inverted color='blue' style={{ border: "solid black", padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column  width={18}>
                        <Header as='h3' textAlign="centered" style={{ fontSize: '2em' , color: "black"}}>Welcome to the part 3!</Header>
                        <Image src="https://media.giphy.com/media/S80aZMkLElnDW/giphy.gif" centered size="small"/>
                        <Header as='h3' textAlign="centered" style={{ fontSize: '2em' , color: "black"}}>Do you remember we did loops before? </Header>
                        <Header as='h3' textAlign="centered" style={{ fontSize: '2em', color: "black" }}>We will do loops again, but this time we will do it with a specfic numbers</Header>
                        <p style={{ textAlign:"center", fontWeight: 'bold', color: "black", fontSize: '1.33em' }}>
                           Traffic light functions have to keep goin, do we will repeat it some number of times.
                        </p>
                        <p style={{ textAlign:"center", fontWeight: 'bold', color: "black", fontSize: '1.33em' }}>
                            Let's go and repeat what we did in the last function
                        </p>
                        <p style={{ textAlign:"center", fontWeight: 'bold', color: "black", fontSize: '1.33em' }}>
                            let's get our thinking hats on and let's go!

                            <p>
                                <br />
                                <Button inverted color='black' onClick={onClick()} href="/TrafficLightRepeat.html" content='Go!' />
                            </p>
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </ResponsiveContainer>
);





HomepageLayout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function onClick(){
    var page = 10;
    var studentId = localStorage.getItem("studentId");
    axios.get("http://localhost:8080/api/Student/" + studentId + "/addPage/" + page );
    localStorage.setItem("studentProgress", "/TrafficLightRepeat.html");
    console.log(localStorage.getItem("studentProgress"))

}

export default (HomepageLayout);

