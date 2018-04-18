import React from 'react'
import axios from 'axios'
import {Header, Image, Segment, Message, Label, Button} from "semantic-ui-react";
import ImageIcon from "../../Blockly.png"

export default class CourseInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: {
                name: ''
            }
        };
    }

    handleClick(id){
        if(id===8){
            window.open('/blockly/1');
        }
    }


    componentDidMount() {
        const {match: {params}} = this.props;
        console.log(params.id);
        axios.get("http://localhost:8080/api/course/showCourse/" + params.id).then(
            ({data: course}) => {
                console.log("COURSE: ", course);
                this.setState({course});

            }
        );

    }



    render(){
        const square = { marginLeft: 30, width: 605, height: 205 };
        return(
            <div>
                <Header as='h2' icon textAlign='center' color={"yellow"}>
                    <Image src={ImageIcon} style={{height: "200px", width: "700px"}}fluid />
                </Header>
                <Label as='a' color='blue' ribbon style={{marginTop:"3px", marginLeft: "250px"}}>Price: $ {this.state.course.price}</Label>
                <Segment  inverted color='black' style={{width: "700px", marginLeft: "250px"}} textAlign='center' >
                    <Message color="purple" style={{fontSize: "1.875em", fontFamily: "Arial, Helvetica, sans-serif", color:"black"}}>{this.state.course.description}
                        <div><Button basic color='purple' onClick={()=>this.handleClick(this.state.course.id)}>Start</Button></div>
                    </Message>
                </Segment>

            </div>
        )
    }
}
