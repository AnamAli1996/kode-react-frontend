import React from 'react';
import Unity from 'react-unity-webgl'

export default class QuizApp extends React.Component {
    render() {
        return <Unity
            src='../../Build/Quiz.json'
            loader='../../Build/UnityLoader.js'/>
    }
}
