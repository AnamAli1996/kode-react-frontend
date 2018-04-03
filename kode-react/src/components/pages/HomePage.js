import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions  from "../../actions/auth";
import {Button, Container, Divider, Grid, Header, Icon, Statistic, Embed, Image, List, Menu, Responsive, Segment, Sidebar, Visibility,} from 'semantic-ui-react'
import jumbotron from "../../video.png"
import MapComponent from "../Maps/MyMapComponent"

const HomepageHeading = ({ mobile }) => (

    <Container text>
        <Header
            as='h1'
            content='Welcome to Kode'
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
            content="Programming for future programmers"
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        <Button primary size='huge' href="/signup">
            Get Started
            <Icon name='right arrow' />
        </Button>
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
    }

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
        <Segment inverted color='yellow'  style={{ border: "solid black",padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Statistic.Group size='small' widths='four'>
                            <Statistic>
                                <Statistic.Value>63%</Statistic.Value>
                                <Statistic.Label>of STEM jobs are <br />in Computer science</Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value>
                                    9/30
                                </Statistic.Value>
                                <Statistic.Label>Are computer science <br /> jobs </Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value>
                                    54%
                                </Statistic.Value>
                                <Statistic.Label>students enjoy <br /> computer science the most</Statistic.Label>
                            </Statistic>

                            <Statistic>
                                <Statistic.Value>
                                    40%
                                </Statistic.Value>
                                <Statistic.Label>Computer science  <br /> graduate earns 40% <br /> more than average <br />graduate degree.</Statistic.Label>
                            </Statistic>
                        </Statistic.Group>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <Segment inverted color='yellow' style={{ border: "solid black", padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' , color: "black"}}>We help create future programmers</Header>
                        <p style={{color: "black",  fontSize: '1.33em' }}>
                            We have created virtual courses to help children learn programming concepts by completing small
                            exercises which are very easy to do.
                        </p>
                        <Header as='h3' style={{ fontSize: '2em', color: "black" }}>Why is learning programming so important?</Header>
                        <p style={{ fontWeight: 'bold', color: "black", fontSize: '1.33em' }}>
                          Programming stimulates creativity
                        </p>
                        <p style={{ color: "black", fontSize: '1.33em' }}>
                            What happens when kids’ unlimited imagination meets a tool with infinite potentialities such as coding?

                            It’s an explosive combo: the kids’ imagination can express wholly through a tool that allows them to realize everything they’re thinking about.

                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={8}>
                        <Embed
                            id='XMZFUnAgOqs'
                            placeholder={jumbotron}
                            source='youtube'
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment inverted color='yellow' style={{ border: "solid black", padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' , color: "black"}}>Find out where your nearest CodoDojo is.</Header>

                            <p style={{color: "black", fontWeight: 'bold', fontSize: '1.33em' }}>
                                What are CodoDojos?
                            </p>
                        <p style={{color: "black", fontSize: '1.33em' }}>
                            CoderDojo is a true global movement and phenomenon. Volunteers all around the world help young people build a positive future through coding and community.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={8}>
                        <MapComponent isMarkerShown />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>Footer Header</Header>
                            <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
);





HomepageLayout.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.webToken
    };
}

export default connect(mapStateToProps, { logout: actions.logout })(HomepageLayout);

