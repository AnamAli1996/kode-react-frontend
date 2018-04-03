import React from "react";
import Jumbo from ".././coding.jpg"
import {ApContainer} from 'apeman-react-basic'
import {ApJumbotron, ApJumbotronStyle, ApJumbotronText, ApJumbotronTitle} from 'apeman-react-jumbotron'
import { Button } from 'semantic-ui-react'
import {Link} from "react-router-dom"


 const jumbotron = () => (
    <div>
        <ApJumbotronStyle/>
        <ApJumbotron imgSrc={Jumbo}
                     imgFilter="#rgba(0,0,0,0.5)">
            <ApContainer>
                <ApJumbotronTitle>Welcome to Kode</ApJumbotronTitle>
                <ApJumbotronText>
                    Programming for kids, for future programmers
                </ApJumbotronText>
            </ApContainer>
            <Link to="/signUp">
                <Button class="ui positive button">Get Started</Button>
            </Link>
        </ApJumbotron>
    </div>
);

export default jumbotron;