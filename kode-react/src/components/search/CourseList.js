import React from 'react';
import axios from 'axios';
import Autocomplete from 'react-autocomplete'
import {Label, Icon, Button, Input} from "semantic-ui-react"
import image from '../../search-icon.png'


export default class CourseList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            courseList: [],
            search: "",
            courseId: "",
            value: ""
        };

    }

    componentDidMount(){
        axios.get("http://localhost:8080/api/course/allCourse")
            .then(res => {
                    const courseList = res.data;
                    console.log(courseList);
                    this.setState({courseList: courseList});
                }
            )
    }

    updateSearch(event) {
        this.setState({search: event.target.value});
        console.log(this.state.search)
    }

    myFunction(value) {
        console.log(this.state.value);
         axios.get("http://localhost:8080/api/course/" + this.state.value).then(res => {
            const courseId = res.data;
             console.log(res.data);
             this.setState({courseId: courseId});
             console.log(this.state.courseId);
             window.location.assign("/courses/" + this.state.courseId);
         });

    }


    render(){

        let filteredContacts = this.state.courseList.filter(
            (course) => {
                return course.name.toLowerCase().indexOf
                        (this.state.search.toLowerCase()) !== -1;
            }
        );

        console.log(this.props.courseList);
        console.log(filteredContacts);
        let styles ={
            width: "13px",
            height: "13px",
            color: "#fcbc0c",
            marginTop: "17px"
        };
        return(


            <div style={{float:"right"}}>

                <div>
                    <div >
                        <Label as='a' color='yellow' ribbon>Search for a course</Label>
                </div>


                <Autocomplete style={{height: "78px", width: "100%",
                    padding: "12px 20px",
                    margin: "8px 0",
                    display: "inline-block",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    boxSizing: "border-box"}}
                items={this.state.courseList}
                shouldItemRender={(course, value) => course.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={ (course) => course.name}
                renderItem={(course, isHighlighted) =>
                    <div key={course.id}
                         style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                        {course.name}
                    </div>
                }
                    value={this.state.value}
                    placeholder="Search for a course"
                    onChange={(e) => this.setState({value: e.target.value})}
                    onSelect={(value) => this.setState({value})}


                />

                <Button icon color="yellow" onClick={() => this.myFunction(this.state.search)}>
                    <Icon color="black" flipped='horizontally' name='search' /></Button>
                </div>
                <br />
            </div>
        );
    }

}
