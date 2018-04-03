import React from 'react';
import axios from 'axios'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {Table, Button } from "semantic-ui-react"
import _ from 'lodash'

let courseId;
function priceFormatter(cell, row) {
    return `<i class='glyphicon glyphicon-usd'></i> ${cell}`;
}

    export default class ViewAllCourses extends React.Component {

        constructor(props) {
            super(props);

            this.state = {
                courseList: [],
                search: "",
                column: null,
                direction: null

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

        handleSort = clickedColumn => () => {
            const {column, courseList, direction} = this.state;

            if (column !== clickedColumn) {
                this.setState({
                    column: clickedColumn,
                    courseList: _.sortBy(courseList, [clickedColumn]),
                    direction: 'ascending',
                })

                return
            }
            this.setState({
                courseList: courseList.reverse(),
                direction: direction === 'ascending' ? 'descending' : 'ascending',
            })
        };

        onViewCourseSelected(id){
            console.log('Course',id);
            window.open("/courses/" + id);


        }

        render(){
            const { column, courseList, direction } = this.state;
            return(

            <Table sortable celled fixed color="yellow">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>Name</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'description' ? direction : null} onClick={this.handleSort('description')}>Description</Table.HeaderCell>
                        <Table.HeaderCell sorted={column === 'price' ? direction : null} onClick={this.handleSort('price')}>Price</Table.HeaderCell>
                        <Table.HeaderCell> View  </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.courseList.map((course) =>
                        <Table.Row key={course.id}>
                            <Table.Cell>{course.name}</Table.Cell>
                            <Table.Cell>{course.description}</Table.Cell>
                            <Table.Cell>{course.price}</Table.Cell>
                            <Table.Cell><Button color='yellow' id= {course.id} onClick={(e) => this.onViewCourseSelected(course.id)}>View</Button></Table.Cell>
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
            )
        }



}
