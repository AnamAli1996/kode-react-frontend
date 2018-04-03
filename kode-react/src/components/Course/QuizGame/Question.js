import React from 'react';

export default function Question(props){
    return (
        <h2 className="question"> {props.content} </h2>
        );
    }

    Question.propTypes={
        content: React.PropTypes.string.isRequired
    };

