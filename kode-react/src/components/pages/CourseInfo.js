import React from 'react'
import axios from 'axios'

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
        if(id===6){
            window.open('/Blockly.html', '_blank');
        }else if(id===7){
            window.open('/QuizGame');
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
        return(
            <div>
                <h1> {this.state.course.name} </h1>
                <p>{this.state.course.description}</p>
                <p>Price: $ {this.state.course.price}</p>
                <button onClick={()=>this.handleClick(this.state.course.id)}>View</button>
            </div>
        )
    }
}
