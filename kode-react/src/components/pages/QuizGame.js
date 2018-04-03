import React from 'react';
import QuizApp from "../Course/QuizApp";

export default class QuizGame extends React.Component{
    render(){
        return(
            <div>
                <h1> Quiz Game </h1>
                <QuizApp/>
            </div>
        )
    }
}